import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, phone, vehicleDetails, serviceNeeded } = await req.json()

    // Email content
    const emailContent = `
New Quote Request from Balkan Detailing Website

Customer Details:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone}
- Vehicle: ${vehicleDetails}

Service Requested:
${serviceNeeded}

---
This email was sent automatically from the Balkan Detailing website contact form.
    `

    console.log('Quote request received:', {
      firstName,
      lastName,
      email,
      phone,
      vehicleDetails,
      serviceNeeded
    })

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Balkan Detailing <onboarding@resend.dev>',
      to: 'balkandetailingco@gmail.com',
      subject: `New Quote Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Quote Request from Balkan Detailing Website</h2>
        
        <h3>Customer Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Vehicle:</strong> ${vehicleDetails}</li>
        </ul>
        
        <h3>Service Requested:</h3>
        <p>${serviceNeeded}</p>
        
        <hr>
        <p><em>This email was sent automatically from the Balkan Detailing website contact form.</em></p>
      `,
    })

    if (emailResponse.error) {
      throw new Error(`Failed to send email: ${emailResponse.error.message}`)
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Quote request received successfully' 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Error processing quote request:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to process quote request' 
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})