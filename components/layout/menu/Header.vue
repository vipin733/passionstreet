<template>
    <header id="header" class="nav-down" >
        <div id="hdr_L1">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                    
                    </div>
                    <nav class="col-sm-6 main-nav">
                        <ul>
                            <li class="active">
                                <nuxt-link to="/">
                                    Home
                                </nuxt-link>
                            </li>
                            <li><a href="#">Passion Zone <i class="fa fa-angle-down"></i></a></li>
                            <li>
                                <nuxt-link to="/event-list">
                                    Events
                                </nuxt-link>
                            </li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Follow</a></li>
                        </ul>
                    </nav>
                    <div class="col-sm-3">
                        <ul class="global-nav">
                            <li><a href="#">Create Community</a></li>
                            <li>
                                <nuxt-link to="/event-creation">
                                    Create Event
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Header L1 -->
        <div id="hdr_L2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <nuxt-link to="/" class="sprt brand">
                              PASSIONSTREET
                            </nuxt-link>
                            <!-- <a href="#" class="sprt brand">PASSIONSTREET</a> -->
                        </div>
                        <div class="col-sm-6">
                            <div class="global-srch clearfix">
                                <span class="srch_ttl">
                                    <i class="grid sprt"></i>
                                    ALL<i class="fa fa-angle-down"></i>
                                    <div class="drpdwn">
                                        <ul>
                                            <li><a href="#">Link One</a></li>
                                            <li><a href="#">Link Two</a></li>
                                            <li><a href="#">Link Three</a></li>
                                        </ul>
                                    </div>
                                </span>
                                <div class="form">
                                    <form>
                                        <input type="text" placeholder="Book Events, communities, Passion Zone..." />
                                        <button type="submit"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="user-area clearfix">
                                <img src="/images/img1.jpg" alt="" />
                                <small>Welcome to passionstreet</small>
                                <!--<button type="button" data-toggle="modal" data-backdrop="static" data-target="#login-form">Login</button>-->
                                <span class="name">Brijesh <i class="fa fa-angle-down"></i>
                                    <div class="user-drpdwn">
                                        <ul>
                                            <li><a href="#">Settings</a></li>
                                            <li>
                                                <nuxt-link to="/profile">
                                                    Profile
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/follow-list">
                                                    Follow List
                                                </nuxt-link>
                                                <nuxt-link to="/post-login">
                                                    Dashboard
                                                </nuxt-link>
                                            </li>
                                            
                                            <li><a href="#">Logout</a></li>
                                        </ul>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>   
                </div>
        </div>
    </header>
</template>
