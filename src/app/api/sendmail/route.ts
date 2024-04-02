import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api

const transporter = nodemailer.createTransport({
    service: "gmail",
    host:"smtp.gmail.com",
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});


export async function POST(request: NextRequest) {
    const req = await request.json()

    try {

        const mail = await transporter.sendMail({
            from: req.fname,
            to: process.env.EMAIL,
            replyTo: req.email,
            subject: `Enquiry from ${req.fname} ${req.lname}`,
            html: `
            <p>Name: ${req.fname} ${req.lname} </p>
            <p>Email: ${req.email} </p>
            <p>Phone: ${req.phone} </p>
            <p>Message: ${req.message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
       return NextResponse.json({ message: "COULD NOT SEND MESSAGE" })
    }


}