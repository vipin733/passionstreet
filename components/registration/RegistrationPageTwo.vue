<template>
<div id="container"> 
	<div class="bg-img"><img src="images/reg_bg.jpg" alt=""/></div>
    <div class="container">
        <div id="regstr_forml2">
            <h2>Select Your Passion</h2>
            <h3>Select atleast 3 passion</h3>
            <div id="carouselExample" class="slider carousel" data-ride="carousel"  >
            	 <span class="carousel-control-prev prev" href="#carouselExample" role="button" data-slide="prev"><i class="fa fa-angle-left"></i></span>
                <span class="carousel-control-next next " href="#carouselExample" role="button" data-slide="next"><i class="fa fa-angle-right"></i></span>
       			 <div class="carousel-inner row w-100 mx-auto" role="listbox">         
            	
                	<div class="carousel-item col-md-4 active">
                    	<div class="slide"><label>
                        	<img src="images/cycling_thumb.jpg" alt=""/>
                            <input type="checkbox" />
                            <span class="title">Cycling</span>
                        </label></div>
                    </div>
                    <div class="carousel-item col-md-4">
                    	<div class="slide"><label>
                        	<img src="images/trekking_thumb.jpg" alt=""/>
                            <input type="checkbox" />
                            <span class="title">Trekking</span>
                        </label></div>
                    </div>
                    <div class="carousel-item col-md-4">
                    	<div class="slide"><label>
                        	<img src="images/dancing_thumb.jpg" alt=""/>
                            <input type="checkbox" />
                            <span class="title">Dancing</span>
                        </label></div>
                    </div>
                    <div class="carousel-item col-md-4">
                    	<div class="slide"><label>
                        	<img src="images/trekking_thumb.jpg" alt=""/>
                            <input type="checkbox" />
                            <span class="title">Trekking</span>
                        </label></div>
                    </div>
                    <div class="carousel-item col-md-4">
                    	<div class="slide"><label>
                        	<img src="images/dancing_thumb.jpg" alt=""/>
                            <input type="checkbox" />
                            <span class="title">Dancing</span>
                        </label></div>
                    </div>
                    <div class="carousel-item col-md-4">
                    	<div class="slide"><label>
                        	<img src="images/trekking_thumb.jpg" alt=""/>
                            <input type="checkbox" />
                            <span class="title">Trekking</span>
                        </label></div>
                    </div>
                    <div class="carousel-item col-md-4">
                    	<div class="slide"><label>
                        	<img src="images/dancing_thumb.jpg" alt=""/>
                            <input type="checkbox" />
                            <span class="title">Dancing</span>
                        </label></div>
                    </div>
                </div>
            </div>
            <footer>
            	<button type="submit" class="btn2 btn-primary">DONE</button>
            </footer>
        </div>
    </div>
 </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.bg-img{position:fixed; z-index:-1; width:100%; height:100%; overflow:hidden; left:0; top:0;}
.bg-img img{width:100%; min-height:100%; max-width:inherit; animation:40s ease 0s normal none infinite back_animation;}
@-webkit-keyframes back_animation {	0% {-webkit-transform: scale(1);}50% {-webkit-transform: scale(1.2);}100% {-webkit-transform: scale(1) ;}}
@-moz-keyframes back_animation {0% {-moz-transform: scale(1);}	50% {-moz-transform: scale(1.2);}100% {-moz-transform: scale(1) ;}}
@-o-keyframes back_animation {0% {-o-transform: scale(1);}50% {-o-transform: scale(1.2);}100% {-o-transform: scale(1);}}
@keyframes back_animation {0% {transform: scale(1);}50% {transform: scale(1.2);}100% {transform: scale(1) ;}}
#regstr_form{max-width:720px; background:rgba(24,21,38,.7); margin:40px auto; border-radius:0 5px 5px 0; position:relative; z-index:1;}
#regstr_form > .row{margin-right:0; margin-left:0;}
#regstr_form .lft-pnl {color:#b3b0b0; align-self:center;}
#regstr_form .lft-pnl h2{font-size:24px; margin-bottom:10px;}
#regstr_form .lft-pnl h2 small{color:var(--main_color); display:block; font-size:13px;}
#regstr_form .lft-pnl span{display:block; background:rgba(0,0,0,.5); padding:10px; text-align:center; font-size:18px; font-weight:500;}
#regstr_form .rgt-pnl{background:#fff; border-radius:0 5px 5px 0; padding:40px;}
#regstr_form .rgt-pnl img{display:block; margin:0 auto 20px;}
#regstr_form .tmc{margin-bottom:15px;}
#regstr_form .scl_conct{text-align:left; line-height:34px; vertical-align:middle; align-self:center;}
#regstr_form .scl_conct a{color:#fff; height:34px; width:34px; font-size:16px; line-height:34px; margin:0 0 0 6px; border:0; border-radius:4px;}
#regstr_form p.ftr{line-height:1.5em; margin:0; padding-top:10px;}
#regstr_form p.ftr a{color:var(--main_color); font-weight:500; font-weight:500; text-decoration:underline;}

/*----- Registration---- step2 -----*/
#regstr_forml2{max-width:1110px; background:rgba(24,21,38,.7); margin:40px auto; border-radius:5px; padding:40px 95px; position:relative; z-index:1;}
#regstr_forml2 h2{font-size:28px; color:#f5f5f5; text-align:center; font-weight:normal; margin-bottom:10px; line-height:1em;}
#regstr_forml2 h3{font-size:18px; color:#ee7475; text-align:center; font-weight:normal; margin-bottom:20px;}
#regstr_forml2 .slider{position:relative; margin-bottom:30px;}
#regstr_forml2 .slider .slides{width:100%; overflow:hidden;}
#regstr_forml2 .slider .slide{ background:#2e434e; float:left; text-align:center; padding-bottom:10px; cursor:pointer;}
#regstr_forml2 .slider .slide img{width:100%; margin-bottom:10px;}
#regstr_forml2 .slider label{position:relative;}
#regstr_forml2 .slider input{position:absolute; opacity:0; left:47%; top:47%;}
#regstr_forml2 .slider span.title{display:inline-block; padding-left:50px; position:relative; font-size:20px; color:#fff; line-height:35px;}
#regstr_forml2 .slider span.title:before{position:absolute; width:35px; height:35px; background:url(/images/ps_sprt.png) no-repeat -27px -24px; left:0; top:0; content:" ";}
#regstr_forml2 .slider input:checked + span.title:before{background-position:-66px -24px;}
#regstr_forml2 .slider .next, #regstr_forml2 .slider .prev{position:absolute; width:60px; height:60px; background:rgba(0,0,0,.5); text-align:center; line-height:55px; font-size:35px; color:#fff; display:block; top:50%; margin-top:-30px; border-radius:50%; cursor:pointer;}
#regstr_forml2 .slider .next i, #regstr_forml2 .slider .prev i{line-height:inherit;}
#regstr_forml2 .slider .next{right:-80px;}
#regstr_forml2 .slider .prev{left:-80px;}
#regstr_forml2 .slider .next:hover, #regstr_forml2 .slider .prev:hover{background:var(--main_color);}
#regstr_forml2 footer{text-align:center; clear:both;}
</style>

