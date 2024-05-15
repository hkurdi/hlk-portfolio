require("dotenv").config();
var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3001;

var transport = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/sendmail", (req, res) => {
  const { user_name, user_email, message } = req.body;

  var mail = {
    from: {
      name: user_name,
      address: process.env.HLK_EMAIL,
    },
    to: process.env.HLK_EMAIL,
    subject: `New Message from ${user_name}`,
    text: message,
    replyTo: user_email
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        status: "fail",
        error: err.message,
      });
    } else {
      console.log("Email sent: " + data.response);
      res.json({
        status: "success",
      });

      transporter.sendMail(
        {
          from: process.env.HLK_EMAIL,
          to: user_email,
          subject: "Your message has been received",
          text: `Greetings ${user_name},\nI have just received your message, and will get back to you as soon as possible.\n\nBest Regards,\n${process.env.HLK}`,
          html: `<p>Greetings ${user_name},<br>I have just received your message, and will get back to you as soon as possible.<br><br>Best Regards,<br>${process.env.HLK}</p>`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Auto-reply sent: " + info.response);
          }
        }
      );
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
