import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     host:"smtp.gmail.com",
//     secure: false,
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_APP_PASSWORD
//     }
// });


export async function POST(request: NextRequest) {
    const req = await request.json()

    try {

        // const mail = await transporter.sendMail({
        //     from: req.fname,
        //     to: process.env.EMAIL,
        //     replyTo: req.email,
        //     subject: `Enquiry from ${req.fname} ${req.lname}`,
        //     html: `
        //     <p>Name: ${req.fname} ${req.lname} </p>
        //     <p>Email: ${req.email} </p>
        //     <p>Phone: ${req.phone} </p>
        //     <p>Message: ${req.message} </p>
        //     `,
        // })

        if (!process.env.NEXT_PUBLIC_API_URL) {
            throw new Error("NEXT_PUBLIC_API_URL is not defined");
        }

        const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
            fname: req.fname,
            lname: req.lname,
            email: req.email,
            phone: req.phone,
            message: req.message,
        }),
    });

       const data = await res.json();

    return NextResponse.json({ success: true, data });

    } catch (error) {
       console.error("Sheet Error:", error);
    return NextResponse.json(
      { success: false, message: "Could not save lead" },
      { status: 500 }
    );
    }


}