<template>
<div id="content">
	<div class="evnt_dtl_bnr">
  		<figure>
        	<img src="/images/event-banner.jpg" alt="Cycling" />
        </figure>
        <div class="bnr_caption">
        	<div class="container">
            	<div class="org_logo">
                	<img src="/images/org-logo.jpg" alt=""/>
                </div>	
            	<div class="row">
                	<div class="col-sm-8">
                        <h1>Wildlife Photographers <span class="rating"><i class="fa fa-star"></i> 4.5</span></h1>
                        <div class="stat">
                            <span><i class="fa fa-map-marker"></i> Noida Stadium, Noida (Maps & Directions) </span>  
                            <span><i class="fa fa-users"></i> 3542 Registerations</span>
                            <span><i class="fa fa-eye"></i> 694 Views </span>
                        </div>
                        <div class="stat">
                        <span><i class="fa fa-calendar"></i> Sun, 24 Sept 2017, 6:00 AM to 8:00 AM   </span>
                        </div>
                    </div>
                    <div class="col-sm-4 text-right">
                        <button class="btn btn-primary xl" type="button" @click="$emit('onStepChanged', 2)">Book Your Ticket</button>
                    </div>
                </div>	
            </div>
        </div>
    </div> 
    
    <div class="container">
    	<div class="row">
        	<div class="col-md-9">
            	<div class="evnt_desc">
                	<div class="side_nav" id="myScrollspy">
                        <ul class="nav nav-pills nav-stacked">
                            <li class="active"><a href="#about">About Event</a></li>
                            <li><a href="#itinerary">Itinerary</a></li>
                            <li><a href="#tmc">Terms & Conditions</a></li>
                            <li><a href="#attendees">Attendees</a></li>
                            
                        </ul>
                    </div>
                    
                    <div class="tb_cntnd" data-spy="scroll" data-target="#myScrollspy">
                    	<div id="about" class="box1 wdgt post">
                        	<h2><span>About Event</span></h2>
                            <p>Dare Megathon Championship 2017 is an initiative of Dare2Gear, which is an adventure sports company with expertise in varied number of adventure activities. We are acknowledged for success in providing a holistic approach towards a fitter you by taking account of your social, emotional, mental and physical factors. Brining adventure, exploration and fitness training to the fore, it aims to help its members achieve the highest of their individual potential. Our goal is to provide a platform where we make fitness and healthy lifestyle as a part of life and together we take a step towards literacy for unprivileged kids by supporting LDL."Light De Literacy" NGO.</p>
                            <ul>
                            	<li>
                                	<strong>Event Date</strong>: Sunday, 1st Oct 2017
                                </li>
                                <li>
                                	<strong>Start Time</strong>: 5:30AM 
                                </li>
                                <li>
                                	<strong>End Time</strong>: 9:30AM
                                </li>
                            </ul>
                            <p>USE DISCOUNT CODE: EPAE77681 (Get 10% early bird discount, applicable till 31-aug-2017! ) </p>
                            <p>For Group Registration Discount:  Use code: GPAE40863 ( Get 14% discount for a minimum 5 members group size)</p>
							<p>Use code: GPAE4026 ( Get 20% discount for a minimum 10 members group size)</p>
                        </div>
                        
                        <div id="itinerary" class="box1 wdgt post itinerary">
                        	<h2><span>Itinerary</span></h2>
                           	
                            <ul>
                            	<li>
                                	<div class="date-stamp">
                                    	<span class="date">24</span> Mon Jul
                                    </div>
                                	<div class="desc">
                                    	Lorem Ipsum is simply dummy text of the printing and typesetting... 
                                    </div>
                                    <a href="#" class="more">More <i class="fa fa-angle-down"></i></a>
                                </li>
                               
                                <li>
                                	<div class="date-stamp">
                                    	<span class="date">25</span> Tue Jul
                                    </div>
                                	<div class="desc">
                                    	Lorem Ipsum is simply dummy text of the printing and typesetting... 
                                    </div>
                                    <a href="#" class="more">More <i class="fa fa-angle-down"></i></a>
                                </li>
                                <li>
                                	<div class="date-stamp">
                                    	<span class="date">26</span> Wed Jul
                                    </div>
                                	<div class="desc">
                                    	Lorem Ipsum is simply dummy text of the printing and typesetting... 
                                    </div>
                                    <a href="#" class="more">More <i class="fa fa-angle-down"></i></a>
                                </li>
                                <li>
                                	<div class="date-stamp">
                                    	<span class="date">27</span> Thu Jul
                                    </div>
                                	<div class="desc">
                                    	Lorem Ipsum is simply dummy text of the printing and typesetting... 
                                    </div>
                                    <a href="#" class="more">More <i class="fa fa-angle-down"></i></a>
                                </li>
                            </ul>
                        </div>
                        
                        <div id="tmc" class="box1 wdgt post">
                        	<h2><span>Terms & Conditions</span></h2>
                            <p>Dare Megathon Championship 2017 is an initiative of Dare2Gear, which is an adventure sports company with expertise in varied number of adventure activities. We are acknowledged for success in providing a holistic approach towards a fitter you by taking account of your social, emotional, mental and physical factors. Brining adventure, exploration and fitness training to the fore, it aims to help its members achieve the highest of their individual potential. Our goal is to provide a platform where we make fitness and healthy lifestyle as a part of life and together we take a step towards literacy for unprivileged kids by supporting LDL."Light De Literacy" NGO.</p>
                            
                            <a href="#" class="more">Read More</a>
                        </div>
                        
                        <div class="box1 wdgt post sponsors">
                        	<h2><span>Sponsors</span></h2>
                        	<ul class="clearfix">
                            	<li>
                                	<span>Presenting Partner</span>
                                    <figure><img src="/images/amazone.jpg" alt=""/></figure>
                                    Amazone
                                </li>
                                <li>
                                	<span>Supporting Partner</span>
                                    <figure><img src="/images/cisco.jpg" alt=""/></figure>
                                    Cisco
                                </li>
                                <li>
                                	<span>Title Sponsor</span>
                                    <figure><img src="/images/adidas.jpg" alt=""/></figure>
                                    Adidas
                                </li>
                            </ul>
                        </div>
                        
                        
                        
                        <div id="attendees" class="wdgt">
                        	<div class="hdr3">
                                <h2>Members Attending</h2>
                            </div>
                            <div id="attendees" class="mbr_carousel">
                                <ul class="slider responsive">
                                    <li>
                                        <div class="card">
                                            <div class="dp"><img src="/images/img3.png" alt=""></div>
                                            <h3><a href="#">Abhishek Kapoor</a></h3>
                                            <h4>Noida, India</h4>
                                            <button class="btn btn-inverse">Follow</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="card">
                                            <div class="dp"><img src="/images/img3.png" alt=""></div>
                                            <h3><a href="#">Abhishek Kapoor</a></h3>
                                            <h4>Noida, India</h4>
                                            <button class="btn btn-inverse">Follow</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="card">
                                            <div class="dp"><img src="/images/img3.png" alt=""></div>
                                            <h3><a href="#">Abhishek Kapoor</a></h3>
                                            <h4>Noida, India</h4>
                                            <button class="btn btn-inverse">Follow</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="card">
                                            <div class="dp"><img src="/images/img3.png" alt=""></div>
                                            <h3><a href="#">Abhishek Kapoor</a></h3>
                                            <h4>Noida, India</h4>
                                            <button class="btn btn-inverse">Follow</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="card">
                                            <div class="dp"><img src="/images/img3.png" alt=""></div>
                                            <h3><a href="#">Abhishek Kapoor</a></h3>
                                            <h4>Noida, India</h4>
                                            <button class="btn btn-inverse">Follow</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="card">
                                            <div class="dp"><img src="/images/img3.png" alt=""></div>
                                            <h3><a href="#">Abhishek Kapoor</a></h3>
                                            <h4>Noida, India</h4>
                                            <button class="btn btn-inverse">Follow</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="wdgt">
                        	<div class="hdr3">
                                <h2>Gallery</h2>
                            </div>
                            <div id="gallery-slider" >
                                <ul class="slider responsive">
                                    <li>
                                       <img src="/images/photo1.jpg" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/images/photo2.jpg" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/images/photo3.jpg" alt=""/>
                                        <i class="fa fa-play"></i>
                                    </li>
                                    <li>
                                       <img src="/images/photo1.jpg" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/images/photo2.jpg" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/images/photo3.jpg" alt=""/>
                                    </li>
                                    <li>
                                       <img src="/images/photo1.jpg" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/images/photo2.jpg" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/images/photo3.jpg" alt=""/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
               
            </div>            
            
            <div class="col-md-3">
            	<div class="box1 wdgt prcng_dtl">
                	<h3 class="bdr">Pricing Details</h3>
                    <ul>
                    	<li><span>Duathlon (5Km - 30km - 5km)</span> <strong>₹ 1500</strong> (per person)</li>
                        <li><span>Solo Cycling Expert (60km) </span> <strong>₹ 1000</strong> (per person)</li>
                        <li><span>10km Running </span> <strong>₹ 750</strong> (per person)</li>
                        <li><span>Solo Cycling Enthusiast (30km) </span> <strong>₹ 500</strong> (per person)</li>
                    </ul>	                    
                </div>
                <div class="box1 wdgt org_dtl">
                	<h3 class="bdr">Organizer</h3>
                    <div class="row">
                    	<div class="col-2">
                        	<img src="/images/org-logo.jpg" alt="" />
                        </div>
                        <div class="col-6">
                        	<h4>Team Dare to Gear</h4>
                            <span>52 Followers</span>
                        </div>
                        <div class="col-4">
                        	<button class="btn btn-inverse sm">Connect</button>
                        </div>
                        
                    </div>                    
                </div>
                
                <div class="box1 wdgt share_wdgt">
                	<h3 class="bdr">Share with Friends</h3>
                    <div class="scl_conct">
                    	<a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-google-plus"></i></a>
                        <a href="#"><i class="fa fa-envelope"></i></a>
                    </div>                 
                </div>
                
            </div>
        </div>
    </div>	
  </div>
</template>
<script>
//  $('.slider').slick({
//   dots: false,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 3.4,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// })
export default {
    
}
</script>
