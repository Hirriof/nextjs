
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SG_MTP_KEY);

async function sendEmail(req, res) {

// voyageurs@spacerent.fr > Mailing 

  try {
    await sendgrid.send({
      to: "aleygues@gmail.com", // Your email where you'll receive emails
      //to: "professionnels@spacerent.fr", // Your email where you'll receive emails
      from: "aleygues@gmail.com", // your website email address here
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Spacerent: Lead</title>
        <meta name="description" content="Spacerent: Lead">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>

      <body>
        <ul>
          <li>Firstname: ${req.body.firstname}</li>
          <li>Lastname: ${req.body.firstname}</li>
          <li>eMail: ${req.body.email}</li>
          <li>Phone: ${req.body.phone}</li>
          <li>Name: ${req.body.message}</li>
        </ul>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;