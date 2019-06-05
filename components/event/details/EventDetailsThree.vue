<template>
<div id="content">
	 <div class="evnt_dtl_hdr">
    	<div class="container">
        	<div class="row">
            	<div class="col-md-12">
                	<button class="btn btn-primary xl pull-right" @click="$emit('onStepChanged', 4)">Save & Proceed</button>
                	<img src="images/cycling_thumb.jpg" alt="" />
                    <h3>Lions Continental Marathon 2017</h3>
                    <span><i class="fa fa-map-marker"></i> Noida Stadium, Noida </span>
                    <span><i class="fa fa-calendar"></i> Sun, 24 Sept 2017, 6:00 AM to 8:00 AM </span>
                </div>
            </div>
        </div>
    </div> 
    <div class="container">
    	<div class="row">
        	<div class="col-md-12">
            	<div class="wrapper">
                	<div class="box2">
                    	<h2><i class="fa fa-user"></i> Participants Details</h2>
                        <div class="panel-body">
                        	<div class="participant_info">
                            	<h3>Participant 1 <span>Category - Duathlon (5Km - 30km - 5km)</span></h3>
                            </div>
                            
                            <div class="form1">
                            	<form method="post" action="">
                                	<div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="txt_bx" required="" type="text">
                                                <label class="frm_lbl">Full Name</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="txt_bx" required="" type="text">
                                                <label class="frm_lbl">Email Id</label>
                                            </div>
                                        </div>
                                    </div>  
                                    
                                    <div class="row">                                    	
                                        <div class="col-md-6">
                                        	<div class="row">
                                            	<div class="col-sm-12">
                                                    <h5>Select Gender</h5>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="cstm_radio">
                                                        <input name="gender" id="male" type="radio">
                                                        <label for="male">Male</label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="cstm_radio">
                                                        <input name="gender" id="female" type="radio">
                                                        <label for="female">Female</label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="cstm_radio">
                                                        <input name="gender" id="other" type="radio">
                                                        <label for="other">Other</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        
                                        <div class="col-md-6">
                                        	<div class="row dob">
                                            	<div class="col-sm-12">
                                                    <h5>Date of Birth</h5>
                                                </div>
                                                <div class="col-sm-4">                            	
                                                        <div class="selct_outr">
                                                            <select>
                                                                <option>DD</option>
                                                            </select>
                                                            <span class="selct_txt">DD</span>
                                                            <i class="fa fa-angle-down"></i>
                                                        </div>
                                                    
                                                </div>
                                                <div class="col-sm-4">
                                                    
                                                        <div class="selct_outr">
                                                            <select>
                                                                <option>MM</option>
                                                            </select>
                                                            <span class="selct_txt">MM</span>
                                                            <i class="fa fa-angle-down"></i>
                                                        </div>
                                                    
                                                </div>
                                                <div class="col-sm-4">
                                                    
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
                                                                               
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="txt_bx" required="" type="text">
                                                <label class="frm_lbl">Designation</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="txt_bx" required="" type="text">
                                                <label class="frm_lbl">Company</label>
                                            </div>
                                        </div>
                                    </div> 
                                    
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="txt_bx" required="" type="text">
                                                <label class="frm_lbl">City*</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="txt_bx" required="" type="text">
                                                <label class="frm_lbl">Country*</label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                     <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="txt_bx" required="" type="text">
                                                <label class="frm_lbl">Emergency Contact No*</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input class="txt_bx" required="" type="text">
                                                <label class="frm_lbl">Emergency Contact Name*</label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-sm-6">
                                        	<div class="form-group">
                                            <div class="selct_outr">
                                                <select>
                                                    <option>Group Name </option>
                                                </select>
                                                <span class="selct_txt">Group Name <small>(if any cycling / running Group)</small></span>
                                                <i class="fa fa-angle-down"></i>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                        	<div class="form-group">
                                            <div class="selct_outr">
                                                <select>
                                                    <option>Blood Group*</option>
                                                </select>
                                                <span class="selct_txt">Blood Group*</span>
                                                <i class="fa fa-angle-down"></i>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-sm-6">
                                        	<div class="form-group">
                                            <div class="selct_outr">
                                                <select>
                                                    <option>M</option>
                                                </select>
                                                <span class="selct_txt">T-Shirt size*</span>
                                                <i class="fa fa-angle-down"></i>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                           <div class="form-group">
                                           <div class="selct_outr">
                                                <select>
                                                    <option>Yes</option>
                                                </select>
                                                <span class="selct_txt">Do you want cycle on Rent?*</span>
                                                <i class="fa fa-angle-down"></i>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                                                  
                                </form>
                            </div>
                            
                        </div>                       
                    </div>	
                    <!--/Box2-->
                                        
                    <footer class="form-footer">
                    	<button class="btn btn-primary xl pull-right" @click="$emit('onStepChanged', 4)"> Proceed</button>
                        <button class="btn btn-default  xl " @click="$emit('onStepChanged', 2)">Back</button>
                    </footer>	
                    
                </div>
            </div>
        </div>
    </div>    	
</div>
</template>
