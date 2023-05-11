import { sql } from '@vercel/postgres';

async function insertWhitelist(req, res) {
    console.log(req);
      try {

        console.log(req);
  //      console.log(res);
//
        await query(sql`

            INSERT INTO whitelist (name, checked) VALUES ('', FALSE)

        `);


        
      } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
      }
    
      return res.status(200).json({ error: "" });
    }
    
    export default insertWhitelist;