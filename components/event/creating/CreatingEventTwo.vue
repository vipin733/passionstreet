<template>
    <div id="content">
  	<div class="container">
    	<div class="row">
        	<div class="col-md-12">
            	<div class="wrapper">
                	                    
                    <section>
                    	<h2 class="text-center">Select Event Segment</h2>
                        <div class="row event-type">
                        	<div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat1" />
                                    <label for="cat1">Workshop</label>
                                </span>
                            </div>
                            <div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat2" />
                                    <label for="cat2">Exhibitions</label>
                                </span>
                            </div>
                            <div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat3" />
                                    <label for="cat3">Seminars</label>
                                </span>
                            </div>
                            <div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat4" />
                                    <label for="cat4">Charity</label>
                                </span>
                            </div>
                            
                            <div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat5" />
                                    <label for="cat5">Networking</label>
                                </span>
                            </div>
                            <div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat6" />
                                    <label for="cat6">Concerts</label>
                                </span>
                            </div>
                            <div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat7" />
                                    <label for="cat7">Performances</label>
                                </span>
                            </div>
                            <div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat8" />
                                    <label for="cat8">Sports & Fitness</label>
                                </span>
                            </div>
                            
                            <div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat9" />
                                    <label for="cat9">Fundraiser</label>
                                </span>
                            </div>
                            <div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat10" />
                                    <label for="cat10">Ceremony</label>
                                </span>
                            </div>
                            <div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat11" />
                                    <label for="cat11">Reunion</label>
                                </span>
                            </div>
                            <div class="col-md-3">
                            	<span>
                                	<input type="checkbox" id="cat12" />
                                    <label for="cat12">Awards & Programs</label>
                                </span>
                            </div>
                        </div>
                        <div class="add-cat clearfix">
                            <span>Not in the list?</span>
                            <input type="text" placeholder="Type the category name..."/>
                        </div>   
                    </section>
                    
                    <section>
                    	<h2 class="text-center">Select Event Category</h2>
                   		<div class="row category-lst">
                        <div class="col-md-3 passion">
                            <label>
                            <input id="cycling" type="checkbox">
                            <span for="cycling" class="icon sprt cycling"></span>
                            <span class="title">Cycling</span>
                            </label>
                        </div>
                        <div class="col-md-3 passion">
                            <label>
                            <input id="running" type="checkbox">
                            <span for="running" class="icon sprt running"></span>
                            <span class="title">Running</span>
                            </label>
                        </div>
                        <div class="col-md-3 passion">
                            <label>
                            <input id="trekking" type="checkbox">
                            <span for="trekking" class="icon sprt trekking"></span>
                            <span class="title">Trekking</span>
                            </label>
                        </div>
                        <div class="col-md-3 passion">
                            <label>
                            <input id="dancing" type="checkbox">
                            <span for="dancing" class="icon sprt dancing"></span>
                            <span class="title">Dancing</span>
                            </label>
                        </div>
                        <div class="col-md-3 passion">
                            <label>
                            <input id="music" type="checkbox">
                            <span for="music" class="icon sprt music"></span>
                            <span class="title">Music</span>
                            </label>
                        </div>
                        <div class="col-md-3 passion">
                            <label>
                            <input id="rafting" type="checkbox">
                            <span for="rafting" class="icon sprt rafting"></span>
                            <span class="title">Rafting</span>
                            </label>
                        </div>
                        <div class="col-md-3 passion">
                            <label>
                            <input id="photography" type="checkbox">
                            <span for="photography" class="icon sprt photography"></span>
                            <span class="title">Photography</span>
                            </label>
                        </div>
                        <div class="col-md-3 passion">
                            <label>
                            <input id="painting" type="checkbox">
                            <span for="painting" class="icon sprt painting"></span>
                            <span class="title">Painting</span>
                            <label>
                        </label></label></div>
                        <div class="col-md-3 passion">
                            <label>
                            <input id="foodculinary" type="checkbox">
                            <span for="foodculinary" class="icon sprt foodculinary"></span>
                            <span class="title">Food &amp; Culinary</span>
                            <label>
                        </label></label></div>
                        <div class="col-md-3 passion">
                            <label>
                            <input id="biking" type="checkbox">
                            <span for="biking" class="icon sprt biking"></span>
                            <span class="title">Motor Biking</span>
                            </label>
                        </div>
                        <div class="col-md-3 passion">
                            <label>
                            <input id="yoga" type="checkbox">
                            <span for="yoga" class="icon sprt yoga"></span>
                            <span class="title">yoga</span>
                            </label>
                        </div>
                        <div class="col-md-3 passion">
                            <label>
                            <input id="voyage" type="checkbox">
                            <span for="voyage" class="icon sprt voyage"></span>
                            <span class="title">Voyage</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="add-cat clearfix">
                    	<span>Not in the list?</span>
                        <input type="text" placeholder="Type the category name..."/>
                    </div>                    
                    </section>
                    
                    <h2 class="text-center">Select Event Type</h2>
                    <section class="event-category">
                    	<label>
                        	<input type="radio" name="event-cat" id="free" />
                            <span class="icon free"></span>
                            <span class="title">Free</span>
                        </label>
                        <label id="paid">
                        	<input type="radio" name="event-cat" id="paid" />
                            <span class="icon paid"></span>
                            <span class="title">Paid</span>
                        </label>
                        <label for="non-profit">
                        	<input type="radio" name="event-cat" id="non-profit" />
                            <span class="icon non-profit"></span>
                            <span class="title">Non-Profit</span>
                        </label>
                    </section>
                    
                    <section class="text-center">
                    	<button class="btn btn-inverse lg" @click="$emit('onStepChanged', 3)">Save & Proceed</button>
                    </section>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
