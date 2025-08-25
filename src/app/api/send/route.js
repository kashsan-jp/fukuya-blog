// import  Email  from '../../../emails/my-email';
import { EmailTemplate } from '@/components/EmailTemplete';
import { Resend } from 'resend';


// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
    const body = await req.json();
  try {
        const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: 'kashsanichiban@gmail.com',
        subject: 'Hello world',
        react: EmailTemplate({ 
            firstName: body.firstName || "empty", 
            lastName: body.lastName || "empty",
            email: body.lastName || "empty",
            message: body.message || "empty",
        }), 
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}