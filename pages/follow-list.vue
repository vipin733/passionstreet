<template>
<div id="content">
  	<div class="container">
    	<div class="row">
        	<!-- Left Column -->
            <div class="col-md-3">
            	<div class="box1 wdgt side_nav">
					<ul>
                    	<li class="active"><a href="#">You Should Follow</a></li>
                        <li><a href="#">Followers (20)</a></li>
                        <li><a href="#">Following (15)</a></li>
                    </ul>
                </div>                 
            </div>
            <!-- /Left Column -->
            <!-- Middle Column -->
            <div class="col-md-9">
				<div class="row mbr_lstng">
                	<div class="col-md-4">
                    	<div class="card">
                        	<img src="images/prfl_bnr.jpg" alt="" class="cvr"/>
                            <div class="dp"><img src="images/img3.png" alt="" /></div>	
                            <h3><a href="#">Abhishek Kapoor</a></h3>
                            <h4>Noida, India</h4>
                            <div class="stat clearfix">
                            	<div><strong>20</strong>Followers</div>
                                <div><strong>20</strong>Following</div>
                            </div>                            
                            <div class="passion">
                            	<span class="icon sprt rafting"></span>
                                <span class="icon sprt cycling"></span>
                                <span class="icon sprt trekking"></span>
                                <span class="icon sprt running"></span>
                            </div>                            
                            <button class="btn btn-inverse">Follow</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                    	<div class="card">
                        	<img src="images/prfl_bnr.jpg" alt="" class="cvr"/>
                            <div class="dp"><img src="images/img3.png" alt="" /></div>	
                            <h3><a href="#">Abhishek Kapoor</a></h3>
                            <h4>Noida, India</h4>
                            <div class="stat clearfix">
                            	<div><strong>20</strong>Followers</div>
                                <div><strong>20</strong>Following</div>
                            </div>
                            <div class="passion">
                            	<span class="icon sprt yoga"></span>
                                <span class="icon sprt dancing"></span>
                                <span class="icon sprt photography"></span>
                                <span class="icon sprt painting"></span>
                            </div>  
                            <button class="btn btn-inverse">Follow</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                    	<div class="card">
                        	<img src="images/prfl_bnr.jpg" alt="" class="cvr"/>
                            <div class="dp" style="background:#65e3e3"><span>RS</span></div>	
                            <h3><a href="#">Abhishek Kapoor</a></h3>
                            <h4>Noida, India</h4>
                            <div class="stat clearfix">
                            	<div><strong>20</strong>Followers</div>
                                <div><strong>20</strong>Following</div>
                            </div>
                            <div class="passion">
                            	<span class="icon sprt foodculinary"></span>
                                <span class="icon sprt music"></span>
                                <span class="icon sprt biking"></span>
                                <span class="icon sprt voyage"></span>
                            </div> 
                            <button class="btn btn-inverse">Follow</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                    	<div class="card">
                        	<img src="images/prfl_bnr.jpg" alt="" class="cvr"/>
                            <div class="dp"><img src="images/img3.png" alt="" /></div>	
                            <h3><a href="#">Abhishek Kapoor</a></h3>
                            <h4>Noida, India</h4>
                            <div class="stat clearfix">
                            	<div><strong>20</strong>Followers</div>
                                <div><strong>20</strong>Following</div>
                            </div>
                            <div class="passion">
                            	<span class="icon sprt yoga"></span>
                                <span class="icon sprt dancing"></span>
                                <span class="icon sprt photography"></span>
                                <span class="icon sprt painting"></span>
                            </div> 
                            <button class="btn btn-inverse">Follow</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                    	<div class="card">
                        	<img src="images/prfl_bnr.jpg" alt="" class="cvr"/>
                            <div class="dp" style="background:#596ec6;"><span >SJ</span></div>	
                            <h3><a href="#">Abhishek Kapoor</a></h3>
                            <h4>Noida, India</h4>
                            <div class="stat clearfix">
                            	<div><strong>20</strong>Followers</div>
                                <div><strong>20</strong>Following</div>
                            </div>
                            <div class="passion">
                            	<span class="icon sprt yoga"></span>
                                <span class="icon sprt dancing"></span>
                                <span class="icon sprt photography"></span>
                                <span class="icon sprt painting"></span>
                            </div> 
                            <button class="btn btn-inverse">Follow</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                    	<div class="card">
                        	<img src="images/prfl_bnr.jpg" alt="" class="cvr"/>
                            <div class="dp" style="background:#b565e3"><span>MS</span></div>	
                            <h3><a href="#">Abhishek Kapoor</a></h3>
                            <h4>Noida, India</h4>
                            <div class="stat clearfix">
                            	<div><strong>20</strong>Followers</div>
                                <div><strong>20</strong>Following</div>
                            </div>
                            <div class="passion">
                            	<span class="icon sprt yoga"></span>
                                <span class="icon sprt dancing"></span>
                                <span class="icon sprt photography"></span>
                                <span class="icon sprt painting"></span>
                            </div> 
                            <button class="btn btn-inverse">Follow</button>
                        </div>
                    </div>
                </div>                
            </div>
            <!-- /Middle Column -->
        </div>
    </div>  
</div>
</template>

<script>
    // import EventDetailsOne from '~/components/event/details/EventDetailsOne'
    export default {
        layout: 'public',
        auth: false,
        data() {
            return {
                step:1
            }
        },
        components: {
           
        }
    }
</script>
