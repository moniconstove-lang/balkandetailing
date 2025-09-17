import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

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

    // For now, we'll use a simple email service
    // You can integrate with services like Resend, SendGrid, or Mailgun
    console.log('Quote request received:', {
      firstName,
      lastName,
      email,
      phone,
      vehicleDetails,
      serviceNeeded
    })

    // TODO: Integrate with actual email service
    // Example with Resend:
    // const res = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
    //   },
    //   body: JSON.stringify({
    //     from: 'noreply@balkandetailing.com',
    //     to: 'balkandetailingco@gmail.com',
    //     subject: `New Quote Request from ${firstName} ${lastName}`,
    //     text: emailContent,
    //   }),
    // })

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