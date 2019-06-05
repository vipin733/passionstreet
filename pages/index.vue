<template>
  <div>
    <Hero/>
    <section>
    	<div class="container">
    		<div class="sctn_hd">
          <h2>What's New on Passionstreet</h2>
          <span>Exclusive Events, Communities and Passion Zone!</span>
        </div>
        <div class="tabstrip1">
          <ul>
            <li><a href="#"  class="active">Events</a></li>
            <li><a href="#">Communities</a></li>
            <li><a href="#">Passion Zone</a></li>
            </ul>
        </div>
            
        <div class="row card_styl1">
          <div class="col-md-3">
            <div class="card">
              <figure>
                <img src="images/thumb1.jpg" alt="" />
              </figure>
              <div class="cntnd">
                <span class="views"><i class="fa fa-eye"></i> 634 Views</span>
                <h3><a href="#">New Delhi Triathlon Championship</a></h3>
                <span class="lcn"><i class="fa fa-map-marker"></i> New Delhi </span>
                <span class="date"><i class="fa fa-calendar"></i> 5 Aug, 17</span>
              </div>
              <footer>
                <button class="btn btn-primary" @click="$router.push('event-detail')">join Now</button>
                <span class="price">₹ 9000 <small>onwards</small></span>
              </footer>
            </div>	
          </div>

          <div class="col-md-3">
            <div class="card">
              <figure>
                <img src="images/thumb1.jpg" alt="" />
              </figure>
              <div class="cntnd">
                <span class="views"><i class="fa fa-eye"></i> 634 Views</span>
                <h3><a href="#">New Delhi Triathlon Championship</a></h3>
                <span class="lcn"><i class="fa fa-map-marker"></i> New Delhi </span>
                <span class="date"><i class="fa fa-calendar"></i> 5 Aug, 17</span>
              </div>
              <footer>
                <button class="btn btn-primary" @click="$router.push('event-detail')">join Now</button>
                <span class="price">₹ 9000 <small>onwards</small></span>
              </footer>
            </div>	
          </div>

          <div class="col-md-3">
            <div class="card">
              <figure>
                <img src="images/thumb1.jpg" alt="" />
              </figure>
              <div class="cntnd">
                <span class="views"><i class="fa fa-eye"></i> 634 Views</span>
                <h3><a href="#">New Delhi Triathlon Championship</a></h3>
                <span class="lcn"><i class="fa fa-map-marker"></i> New Delhi </span>
                <span class="date"><i class="fa fa-calendar"></i> 5 Aug, 17</span>
              </div>
              <footer>
                <button class="btn btn-primary" @click="$router.push('event-creation')">join Now</button>
                <span class="price">₹ 9000 <small>onwards</small></span>
              </footer>
            </div>	
          </div>

          <div class="col-md-3">
            <div class="card">
              <figure>
                <img src="images/thumb1.jpg" alt="" />
              </figure>
              <div class="cntnd">
                <span class="views"><i class="fa fa-eye"></i> 634 Views</span>
                <h3><a href="#">New Delhi Triathlon Championship</a></h3>
                <span class="lcn"><i class="fa fa-map-marker"></i> New Delhi </span>
                <span class="date"><i class="fa fa-calendar"></i> 5 Aug, 17</span>
              </div>
              <footer>
                <button class="btn btn-primary" @click="$router.push('event-creation')">join Now</button>
                <span class="price">₹ 9000 <small>onwards</small></span>
              </footer>
            </div>	
          </div>
        </div>
            
        <footer class="sctn_ftr">
          <a href="#">View All <i class="fa fa-angle-down"></i></a>
        </footer>
    	</div>
    </section>	

    <section>
    	<div class="container">
    		<div class="sctn_hd">
          <h2>Trending Passion Zone</h2>
          <span>Browse most trending and searched passion zone!</span>
        </div>
        <div class="row card_styl2">
          <div class="col-md-3">
            <div class="card">
              <a href="#">
                <figure><img src="/images/cycling.jpg" alt="" />
                  <figcaption>Cycling</figcaption>
                </figure>
              </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <a href="#"><figure><img src="/images/yoga.jpg" alt="" />
                <figcaption>Yoga</figcaption>
                </figure>
              </a>    
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <a href="#">
                <figure>
                  <img src="/images/rafting.jpg" alt="" />
                  <figcaption>Rafting</figcaption>
                </figure>
              </a>    
            </div>
          </div>
            <div class="col-md-3">
              <div class="card">
                <a href="#"><figure>
                  <img src="/images/music.jpg" alt="" />
                  <figcaption>Music</figcaption>
                  </figure>
                </a>    
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <a href="#">
                  <figure>
                    <img src="/images/biking.jpg" alt="" />
                    <figcaption>Motorbiking</figcaption>
                  </figure>
                </a>    
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <a href="#">
                  <figure>
                    <img src="/images/food-culinary.jpg" alt="" />
                    <figcaption>Food Safari & Culinary</figcaption>
                  </figure>
                </a>    
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <a href="#">
                  <figure>
                    <img src="/images/trekking.jpg" alt="" />
                    <figcaption>Trekking</figcaption>
                  </figure>
                </a>    
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <a href="#">
                  <figure>
                    <img src="/images/dancing.jpg" alt="" />
                    <figcaption>Dancing</figcaption>
                  </figure>
                </a>    
              </div>
            </div>
        </div>            
    	</div>
    </section> 

    <section class="featured">
    	<span class="lbl">Just For You</span>
      <div class="container">
        <div class="sctn_hd">
          <h2>Don’t Miss These Events Near You!</h2>
        </div>
        <div class="row card_styl1">
          <div class="col-md-3">
            <div class="card">
              <figure>
                <img src="/images/thumb1.jpg" alt="" />
              </figure>
              <div class="cntnd">
                <span class="views"><i class="fa fa-eye"></i> 634 Views</span>
                <h3><a href="#">New Delhi Triathlon Championship</a></h3>
                <span class="lcn"><i class="fa fa-map-marker"></i> New Delhi </span>
                <span class="date"><i class="fa fa-calendar"></i> 5 Aug, 17</span>
              </div>
              <footer>
                <button class="btn btn-primary" @click="$router.push('event-creation')">join Now</button>
                <span class="price">₹ 9000 <small>onwards</small></span>
              </footer>
            </div>	
          </div>

          <div class="col-md-3">
            <div class="card">
              <figure>
                <img src="/images/thumb1.jpg" alt="" />
              </figure>
              <div class="cntnd">
                <span class="views"><i class="fa fa-eye"></i> 634 Views</span>
                <h3><a href="#">New Delhi Triathlon Championship</a></h3>
                <span class="lcn"><i class="fa fa-map-marker"></i> New Delhi </span>
                <span class="date"><i class="fa fa-calendar"></i> 5 Aug, 17</span>
              </div>
              <footer>
                <button class="btn btn-primary" @click="$router.push('event-creation')">join Now</button>
                <span class="price">₹ 9000 <small>onwards</small></span>
              </footer>
            </div>	
          </div>

          <div class="col-md-3">
            <div class="card">
              <figure>
                <img src="/images/thumb1.jpg" alt="" />
              </figure>
              <div class="cntnd">
                <span class="views"><i class="fa fa-eye"></i> 634 Views</span>
                <h3><a href="#">New Delhi Triathlon Championship</a></h3>
                <span class="lcn"><i class="fa fa-map-marker"></i> New Delhi </span>
                <span class="date"><i class="fa fa-calendar"></i> 5 Aug, 17</span>
              </div>
              <footer>
                <button class="btn btn-primary" @click="$router.push('event-creation')">join Now</button>
                <span class="price">₹ 9000 <small>onwards</small></span>
              </footer>
            </div>	
          </div>

          <div class="col-md-3">
            <div class="card">
              <figure>
                <img src="/images/thumb1.jpg" alt="" />
              </figure>
              <div class="cntnd">
                <span class="views"><i class="fa fa-eye"></i> 634 Views</span>
                <h3><a href="#">New Delhi Triathlon Championship</a></h3>
                <span class="lcn"><i class="fa fa-map-marker"></i> New Delhi </span>
                <span class="date"><i class="fa fa-calendar"></i> 5 Aug, 17</span>
              </div>
              <footer>
                <button class="btn btn-primary" @click="$router.push('event-creation')">join Now</button>
                <span class="price">₹ 9000 <small>onwards</small></span>
              </footer>
            </div>	
          </div>
        </div>
        <footer class="sctn_ftr">
          <a href="#">View All <i class="fa fa-angle-down"></i></a>
        </footer>
      </div>
    </section> 

    <section class="dashboard">
    	<div class="container">
        <div class="sctn_hd">
          <h2>Discover Passionstreet</h2>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="icon"><img src="images/icon1.png" alt=""/></div>
            <h3>Create Events</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button class="btn btn-inverse">Create Events</button>
          </div>
          <div class="col-sm-4">
            <div class="icon"><img src="images/icon2.png" alt=""/></div>
            <h3>Build Passion Community</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button class="btn btn-inverse">Create Community</button>
          </div>
          <div class="col-sm-4">
            <div class="icon"><img src="images/icon3.png" alt=""/></div>
            <h3>Discover Your Passion</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button class="btn btn-inverse">Discover</button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Hero from '~/components/home/Hero'
export default {
  layout: 'landing',
  auth: false,
  components: {
    Hero
  }
}
</script>
