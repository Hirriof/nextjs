import { sql } from '@vercel/postgres';
import sendgrid from "@sendgrid/mail";
sendgrid.setApiKey(process.env.SG_MTP_KEY);

async function insertWhitelist(req, res) {

        try {
          var today = new Date();
          
          const { rows } = await sql`
            INSERT INTO whitelist ( USERNAME, EMAIL, CREATED_ON)
            VALUES (
              ${req.body.fname},
              ${req.body.email},
              ${today}        
              )
          `;

          await sendgrid.send({
            to: "aleygues@gmail.com", // Your email where you'll receive emails
            from: "aleygues@gmail.com", // your website email address here
            subject: `Spacerent: Whitelist`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html lang="en">
            <head>
              <meta charset="utf-8">
              <title>Spacerent: Whitelist</title>
              <meta name="description" content="Spacerent: Lead">
              <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            </head>
      
            <body>
              Nouvelle demande de whitelisting : 
              <ul>
                <li>Firstname: ${req.body.fname}</li>
                <li>eMail: ${req.body.email}</li>
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
    
    export default insertWhitelist;