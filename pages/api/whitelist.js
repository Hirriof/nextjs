import { sql } from '@vercel/postgres';

async function insertWhitelist(req, res) {

 
       try {


        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      
        const { rows } = await sql`
          INSERT INTO whitelist ( USERNAME, EMAIL)
          VALUES (
            
             'Adrien',
              'qsdqqqqqqaaaaaasd@gmail.com'
              
            )
        `;
        //redirect(`/product/${rows[0].slug}`);
        
      } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({ error: error.message });
      }
    
      return res.status(200).json({ error: "" });
    }
    
    export default insertWhitelist;