h2{font-size: 28px;line-height: 1.3em;color: #314451;margin-bottom:30px;}
.wrapper{max-width:830px; margin:0 auto;}
section{margin-bottom:40px;}
.category-lst{margin-bottom:20px;}
.add-cat{max-width:500px; margin:0 auto;}
.add-cat span{float:left; font-size:18px; line-height:30px; margin-right:15px;}
.add-cat input{float:left; width:300px; border:1px solid #fff; border-width:0 0 1px; height:30px; color:#8c8c8c; font-size:14px; background:none;}

.event-type span{position:relative; margin-bottom:30px; display:block;}
.event-type span input{position:absolute; left:50%; top:40%; opacity:0; z-index:1;}
.event-type span label{display:block; height:48px; line-height:40px; border:2px solid #dadada; border-radius:30px; font-size:16px; text-align:center; color:#8c8c8c; cursor:pointer;}
.event-type span input:checked + label{background:#c15a5b; color:#fff; border-color:#c15a5b;}

/*----- event-category ------*/
.event-category{text-align:center;}
.event-category label{display:inline-block; width:130px;  margin:0 40px 20px; position:relative;  cursor:pointer;}
.event-category .icon{width:120px; height:120px; margin-bottom:15px; background-image:url(/images/ps_sprt.png); background-repeat:no-repeat; display:inline-block;}
.event-category .icon.free{background-position:-1px -448px;}
.event-category .icon.paid{background-position:-126px -448px;}
.event-category .icon.non-profit{background-position:-251px -448px;}
.event-category input{position: absolute; opacity: 0;  left: 47%; top: 47%;}
.event-category .title{display:inline-block; padding-left:30px; line-height:20px; font-size:20px; color:#8c8c8c; position:relative;}
.event-category .title:before, .event-category .title:after{position: absolute;content: " ";display: block;border-radius: 50%;transition: all .2s ease;}
.event-category .title:before{width: 20px;height: 20px;border: 2px solid #c0c0c0;left: 0;top: 0;}
.event-category .title:after{width: 10px;height: 10px;background:#c0c0c0;left: 5px;top: 5px;opacity: 0;transform: scale(0);}
.event-category input:checked + .icon + .title:before {border-color:var(--main_color);}
.event-category input:checked + .icon + .title:after {opacity:1; transform:scale(1); background:var(--main_color);}
.event-category input:checked + .icon + .title{color:var(--main_color);}
.event-category input:checked + .icon.free{background-position:-1px -578px;}
.event-category input:checked + .icon.paid{background-position:-126px -578px;}
.event-category input:checked + .icon.non-profit{background-position:-251px -578px;}
</style>
