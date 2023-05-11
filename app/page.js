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
    <div>
        <nav id='mainNav' className="navbar navbar-default navbar-fixed-top">
        <div className="container">
        {/* <!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span><i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top"><img src="img/Logo-spacerent.png" alt="logo" /></a>
            </div>

            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                   <li><a href="#page-top" className="page-scroll hvr-btn">Accueil</a></li>
                    <li><a href="#services" className="page-scroll hvr-btn">Voyageurs</a></li>
                    <li><a href="#works" className="page-scroll hvr-btn">Professionnels</a></li>
					<li><a href="#testimonials" className="page-scroll hvr-btn">Témoignages</a></li>
					<li><a href="#blog" className="page-scroll hvr-btn">Équipe</a></li>
                    <li><a href="#clients" className="page-scroll hvr-btn">Advisors</a></li>
                    <li><a href="#contact" className="page-scroll hvr-btn">Contact</a></li>
                </ul>
            </div>
            {/*<!-- /.navbar-collapse -->*/}
        </div>
        {/*<!-- /.container-fluid -->*/}
    </nav>

    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="header-content">
                        <div className="header-content-inner">
                        	<img src="img/Logo-Spacerent-Big.png" alt="Spacerent" style={{alignContent: 'center'}} />
                            <h1 className="wow fadeInUp animated" style={{fontSizeAdjust: 'auto'}} >Économisez sur vos séjours et revendez-les si vous CHANGEZ VOS plans</h1>
                            <h3 className="wow fadeInUp animated">Whitelist</h3>
				    		<p className="wow fadeInUp animated" style={{fontSize: '30px'}}>Inscrivez-vous dès maintenant. <br />Gagnez des avantages exclusifs pour vos prochains voyages</p>
                            <div className="btn-sec">
                             	<form id="signin" className="navbar-form" onSubmit={handleSubmitWhitelist}>   
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                        <input id="fname" type="text" className="form-control" name="name" value="" placeholder="Nom"  defaultValue="Nom" />
                                    </div>
	 
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-envelope-o"></i></span>
                                        <input id="mail" type="email" className="form-control" name="email" value="" placeholder="Email"  defaultValue="Email" />                                    </div>            
                                    <button type="submit" className="btn btn-default hvr-btn">S&apos;ENREGISTRER</button>
                               </form>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
	
    {/*<!-- Section-1 -->*/}
    <section id="about" className="abt" style={{display:'none'}}>
        <div className="container">
            <div className="row">
            	<div className="col-sm-4">
                	<h2 className="section-heading wow fadeInUp animated">About Us</h2>
                </div>
                <div className="col-sm-8">
                    <p className="vline sub-txt wow fadeInUp animated">We are professionals in <span>Web design & Graphic design</span>. We do quality website templates as per clients requirements, we follow current web trends. our support will be there after completed the projects.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>       	
                </div>
            </div>
            <div className="row mtop">
            	<div className="col-sm-4">
                	<img src="img/abt-1.png" alt="abt-icon" />
                    <h4 className="wow fadeInUp animated">Who we are ?</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto explicabo.</p>
                </div>
                <div className="col-sm-4">
                	<img src="img/abt-2.png" alt="abt-icon" />
                    <h4 className="wow fadeInUp animated">What we do?</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto explicabo.</p>
                </div>
                <div className="col-sm-4">
                	<img src="img/abt-3.png" alt="abt-icon" />
                    <h4 className="wow fadeInUp animated">Why we Are ?</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto explicabo.</p>
                </div>
            </div>
        </div>
    </section>
	
    {/*<!-- Section-2 -->*/}
    <section id="services" className="services">
        <div className="container">
            <div className="row">
            	<div className="col-md-6 col-sm-12">
                	<h2 className="section-heading wow fadeInDown animated">Pour les voyageurs&nbsp;</h2>
                    <p className="sub-txt wow fadeInUp animated">Louez au meilleur rapport qualité/prix/sécurité tout en bénéficiant d&apos;une grande flexbilité.</p>
                    
                    {/*<!-- Accordian Panel -->*/}
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingOne">
                                 <h4 className="panel-title">
                                 <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            FRAIS DIVISÉS PAR 3
                          </a>
                          </h4>
                    
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                <div className="panel-body"><p>SpaceRent vous redonne du pouvoir d&apos;achat en divisant les frais par 3 comparé à toutes les autres plateformes de location saisonnière comme Airbnb, Booking, Abritel.</p>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingTwo">
                                 <h4 className="panel-title">
                                 <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            POSSIBILITÉ DE REVENDRE SON SÉJOUR
                          </a>
                          </h4>
                    
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="panel-body"><p>Fini le stress des réservations non remboursables si vos plans changent. <br /><br /> Revendez vos séjours et trouvez même des affaires de dernière minute sur notre plateforme dédiée.</p></div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingThree">
                                 <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            flexibilitÉ de paiement
                          </a>
                          </h4>
                    
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div className="panel-body"><p>Payez vos séjours sur SpaceRent en euros ou bien en cryptomonnaies.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 center-block wow fadeInRight animated">
                	<img src="img/people-b-map.png" className="img-responsive" alt="people-map" />                         	
                </div>
            </div>
        </div>
    </section>
	
     {/*<!-- Section-3 -->*/}
    <section id="works" className="works">
        <div className="container">
            <div className="row">
				<div className="col-md-6 col-sm-12 center-block wow fadeInRight animated">
                	<img src="img/people-b-map-2.png" className="img-responsive" alt="people-map" />                         	
                </div>
            	<div className="col-md-6 col-sm-12">
                	<h2 className="section-heading wow fadeInDown animated">Pour les PROPRIÉTAIRES</h2>
                    <p className="sub-txt wow fadeInUp animated">Gagnez plus et faites profiter vos voyageurs des économies réalisées grâce à SpaceRent.</p>
                    
                    {/*<!-- Accordian Panel -->*/}
                    <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingFour">
                                 <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion2" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            aucun frais
                          </a>
                          </h4>
                    
                            </div>
                            <div id="collapseFour" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingFour">
                                <div className="panel-body">
                                  <p>En moyenne, chez les concurrents, les frais de service vont de 3% à 18%.&nbsp;</p>
                                  <p>Avec SpaceRent, c&apos;est 0% de frais de service que vous soyez un hôte particulier ou professionnel.&nbsp;</p>
                                  <p>Nous vous garantissons ainsi une augmentation de votre taux d&apos;occupation mais surtout, une meilleure rentabilité.&nbsp; &nbsp;</p>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingFive">
                                 <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            ACCÈS À UNE NOUVELLE CLIENTÈLE</a>
                          </h4>
                    
                            </div>
                            <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                <div className="panel-body"><p>Avec l&apos;émergence de nouveaux voyageurs internationaux de type crypto-touristes, SpaceRent propose une passerelle naturelle vers cette Génération Z.</p></div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingSix">
                                 <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                            Amélioration de votre compétitivité</a>
                          </h4>
                    
                            </div>
                            <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                <div className="panel-body"><p>Connectez votre site à SpaceRent pour améliorer votre compétitivité sur les moteurs de recherche. <br /><br /> Bénéficiez d&apos;un ciblage amélioré pour atteindre des clients plus pertinents et intéressés par votre offre.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
    {/*<!-- Section-4 -->*/}
    <section id="#testimonials" className="testimonials" style={{display: 'true'}}>
        <div className="container">
        	<div className="row">
            	<div className="col-sm-12">
                	<h2 className="section-heading wow fadeInUp animated">Témoignages</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                        {/*<!-- Carousel Slides / Quotes -->*/}
                            <div className="carousel-inner text-center">
                            {/*<!-- Quote 1 -->*/}
                                <div className="item active">
                                    <blockquote>
                                        <div className="row ">
                                        	<div className="col-md-2 col-sm-4 col-xs-12">
                                                <p className="cname">Ghislain165</p>
                                                <p className="cadd">Paris - France</p>
                                            </div>
                                            <div className="col-md-7 col-sm-6 col-xs-12 col-sm-offset-2 box-test">
                                                <p><span>&#34;</span> J&apos;alerte sur l&apos;approche du point de rupture, à trop augmenter les prélèvements, Airbnb et consorts (Abritel fait pire), l&apos;écart entre le bénéfice perçu par le propriétaire et le prix payé par le voyageur va devenir trop important… <span>&#34;</span></p>
                                                <hr />
                                                <h5 className="wow fadeInUp animated">Ghislain165</h5>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                {/*<!-- Quote 2 -->*/}
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-md-2 col-sm-4 col-xs-12">
                                                <p className="cname">Ghislain165</p>
                                                <p className="cadd">Paris - France</p>
                                            </div>
                                            <div className="col-md-7 col-sm-6 col-xs-12 col-sm-offset-2 box-test">
                                                <p><span>&#34;</span> J&apos;alerte sur l&apos;approche du point de rupture, à trop augmenter les prélèvements, Airbnb et consorts (Abritel fait pire), l&apos;écart entre le bénéfice perçu par le propriétaire et le prix payé par le voyageur va devenir trop important…  <span>&#34;</span></p>
                                                <hr />
                                                <h5 className="wow fadeInUp animated">Ghislain165</h5>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
        
                            {/*<!-- Carousel Buttons Next/Prev -->*/}
                            <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-angle-left"></i></a>
                            <a data-slide="next" href="#quote-carousel" className="left lspace carousel-control"><i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            


    
    
    
    {/*<!-- Section-5 -->*/}
    <section id="blog" className="blog">
    	<div className="container">
        	<div className="row">
            	<div className="col-sm-6">
                	<h2 className="section-heading wow fadeInUp animated">NOTRE ÉQUIPE</h2>
                </div>
                <div className="col-sm-6">
                    <p className="vline sub-txt wow fadeInUp animated">Nous sommes une équipe pluridisciplinaire, passionnée par la Blockchain.</p>      	
                </div>
            </div>
            <div className="row mtop">
            	<div className="col-md-4 col-sm-6">
                	<img src="img/blog-1.jpg" className="img-responsive" alt="blog-1" />
                    <h4 className="wow fadeInUp animated">ClÉMENT VERGNOLLE</h4>
                    <p className="date"><i className="fa fa-calendar"></i>&nbsp;&nbsp;<span>Stratégie &amp; Développement</span></p>
                    <p>11 ans comme International Sales Executive et 2 ans en Marketing International.</p>
                    <p className="blog-btm">
                    	<i className="fa fa-share-alt"></i>&nbsp;&nbsp;<span><a href="https://www.linkedin.com/in/clement-vergnolle" target="_blank">LinkedIn</a></span>
                    </p>
                  </div>
                <div className="col-md-4 col-sm-6">
                	<img src="img/blog-2.jpg" className="img-responsive" alt="blog-2" />
                    <h4 className="wow fadeInUp animated">DAVID FERREIRA</h4>
                    <p className="date"><i className="fa fa-calendar"></i>&nbsp;&nbsp;<span>Marketing Digital</span></p>
                    <p>14 ans dans le Marketing Digital, entrepreneur, lancement de 3 sociétés.</p>
                    <p className="blog-btm">
                    	<i className="fa fa-share-alt"></i>&nbsp;&nbsp;<span><a href="https://www.linkedin.com/in/david-ferreira-web3" target="_blank">LinkedIn</a></span>
                    </p>
                </div>
                <div className="col-md-4 col-sm-6">
                	<img src="img/blog-3.jpg" className="img-responsive" alt="blog-3" />
                    <h4 className="wow fadeInUp animated">CYRILLE B.</h4>
                    <p className="date"><i className="fa fa-calendar"></i>&nbsp;&nbsp;<span>Gestion &amp; Finance</span></p>
                    <p>17 ans dans le milieu bancaire, la finance et le développement.</p>
                    <p className="blog-btm">
                    	<i className="fa fa-share-alt"></i>&nbsp;&nbsp;<span><a href="https://www.linkedin.com/in/cyrilleboullier" target="_blank">LinkedIn</a></span>
                    </p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <img src="img/blog-4.jpg" className="img-responsive" alt="blog-2" />
                    <h4 className="wow fadeInUp animated">ADRIEN LEYGUES</h4>
                    <p className="date"><i className="fa fa-calendar"></i>&nbsp;&nbsp;<span>CTO</span></p>
                    <p>20 ans comme responsable technique dans des agences digitales de prestige.</p>
                    <p className="blog-btm">
                        <i className="fa fa-share-alt"></i>&nbsp;&nbsp;<span><a href="https://www.linkedin.com/in/aleygues/" target="_blank">LinkedIn</a></span>
                    </p>
                </div>
                <div className="col-md-4 col-sm-6">
                    <img src="img/blog-5.jpg" className="img-responsive" alt="blog-3" />
                    <h4 className="wow fadeInUp animated">MARIE GRUJARD</h4>
                    <p className="date"><i className="fa fa-calendar"></i>&nbsp;&nbsp;<span>UX/UI DESIGNER</span></p>
                    <p>12 ans comme UI/UX designer, directrice artistique et front-end developer.</p>
                    <p className="blog-btm">
                        <i className="fa fa-share-alt"></i>&nbsp;&nbsp;<span><a href="https://www.linkedin.com/in/mariegrujard/" target="_blank">LinkedIn</a></span>
                    </p>
                 </div>
              </div>
        </div>
    </section>
    
    
    
    {/*<!-- clients section-->*/}
    <section id="clients" className="works">
        <div className="container">
            <div className="row">
            	<div className="col-sm-6">
                	<h2 className="section-heading">NOS ADVISORS</h2>
                </div>
                <div className="col-sm-6">
                    <p className="vline sub-txt">Nos advisors nous font confiance sur ce projet <span>SpaceRent</span> et nous apportent leur expertise dans leurs domaines.<br /><br />
                    - <span>Clément Bergé-Lefranc&nbsp;</span>(Ownest/Owalt), Advisor Business,<br />
					- <span>David Hanson&nbsp;</span>(Ultra), Advisor Blockchain,<br />
					- <span>Jérémy Asta-Vola</span>, (Avocat Cabinet Morell-Allard) Advisor Juridique,<br />
					- <span>Gallic Guyot</span>, Advisor Tourisme.<br /></p>      	
                </div>
            </div>
        </div>
    </section>
    
    
	{/*<!-- Section-6 -->*/}
    <section id="contact" className="contact">
    	<div className="container">
            <div className="row">
            	<div className="col-sm-6">
                	<h2 className="section-heading wow fadeInUp animated">Contacts</h2>
                </div>
                <div className="col-sm-6">
                    <p className="vline sub-txt wow fadeInUp animated">Vous pouvez nous adresser vos demandes de renseignements en remplissant le formulaire suivant :&nbsp; &nbsp;&nbsp;</p>      	
                </div>
            </div>
            <div className="row mtop">
                <div className="col-sm-4">
                	<i className="fa fa-phone wow fadeInUp animated"></i>
                	<p>+33 7 87 47 28 92
