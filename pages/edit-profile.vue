<template>
<div id="content">
  	<!-- Profile hdr --->
    <div class="prfl_hdr">
    	<div class="cvr_pic">
        	<img src="images/prfl_bnr.jpg" alt="" />
            <div class="prfl_info">
            	<div class="container">
                	<div class="controls">
                    	<div class="img">
                        	<span class="icon circle">
                            	<i class="fa fa-photo"></i>
                            </span>
                            Header Image
                        </div>
                        <div class="msgs">
                        	<span class="icon circle">
                            	<i class="fa fa-envelope"></i>
                            </span>
                            Messages
                        </div>                        
                    </div>
                	<div class="thump clearfix">
                    	<figure><img src="images/img3.png" alt="" class="circle"></figure>
                        <h1>Brijesh Chaturvedi</h1>
                        <span>Noida, India</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="prfl_stats ">
        	<div class="row">
        		<div class="col-md-12">
                	<ul class="clearfix">
                        <li><strong>2</strong> Followers</li>
                        <li><strong>22</strong> Following</li>
                        <li class="share"><span class="title">Share your Profile</span>
                        	<i class="fa fa-facebook"></i>
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-linkedin"></i>
                            <i class="fa fa-google-plus"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  	<!--?profile hdr -->
  	<div class="container">
    	<div class="row ">
        	<div class="col-md-8 offset-md-2">
            	<div id="profile-edit-form" class="box1 rounded form1">
                	<form method="post">
                    	<section>
                    	<h2>Basic Information</h2>
                    	<div class="row">
                        	<div class="col-sm-6">
                            	<div class="form-group">
                                    <input type="text" class="txt_bx" required />
                                    <label class="frm_lbl">First Name</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                            	<div class="form-group">
                                    <input type="text" class="txt_bx" required />
                                    <label class="frm_lbl">Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        	<div class="col-sm-6">
                            	<div class="form-group">
                                    <input type="text" class="txt_bx" required />
                                    <label class="frm_lbl">Email Address</label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                            	<div class="form-group">
                            		<input type="text" class="txt_bx" required />
                                    <label class="frm_lbl">Phone Number</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        	 <div class="col-sm-6 gender">
                            	<div class="form-group clearfix">
                            		<h5>Gender</h5>
                                    <div class="cstm_radio">
                                        <input name="gender" id="male" type="radio">
                                        <label for="male">Male</label>
                                    </div>
                                    <div class="cstm_radio">
                                        <input name="gender" id="female" type="radio">
                                        <label for="female">Female</label>
                                    </div>
                                    <div class="cstm_radio">
                                        <input name="gender" id="other" type="radio">
                                        <label for="other">Other</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 dob">
                            	<div class="form-group clearfix">
                            		<h5>Date of Birth</h5>
                                    <div class="selct_outr">
                                    	<select>
                                        	<option>DD</option>
                                        </select>
                                        <span class="selct_txt">DD</span>
                                        <i class="fa fa-angle-down"></i>
                                    </div>
                                    <div class="selct_outr">
                                    	<select>
                                        	<option>MM</option>
                                        </select>
                                        <span class="selct_txt">MM</span>
                                        <i class="fa fa-angle-down"></i>
                                    </div>
                                    <div class="selct_outr">
                                    	<select>
                                        	<option>YYYY</option>
                                        </select>
                                        <span class="selct_txt">YYYY</span>
                                        <i class="fa fa-angle-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row">
                        	<div class="col-sm-6">
                            	<div class="form-group">
                                    <div class="selct_outr alB">
                                    	<select>
                                        	<option>Nationality</option>
                                        	<option>India</option>
                                        </select>
                                        <span class="selct_txt">Nationality</span>
                                        <i class="fa fa-angle-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                            	<div class="form-group">
                                    <input class="txt_bx" required="" type="text">
                                    <label class="frm_lbl">Locality</label>
                                </div>
                            </div>
                        </div>
                        </section>
                        <section>
                        <h2>Select Passions</h2>
                        <div class="row category-lst">
                        	<div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="cycling" />
                                <span for="cycling" class="icon sprt cycling"></span>
                                <span class="title">Cycling</span>
                                </label>
                            </div>
                            <div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="running" />
                                <span for="running" class="icon sprt running"></span>
                                <span class="title">Running</span>
                                </label>
                            </div>
                            <div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="trekking" />
                                <span for="trekking" class="icon sprt trekking"></span>
                                <span class="title">Trekking</span>
                                </label>
                            </div>
                            <div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="dancing" />
                                <span for="dancing" class="icon sprt dancing"></span>
                                <span class="title">Dancing</span>
                                </label>
                            </div>
                            <div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="music" />
                                <span for="music" class="icon sprt music"></span>
                                <span class="title">Music</span>
                                </label>
                            </div>
                            <div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="rafting" />
                                <span for="rafting" class="icon sprt rafting"></span>
                                <span class="title">Rafting</span>
                                </label>
                            </div>
                            <div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="photography" />
                                <span for="photography" class="icon sprt photography"></span>
                                <span class="title">Photography</span>
                                </label>
                            </div>
                            <div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="painting" />
                                <span for="painting" class="icon sprt painting"></span>
                                <span class="title">Painting</span>
                                </label>
                            </div>
                            <div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="foodculinary" />
                                <span for="foodculinary" class="icon sprt foodculinary"></span>
                                <span class="title">Food & Culinary</span>
                                </label>
                            </div>
                            <div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="biking" />
                                <span for="biking" class="icon sprt biking"></span>
                                <span class="title">Motor Biking</span>
                                </label>
                            </div>
                            <div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="yoga" />
                                <span for="yoga" class="icon sprt yoga"></span>
                                <span class="title">yoga</span>
                                </label>
                            </div>
                            <div class="col-md-3 passion">
                            	<label>
                            	<input type="checkbox" id="voyage" />
                                <span for="voyage" class="icon sprt voyage"></span>
                                <span class="title">Voyage</span>
                                </label>
                            </div>
                        </div>
                        </section>
                        <div class="text-center">
                        	<button class="rounded">SAVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>  
</div>
</template>

<script>
    export default {
        layout: 'public',
        auth: false
    }
</script>
