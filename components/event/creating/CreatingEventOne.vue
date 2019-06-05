<template>
    <div id="content">
  	<div class="top-strip">
    	<div class="container">
        	<div class="row">
            	<div class="col-md-12">
                	<button class="btn btn-primary xl pull-right" @click="$emit('onStepChanged', 2)">Save & Proceed</button>
                	Creating Event has Never Been This Easy & Fun.
                </div>
            </div>
        </div>
    </div>
  	<div class="container">
    	<div class="row">
        	<div class="col-md-12">
            	<div class="wrapper">
                	<div class="form-wrapper form1">  
                    	<section>
                        	<h2>Event Title & Banner</h2>
                            <div class="row">
                            	<div class="col-md-12">
                                	<div class="form-group">
                                        <input class="txt_bx" required="" type="text">
                                        <label class="frm_lbl">Event name</label>
                                    </div>
                                </div>
                            </div>
                            <h3>Event Sessions</h3>
                              <div class="row">
                            	<div class="col-sm-4 col-6">
                                	<div class="cstm_radio">
                                        <input name="gender" id="single" type="radio">
                                        <label for="single">Single Session</label>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-6">
                                	<div class="cstm_radio">
                                        <input name="gender" id="multi" type="radio">
                                        <label for="multi">Multiple Session</label>
                                    </div>
                                </div>
                            </div>
                            
                            <h2>Select Dates</h2>                           
                            <div class="row">
                            	<div class="col-md-4">
                                	<div class="form-group">
                                        <input class="txt_bx" required="" type="text">
                                        <label class="frm_lbl"><i class="fa fa-calendar"></i> Start Date</label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                	<div class="form-group">
                                        <input class="txt_bx" required="" type="text">
                                        <label class="frm_lbl"><i class="fa fa-calendar"></i> End Date</label>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                	<div class="form-group">
                                        <input class="txt_bx" required="" type="text">
                                        <label class="frm_lbl"><i class="fa fa-calendar"></i> Last Date of Booking</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                            	<div class="col-md-12">
                                	<div class="form-group">
                                        <input class="txt_bx" required="" type="text">
                                        <label class="frm_lbl">Event Venue</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                            	<div class="col-md-12">
                                	<div class="form-group">
                                        <input class="txt_bx" required="" type="text">
                                        <label class="frm_lbl">Complete Address</label>
                                    </div>
                                </div>
                            </div>
                            <h3>Upload Event Banner</h3>
                            <div class="row banner">
                            	<div class="col-sm-3 col-3">
                                	<div class="banner-preview">
                                    	
                                    </div>
                                </div>
                                <div class="col-sm-9 col-9" style="padding-top:10px;">
                                	<input type="file" value="Choose Image" />
                                </div>
                            </div>
                            <div class="row">
                            	<div class="col-md-12">
                                	<h3>Brief Description of Event</h3>
                                    <div>Text editor.... ......</div>
                                </div>
                            </div>
                            <div class="row">
                            	<div class="col-md-12">
                                	<label>
                                    	<input type="checkbox"> I acknowledge & accept all Terms & Conditions of PASSIONSTREET.IN
                                    </label>
                                </div>
                            </div>
                        </section>               
                        <section >
                            <button class="btn btn-inverse xl" @click="$emit('onStepChanged', 2)">Create</button>
                        </section>
                     </div>   
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.top-strip{background:#4fcd9b; padding:10px 0; font-size:20px; color:#fff; line-height:50px; margin-top:-30px; margin-bottom:30px; position:relative;}
#content{background-image:url(/images/create-evnt-bg.jpg); background-position:center bottom; background-repeat:no-repeat; padding-bottom:100px; }
h2{font-size: 28px;line-height: 1.3em;color: #314451;margin-bottom:20px;}
h3{font-size:14px; color:#314451; font-weight:normal; margin-bottom:15px;}
.form-wrapper{max-width:600px; margin:0 auto;}
.form-wrapper .row{margin-bottom:20px;}
.wrapper{max-width:830px; margin:0 auto;}
section{margin-bottom:40px;}

.form-wrapper .row.banner{margin-bottom:40px;}
/*---- banner-preview ----*/
.banner-preview{position:relative; background:#e5e5e5; padding-bottom:35%; display:block; }
.banner-preview img{width:100%; position:absolute; z-index:5; width:100%;}
.banner-preview:before{display:block; width:100%; position:absolute; z-index:2; text-align:center; color:#8c8c8c; content:"1350x350"; left:0; top:30%; font-size:14px;}

.category-lst{margin-bottom:20px;}
.add-cat span{float:left; font-size:18px; line-height:30px; margin-right:15px;}
.add-cat input{float:left; width:300px; border:1px solid #fff; border-width:0 0 1px; height:30px; color:#8c8c8c; font-size:14px; background:none;}

.event-type span{position:relative; margin-bottom:30px; display:block;}
.event-type span input{position:absolute; left:50%; top:40%; opacity:0; z-index:1;}
.event-type span label{display:block; height:48px; line-height:40px; border:2px solid #dadada; border-radius:30px; font-size:16px; text-align:center; color:#8c8c8c; cursor:pointer;}
.event-type span input:checked + label{background:#c15a5b; color:#fff; border-color:#c15a5b;}

/*----- Event Step2 --------*/
.evnt_crt_hdr{background:#fff; padding:10px 0; box-shadow:0 0 5px rgba(0,0,0,.2);}

</style>