<br /></p>
                </div>
                <div className="col-sm-4">
                	<i className="fa fa-map-marker wow fadeInUp animated"></i>
                	<p>Bordeaux<br />
						France
               	    </p>
                </div>
                <div className="col-sm-4">
                	<i className="fa fa-paper-plane wow fadeInUp animated"></i>
                	<p>contact@spacerent.fr</p>
                </div>
            </div>
            <div className="row mtop">
            	<div className="col-sm-8 col-sm-offset-2" >
                	<div className="form">
                        <form id="contact-form" name="contactFrm" onSubmit={handleSubmitPro}>
                        	<div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="fName" autoComplete="off" id="fName" placeholder="Prénom" />
                                    </div>
                            	</div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="lName" autoComplete="off" id="lName" placeholder="Nom" />
                                    </div>
                            	</div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" autoComplete="off" id="email" placeholder="Email" />
                                    </div>
                            	</div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="phone" autoComplete="off" id="phone" placeholder="Téléphone" />
                                    </div>
                            	</div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control textarea" rows="3" name="Message" id="Message" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                         			    <button type="submit" className="btn btn-default hvr-btn wow fadeInUp animated">Envoyer</button>
                                </div>
                             </div>                          
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </section>
    
   
    <footer>
    	<div className="footer-top" style={{display: 'none'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <a href="index.html"><img src="img/logo.png" className="img-responsive wow fadeInUp animated" alt="logo-2" /></a>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit be voluptatem accusantium doloremque laudantium, so aperiam, eaque ipsa quae ab illo inventore quasi to architecto beatae vitae dicta sunt explicabo.</p><br/>                        
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <h3>QUICK LINKS</h3>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <ul className="rgt">
                                    <li><i className="fa fa-angle-right"></i>&nbsp;&nbsp;<a href="#page-top" className="page-scrol">Home</a></li>
                                    <li><i className="fa fa-angle-right"></i>&nbsp;&nbsp;<a href="#about" className="page-scrol">About Us</a></li>
                                    <li><i className="fa fa-angle-right"></i>&nbsp;&nbsp;<a href="#services" className="page-scrol">Services</a></li>
                                    <li><i className="fa fa-angle-right"></i>&nbsp;&nbsp;<a href="#clients" className="page-scrol">Our Clients</a></li>
                                    <li><i className="fa fa-angle-right"></i>&nbsp;&nbsp;<a href="#testimonials" className="page-scroll">Testimonial</a></li>
                                    <li><i className="fa fa-angle-right"></i>&nbsp;&nbsp;<a href="#contact" className="page-scroll">Contact</a></li>
                                </ul>
                             </div>
                             <div className="col-xs-6 col-sm-6 col-md-6">
                                <ul>                        	
                                    <li><i className="fa fa-angle-right"></i>&nbsp;&nbsp;<a href="#works" className="page-scroll">Works</a></li>
                                    <li><i className="fa fa-angle-right"></i>&nbsp;&nbsp;<a href="#blog" className="page-scroll">Our Blog</a></li>
                                </ul>
                             </div>
                          </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5">
                        <div className="map-responsive">
                            {'/* <iframe src="https://maps.google.com/maps?f=q&source=s_q&q=Newyork%20City&aq=0&ie=UTF8&t=m&z=12&iwloc=A&output=embed" width="480" height="240" allowFullScreen></iframe> */'}
                        </div> 
                    </div>
                </div>              
            </div>
        </div>


        <div className="fbottom">
        	<div className="container">
            	<div className="row">
                	<div className="col-xs-12 col-sm-6 col-md-6 wow fadeInUp animated">
                   	  <h3 style={{color: 'white'}}>La 1ère plateforme de location saisonnière qui utilise la Blockchain pour vous redonner du pouvoir d&apos;achat.</h3>
                    	<p>Copyright &copy; 2023 SpaceRent. Tous droits réservés.</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 wow fadeInUp animated">
                    	<ul className="list-inline">
                            <li><i className="fa  fa-facebook" aria-hidden="true"></i></li>
                            <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                            <li><i className="fa  fa-google" aria-hidden="true"></i></li>
                            <li><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

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