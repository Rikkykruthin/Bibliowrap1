const nodemailer = require("nodemailer");
const schedule = require("node-schedule");

// Configure the transporter for nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "narasimha9283@gmail.com",
        pass: "bnofxdukatfkwnqr",
    },
});

// Email options
const mailOptions = {
    from: '"Bibliowrap Services" <narasimha9283@gmail.com>', // sender address
    to: "student_email@gmail.com", // list of receivers
    subject: "Fine Amount Reminder", // Subject line
    text: "Hello Student,Thanks for Taking the book! This is a reminder-Pay Fine on time", // plain text body
    html: "<b>Fine Amount:0</b>", // html body
};

// Function to send email
const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions); // Correct method is sendMail
        console.log('Email has been sent');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Send email immediately
sendMail(transporter, mailOptions);

// Schedule email to be sent 14 days later
const sendDate = new Date();
sendDate.setDate(sendDate.getDate() + 14);

const job = schedule.scheduleJob(sendDate, function () {
    sendMail(transporter, mailOptions);
    console.log('Scheduled email sent');
});
