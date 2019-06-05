<template>
<div id="container"> 
	<div class="bg-img"><img src="/images/reg_bg.jpg" alt=""/></div>
    <div id="regstr_form">
    	<div class="row">
        	<div class="col-sm-4 lft-pnl">
            	<h2>#LiveWhatYouLove!<small>Follow Your Passion </small></h2>
                <span>Join. Connect. Exhibit</span>
            </div>
            <div class="col-sm-8 rgt-pnl">
                <nuxt-link to="/">
                    <img src="/images/logo.png" alt="passionstreet" />
                </nuxt-link>
            	<div class="form1">
                	<form method="post">

                        <div class="row">
                        	<div class="col-sm-12">
                            	<div class="form-group">
                                    <input type="email" class="txt_bx" required />
                                    <label class="frm_lbl">Email Address</label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                        	<div class="col-sm-12">
                            	<div class="form-group">
                                    <input type="password" class="txt_bx" required />
                                    <label class="frm_lbl">Password</label>
                                </div>
                            </div>
                        </div>

                        <div class="row form-group">
                        	<div class="col-sm-4 col-md-4">
                            	<input type="button" value="Login" />
                            </div>
                            <div class="col-sm-8 col-md-8 scl_conct">
                                or start with
                                <a href="#" class="fb"><i class="fa fa-facebook"></i></a>
                                <a href="#" class="ggl"><i class="fa fa-google-plus"></i></a>
                            </div>
                        </div>
                        <p class="ftr">Don't have passionstreet ID? 
                            <nuxt-link to="/registration">
                              Sign Up
                            </nuxt-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        layout: 'auth',
        auth: false
    }
</script>

<style scoped>
.bg-img{position:fixed; z-index:-1; width:100%; height:100%; overflow:hidden; left:0; top:0;}
.bg-img img{width:100%; min-height:100%; max-width:inherit; animation:40s ease 0s normal none infinite back_animation;}
@-webkit-keyframes back_animation {	0% {-webkit-transform: scale(1);}50% {-webkit-transform: scale(1.2);}100% {-webkit-transform: scale(1) ;}}
@-moz-keyframes back_animation {0% {-moz-transform: scale(1);}	50% {-moz-transform: scale(1.2);}100% {-moz-transform: scale(1) ;}}
@-o-keyframes back_animation {0% {-o-transform: scale(1);}50% {-o-transform: scale(1.2);}100% {-o-transform: scale(1);}}
@keyframes back_animation {0% {transform: scale(1);}50% {transform: scale(1.2);}100% {transform: scale(1) ;}}
#regstr_form{width:720px; background:rgba(24,21,38,.7); margin:40px auto; border-radius:0 5px 5px 0; position:relative; z-index:1;}
#regstr_form > .row{margin-right:0; margin-left:0;}
#regstr_form .lft-pnl {color:#b3b0b0; align-self:center;}
#regstr_form .lft-pnl h2{font-size:24px; margin-bottom:10px;}
#regstr_form .lft-pnl h2 small{color:var(--main_color); display:block; font-size:13px;}
#regstr_form .lft-pnl span{display:block; background:rgba(0,0,0,.5); padding:10px; text-align:center; font-size:18px; font-weight:500;}
#regstr_form .rgt-pnl{background:#fff; border-radius:0 5px 5px 0; padding:35px 40px;}
#regstr_form .rgt-pnl img{display:block; margin:0 auto 10px;}
#regstr_form .scl_conct{text-align:left; line-height:34px; vertical-align:middle; align-self:center;}
#regstr_form .scl_conct a{color:#fff; height:34px; width:34px; font-size:16px; line-height:34px; margin:0 0 0 6px; border:0; border-radius:4px;}
#regstr_form p.ftr{line-height:1.5em; margin:0; padding-top:10px;}
#regstr_form p.ftr a{color:var(--main_color); font-weight:500; font-weight:500; text-decoration:underline;}
.form1 .dob {margin-bottom:15px;}
.gender{margin-bottom:10px;}
</style>

