<template>
<div id="content">
  	<!-- Profile hdr --->
    <div class="prfl_hdr">
    	<div class="cvr_pic">
        	<img src="/images/prfl_bnr.jpg" alt="" />
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
                    	
                        <figure>
                        <div class="change">
                        	<input type="file"/>
                            <i class="fa fa-pencil"></i> Change 
                        </div>
                    	<img src="/images/img3.png" alt="" class="circle">
                        </figure>
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
    	<div class="row">
        	<!-- Left Column -->
            <div class="col-md-3">
            	<div class="box1 wdgt usr_dashbrd">
                	<span class="edit"><i class="fa fa-pencil"></i> Edit</span>
                	<h3>About You</h3>
                    <ul>
                    	<li><i class="fa fa-user"></i> Brijesh Chaturvedi</li>
                        <li><i class="fa fa-calendar"></i> 30 years</li>
                        <li><i class="fa fa-male"></i> Male</li>
                        <li><i class="fa fa-map-marker"></i> Noida, India</li>
                        <li><i class="fa fa-envelope"></i> brijeshchaturvedi1019@gmail.com</li>
                        <li><i class="fa fa-phone"></i> +91-8285679501</li>
                    </ul>
                    <a href="#" class="more"><strong>+ Add Your Marital Status</strong></a>
                </div>
                
                <div class="box1 wdgt usr_passions">
                	<h3>Your Passion</h3>
                    <ul class="clearfix">
                    	<li><span><small>X</small>Running</span></li>
                        <li><span><small>X</small>Trekking</span></li>
                        <li><span><small>X</small>Music</span></li>
                        <li><span><small>X</small>Cycling</span></li>
                        <li><span><small>X</small>Dance</span></li>
                    </ul>
                    <a href="#" class="more"><strong>+ Add More</strong></a>
                </div>
                
            </div>
            <!-- /Left Column -->
            <!-- Middle Column -->
            <div class="col-md-6">
            	<!-- Wall Form -->
                <div id="wall-form" class="box1">
                	<form>
                    	<div class="about">
                        	<textarea rows="6" cols="80" placeholder="Share Your Experiene, Passion, Photo or Update"></textarea>
                        </div>
                        <div id="workout">
                        	<div class="row form-group">
                            	<div class="col-sm-3">
                                	<label>Workout Type</label>
                                    <div class="selct_outr">
                                    	<select>
                                        	<option></option>
                                        </select>
                                        <span class="selct_txt">
                                        	Select
                                        </span>
                                        <i class="fa fa-angle-down"></i>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                	<label>Workout Type</label>
                                    <input type="text" placeholder="DD/MM/YYYY" />
                                </div>
                                <div class="col-sm-3">
                                	<label>Distance</label>
                                    <input type="text" placeholder="KM" />
                                </div>
                                <div class="col-sm-3">
                                	<label>Time taken</label>
                                    <input type="text" placeholder="HH:MM:SS" />
                                </div>
                            </div>
                            
                            <div class="row form-group">
                            	<div class="col-sm-4">
                                	<label>Heart rate (BPM)</label>
                                    <div class="row">
                                    	<div class="col-sm-6">
                                        	<input type="text" placeholder="AVG" />
                                        </div>
                                        <div class="col-sm-6">
                                        	<input type="text" placeholder="MAX" />
                                        </div>
                                    </div>	
                                </div>
                                <div class="col-sm-4">
                                	<label>Altitude (MT)</label>
                                    <div class="row">
                                    	<div class="col-sm-6">
                                        	<input type="text" placeholder="MIN" />
                                        </div>
                                        <div class="col-sm-6">
                                        	<input type="text" placeholder="MAX" />
                                        </div>
                                    </div>	
                                </div>
                                <div class="col-sm-4">
                                	<label>Height &amp; Weight</label>
                                    <div class="row">
                                    	<div class="col-sm-12">
                                        	<input type="text" placeholder="0 CM, 0 KG" />
                                        </div>
                                    </div>	
                                </div>
                            </div>
                            <div class="row form-group">
                            	<div class="col-sm-4">
                                	<label>Avg speed</label>
                                    <div class="row">
                                    	<div class="col-sm-12">
                                        	<input type="text" placeholder="0 KM/H" />
                                        </div>
                                       
                                    </div>	
                                </div>
                                <div class="col-sm-4">
                                	<label>Calories</label>
                                    <div class="row">
                                    	<div class="col-sm-12">
                                        	<input type="text" placeholder="0 CALORIES" />
                                        </div>
                                        
                                    </div>	
                                </div>
                                <div class="col-sm-4">
                                	
                                </div>
                            </div>
                        </div>
                        <!--/Workout -->
                        <div id="add-video" class="row form-group" >
                            <div class="col-md-12">
                                <div class="inner active">
                                    <input placeholder="Enter url" type="url" />
                                </div>
                            </div>
                            
                        </div> 
                        
                         <div id="tag-member" class="row form-group" >
                            <div class="col-md-12">
                                <div class="inner active">
                                    <input placeholder="Whom are you with ?" type="text" />
                                </div>
                            </div>
                            
                        </div>                       
                        
                        <footer class="clearfix">
                        	<div class="icon-set">
                            	<span class="browse-pic"><i class="fa fa-picture-o" aria-hidden="true"></i><input type="file" /></span>
                                <i class="fa fa-video-camera" aria-hidden="true"></i>
                                <i class="fa fa-cog" aria-hidden="true"></i>
                                <i class="fa fa-tags" aria-hidden="true"></i>
                            </div>
                            
                            <button class="btn btn-primary"><i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
 Post</button>
                            <div class="selct_outr">
                            	<select>
                                	<option>Select Activity</option>
                                </select>
                                <span class="selct_txt">Select Activity</span>
                                <i class="fa fa-angle-down"></i>
                            </div>	
                        </footer>
                    </form>
                </div>
                <!-- /Wall Form -->
                
                <div class="box1 post">
                	<div class="post-hdr clearfix">
                    	<div class="post-control">
                        	<i class="fa fa-angle-down"></i>
                            <ul>
                            	<li>Edit <i class="fa fa-pencil"></i></li>
                                <li>Delete <i class="fa fa-trash"></i></li>
                            </ul>
                        </div>
                    	<img src="/images/img2.jpg" alt="" class="circle" />
                        <a href="#">Bibin Kurian</a> has posted in <a href="#">Painting</a>
                        <span class="time">3 days ago</span>
                    </div>
                    <div class="post-content">
                    	Let's celebrate this independence together. Register yourself for a category you wish to in Dare Megathon Championship 2017 happening in Noida at Jaypee Hospital. Avail the best offer of 25% off last 8 hours left.
                    </div>
                    <div class="imgs-grid">
                    	<img src="https://passionstreet.in/files/thumb/posts/posts-2573208390-6968044737.jpg" alt=""/>
                    </div>
                    <footer>
                    	<a href="#"><i class="fa fa-comment"></i> Comment</a>
                        <a href="#"><i class="fa fa-thumbs-up"></i> Like</a>
                        <a href="#"><i class="fa fa-share-alt"></i> Share</a>
                    </footer>
                    <div class="comment-box">
                    	<h5>Comments</h5>
                        <div class="comments">
                        	<ul>
                            	<li>
                                	<img src="/images/img2.jpg" alt="" class="circle usr_dp">
                                    <div class="cmt">
                                    	<a href="#" class="usr">Bibin Vengasseril</a>  Let's celebrate this independence together. Register yourself for 
                                        <span><a href="#"><i class="fa fa-thumbs-o-up"></i> Like</a> - 3 minutes ago</span>
                                    </div>   
                                                                     
                                </li>
                                <li>
                                	<img src="/images/img2.jpg" alt="" class="circle usr_dp">
                                    <div class="cmt">
                                    	<a href="#" class="usr">Bibin Vengasseril</a>  Let's celebrate this independence together. Register yourself for a category you
                                        <span><a href="#"><i class="fa fa-thumbs-o-up"></i> Like</a> - 3 minutes ago</span>
                                    </div>                                    
                                </li>
                                <li>
                                	<img src="/images/img2.jpg" alt="" class="circle usr_dp">
                                    <div class="cmt">
                                    	<a href="#" class="usr">Bibin Vengasseril</a>  Let's celebrate this independence together. Register yourself for a category you
                                        <span><a href="#"><i class="fa fa-thumbs-o-up"></i> Like</a> - 3 minutes ago - 5 Likes</span>
                                    </div>                                    
                                </li>
                                <li>
                                	<img src="/images/img2.jpg" alt="" class="circle usr_dp">
                                    <div class="cmt">
                                    	<a href="#" class="usr">Bibin Vengasseril</a>  Let's celebrate this independence together. Register yourself 
                                        <span><a href="#"><i class="fa fa-thumbs-o-up"></i> Like</a> - 3 minutes ago</span>
                                    </div>                                    
                                </li>
                            </ul>
                        </div>
                        <textarea class="comment_tarea" placeholder="Write your comment here..."></textarea>
                    </div>
                </div>
                
            </div>
            <!-- /Middle Column -->
            <!-- Right Column -->
            <div class="col-md-3">
            	<div class="box1 wdgt">
                	<h3>People You Should Follow</h3>
                    <ul class="lst1">
                    	<li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">Jhon Smith</a>
                            <span>141 Followers</span>
                            <button class="btn btn-inverse">Follow</button>
                        </li>
                        <li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">Jhon Smith</a>
                            <span>141 Followers</span>
                            <button class="btn btn-inverse">Follow</button>
                        </li>
                        <li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">Jhon Smith</a>
                            <span>141 Followers</span>
                            <button class="btn btn-inverse">Follow</button>
                        </li>
                        <li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">Jhon Smith</a>
                            <span>141 Followers</span>
                            <button class="btn btn-inverse">Follow</button>
                        </li>
                    </ul>
                    <a href="#" class="more">View All People</a>
                </div>
                
                <div class="box1 wdgt invite">
                	<h2>Invite Your Friends to Join The Most Passionoate Community</h2>
                    <div class="inline-form clearfix">
                    	<input type="text" placeholder="Enter multiple email id’s" />
                        <button type="submit">Invite</button>
                    </div>
                    <h5>Or Invite Using</h5>
                    <div class="scl_conct">
                    	<a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-google-plus"></i></a>
                        <a href="#"><i class="fa fa-envelope"></i></a>
                    </div>
                </div>
                
                <div class="box1 wdgt">
                	<h3>Top Running Events</h3>
                    <ul class="lst2">
                    	<li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">New Delhi Triathlon Championship</a>
                            <span><i class="fa fa-calendar"></i> Aug, 17</span>
                           
                        </li>
                        <li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">New Delhi Triathlon Championship</a>
                            <span><i class="fa fa-calendar"></i> Aug, 17</span>
                        </li>
                        <li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">New Delhi Triathlon Championship</a>
                            <span><i class="fa fa-calendar"></i> Aug, 17</span>
                        </li>
                        <li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">New Delhi Triathlon Championship</a>
                            <span><i class="fa fa-calendar"></i> Aug, 17</span>
                        </li>
                    </ul>
                    <a href="#" class="more">View All Events</a>
                </div>
                
                <div class="box1 wdgt">
                	<h2>Create and manage events easily with Passionstreet</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply..</p>
                    <a href="#" class="btn btn-primary lg block">Create Event</a>
                </div>
                
                 <div class="box1 wdgt">
                	<h3>Top Communities</h3>
                    <ul class="lst1">
                    	<li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">Jhon Smith</a>
                            <span>141 Followers</span>
                            <button class="btn btn-inverse">Follow</button>
                        </li>
                        <li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">Jhon Smith</a>
                            <span>141 Followers</span>
                            <button class="btn btn-inverse">Follow</button>
                        </li>
                        <li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">Jhon Smith</a>
                            <span>141 Followers</span>
                            <button class="btn btn-inverse">Follow</button>
                        </li>
                        <li>
                        	<img src="/images/img2.jpg" class="circle" alt="" />
                            <a href="#" class="name">Jhon Smith</a>
                            <span>141 Followers</span>
                            <button class="btn btn-inverse">Follow</button>
                        </li>
                    </ul>
                    <a href="#" class="more">View All Communities</a>
                </div>
                
            </div>
            <!-- /Right Column -->
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
