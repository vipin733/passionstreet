<template>
    <div id="content">
	 <div class="evnt_dtl_hdr">
    	<div class="container">
        	<div class="row">
            	<div class="col-md-12">
                	<button class="btn btn-primary xl pull-right" @click="$emit('onStepChanged', 3)">Save & Proceed</button>
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
                    	<h2>Select Ticket</h2>
                        <div class="panel-body">
                        	<table class="tickets">
                            	<tr>
                                	<td>Duathlon (5Km - 30km - 5km)  </td>
                                    <td><strong>₹ 1500</strong> <small>(per person)</small> </td>
                                    <td>
                                    	<div class="input-group">
                                          <span class="input-group-btn">
                                              <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[1]" disabled="disabled">
                                                  -
                                              </button>
                                          </span>
                                          <input name="quant[1]" class="form-control input-number" value="1" min="1" max="10" type="text">
                                          <span class="input-group-btn">
                                              <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                                  +
                                              </button>
                                          </span>
                                      </div>
                                    </td>
                                </tr>
                                <tr>
                                	<td>Solo Cycling Expert (60km)   </td>
                                    <td><strong>₹ 1500</strong> <small>(per person)</small> </td>
                                    <td>
                                    	<div class="input-group">
                                          <span class="input-group-btn">
                                              <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[1]" disabled="disabled">
                                                  -
                                              </button>
                                          </span>
                                          <input name="quant[1]" class="form-control input-number" value="1" min="1" max="10" type="text">
                                          <span class="input-group-btn">
                                              <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                                  +
                                              </button>
                                          </span>
                                      </div>
                                    </td>
                                </tr>
                                <tr>
                                	<td>10km Running   </td>
                                    <td><strong>₹ 1500</strong> <small>(per person)</small> </td>
                                    <td>
                                    	<div class="input-group">
                                          <span class="input-group-btn">
                                              <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[1]" disabled="disabled">
                                                  -
                                              </button>
                                          </span>
                                          <input name="quant[1]" class="form-control input-number" value="1" min="1" max="10" type="text">
                                          <span class="input-group-btn">
                                              <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                                  +
                                              </button>
                                          </span>
                                      </div>
                                    </td>
                                </tr>
                                <tr>
                                	<td>5km Running </td>
                                    <td><strong>₹ 1500</strong> <small>(per person)</small> </td>
                                    <td>
                                    	<div class="input-group">
                                          <span class="input-group-btn">
                                              <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[1]" disabled="disabled">
                                                  -
                                              </button>
                                          </span>
                                          <input name="quant[1]" class="form-control input-number" value="1" min="1" max="10" type="text">
                                          <span class="input-group-btn">
                                              <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                                  +
                                              </button>
                                          </span>
                                      </div>
                                    </td>
                                </tr>
                                
                            </table>
                        </div>
                        <!--/Panel body -->
                        <div class="panel-body apply-coupon">
                        	<h4>Have a discount code ?</h4>
                            <div class="form clearfix">
                            	<input type="text" placeholder="Redeem Coupon" />
                                <button>Apply</button>
                            </div>	
                            <ul>
                            	<li>Use <strong>GPAE40863</strong> to get 14 % discount for group size of 5 or more.</li>
                                <li>Use <strong>GPAE40863</strong> to get 14 % discount for group size of 5 or more.</li>
                            </ul>
                        </div>
                        
                        <div class="panel-body bll-info">
                        	<ul>
                            	<li>
                                	<span>₹ 4500</span>
                                    Ticket Price
                                </li>
                                <li>
                                	<span>₹ 201</span>
                                    Processing Fee
                                </li>
                                <li>
                                	<span>₹ 4701</span>
                                    Gross Amount
                                </li>
                                <li>
                                	<span>₹ 200</span>
                                    Discount*
                                </li>
                               
                                <li class="total">
                                	<span>₹ 4501</span>
                                    Total Payable
                                </li>
                            </ul>
                        </div>
                        
                    </div>	
                    <!--/Box2-->                 
                    <footer class="form-footer">
                    	<button class="btn btn-primary xl pull-right" @click="$emit('onStepChanged', 3)"> Proceed</button>
                        <button class="btn btn-default  xl " @click="$emit('onStepChanged', 1)">Back</button>
                    </footer>	
                </div>
            </div>
        </div>
    </div>    	
  </div>
</template>
