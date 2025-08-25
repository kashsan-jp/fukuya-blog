"use server"

import { Resend } from "resend";
const sendAPI = process.env.NEXT_PUBLIC_RESEND_API_KEY;
const resend = new Resend(sendAPI);

const sendEmail = async() =>{
    await resend.emails.send({
        to: "kashsanichiban@gmail.com",
        from: "Fukuya <www.k-ash.com/fukuya>",
        subject: "Hi Kash",
        html: "<strong>www.k-ash.com</strong>"
    })
}

export default sendEmail