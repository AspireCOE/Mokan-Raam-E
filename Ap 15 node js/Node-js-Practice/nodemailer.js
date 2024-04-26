const nodemailer = require('nodemailer');

const html = `
    <h1>Hello world</h1>
    <p>Isn't NodeMailer useful?</p>
`;

async function main() {
    try {
        const transporter = nodemailer.createTransport({
            host:'smtp.gamil.com',
            port:465,
            service: 'gmail',
            auth: {
                user: 'mokanraame25@gmail.com',
                pass: 'niaammohela'
            }
        });

        const mailOptions = {
            from: 'mokanraame25@gmail.com',
            to: 'myfriend@yahoo.com', // to : array;       let array = [20euec090@skcet.ac.in,20euec079@skcet.ac.in]
            subject: 'Sending Email using Node.js',
            html: html,
            attachments: [{
                filename: 'image.png',
                path: './image.png',
                cid: 'unique@mokanraame25@gmail.com'
            }]
        };

        // Send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + mailOptions.response);
        console.log('Message sent: ' + mailOptions.messageId);
        console.log(mailOptions.accepted);
        console.log(mailOptions.rejected);
    } catch (error) {
        console.log('Error occurred:', error);
    }
}

main();