<template>
    <section id="hero" class="clearfix">
    	<div class="nav-panel">
			<section>
            	<button class="btn btn-primary btn-login">Login</button>
                <div class="city">
                	<i class="sprt mrkr"></i>
                	<small>You are in</small><span>Delhi NCR</span> 
                    <i class="fa fa-angle-down"></i>
                </div>
            	<a href="#" class="sprt brand">PASSIONSTREET</a>
            </section>    
            <section class="search">
            	<form method="post" action="">
                	<input type="text" placeholder="Search..." />
                </form>
            </section>  
            <section class="nav-item">
            	<a href="#"><i class="sprt icon psn"></i><small>Browse</small>PASSION ZONE</a>
                <i class="sprt arrow"></i>	
            </section> 
            <section class="nav-item">
            	<a href="#"><i class="sprt icon clndr"></i><small>Book & Create</small>EVENTS</a>
                <i class="sprt arrow"></i>	
            </section>
            <section class="nav-item">
            	<a href="#"><i class="sprt icon cmnty"></i><small>Browse & Follow</small>COMMUNITY</a>
                <i class="sprt arrow"></i>	
            </section> 
            <section class="scl_conct">
            	<a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google-plus"></i></a>
                <a href="#"><i class="fa fa-envelope"></i></a>
            </section>	
        </div>
        
        <div id="bnr1" class="carousel slide bnr1" data-ride="carousel">
        	<div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/images/food-culinary-bnr.jpg" alt="">
                  	 <div class="carousel-caption">
                        <h2>#LiveWhatYouLove!</h2>
                        <p>Follow Your Passion - Join. Connect. Exhibit.</p>
                      </div>
                </div>
                <div class="carousel-item ">
                  <img src="/images/cycling-bnr2.jpg" alt="">
                  <div class="carousel-caption">
                    <h2>#LiveWhatYouLove!</h2>
                    <p>Follow Your Passion - Join. Connect. Exhibit.</p>
                  </div>
                </div>
                <div class="carousel-item ">
                  <img src="/images/music-bnr.jpg" alt="">
                  <div class="carousel-caption">
                    <h2>#LiveWhatYouLove!</h2>
                    <p>Follow Your Passion - Join. Connect. Exhibit.</p>
                  </div>
                </div>
                <div class="carousel-item ">
                  <img src="/images/running-bnr.jpg" alt="">
                  <div class="carousel-caption">
                        <h2>#LiveWhatYouLove!</h2>
                        <p>Follow Your Passion - Join. Connect. Exhibit.</p>
                      </div>
                </div>
                <div class="carousel-item ">
                  <img src="/images/yoga-bnr.jpg" alt="">
                  <div class="carousel-caption">
                        <h2>#LiveWhatYouLove!</h2>
                        <p>Follow Your Passion - Join. Connect. Exhibit.</p>
                      </div>
                </div>
             </div>   
        </div>
        <div class="bnr2">
        	<img src="/images/dancing-bnr.jpg" alt="">
            <div class="caption">
            	<h2>Create & Manage Events</h2>
                <p>Single window for Ticketing, Analytics & Social Interaction!</p>
                
                <button class="btn btn-primary" @click="$router.push('event-creation')">Create Event</button>
            </div>
        </div>
        <div class="bnr3">
			<img src="/images/photography-bnr.jpg" alt="">
             <div class="caption">
            	<h2>Build Your Own Community</h2>
                <p>Start building your own passion community!</p>
            </div>
        </div>        
    </section>
</template>

<script>
export default {
   mounted() {
    // $('.carousel').carousel({
    //   interval: 4000
    // })
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '/js/custom.js')
    document.body.appendChild(recaptchaScript)
  },
}
</script>
