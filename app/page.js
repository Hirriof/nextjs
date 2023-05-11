'use client';

import React from 'react';
import Script from 'next/script'

export default function Home() {
   
  async function handleSubmitWhitelist(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/whitelist', {
        method: 'post',
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert('Thanks for contacting us, we will get back to you soon!');
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
}
  
    async function handleSubmitPro(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
          const response = await fetch('/api/contact', {
            method: 'post',
            body: new URLSearchParams(data),
          });
          if (!response.ok) {
            throw new Error(`Invalid response: ${response.status}`);
          }
          alert('Thanks for contacting us, we will get back to you soon!');
        } catch (err) {
          console.error(err);
          alert("We can't submit the form, try again later?");
        }
    

    }


  return (


    {/*<!-- jQuery -->*/}
    <Script src="vendor/jquery/jquery.min.js"></Script>

    {/*<!-- Bootstrap Core JavaScript -->*/}
    <Script src="vendor/bootstrap/js/bootstrap.min.js"></Script>
	<Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/js/bootstrapValidator.min.js"></Script>
    
    {/*<!-- Wow Animations -->*/}
    <Script src="vendor/js/wow.min.js"></Script>

    {/*<!-- Plugin JavaScript -->*/}
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></Script>

    {/*<!-- Theme JavaScript -->*/}*
    <Script src="js/main.js"></Script>
    <Script src="js/jquery.isotope.js"></Script>

    </div>

  );
}