// require('dotenv').config()

// const sgMail = require('@sendgrid/mail')

// const{SG_API_KEY,FROM_EMAIL,TO_EMAIL} = process.env

// sg.setApiKey(SG_API_Key)

// export default async function handler(req,res){
//     const {name, email, message}=req.body

//     constmsg={
//         to:TO_EMAIL,
//         from: FROM_EMAIL,
//         Subject:'sending email to contact Mandeep',
//         html: `<p><strong>Name:</strong>${name}</p>
//         <p><strong>Email:</strong>${email}</p>
//         <p><strong>Message:</strong>${message}</p>`

//     }
//     await sgMail.send(msg)
//     res.json({success:true});
// }
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;
sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  const { name, email, message } = req.body;
  const msg = {
    to: TO_EMAIL, // Change to your recipient
    from: FROM_EMAIL, // Change to your verified sender
    subject: "Contact",
    html: `<p><strong>name: </strong>${name}</p>
    <p><strong>email: </strong>${email}</p>    
    <p><strong>message: </strong>${message}</p>`,
  };
  await sgMail.send(msg);
  console.log("email sent");
  res.status(200).json({ success: true });
}