<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD39cFvd3xoQNwFeExdQAvMNj-SB-8Oz1k&sensor=false">
    </script>
    
    <script type="text/javascript" src="js/map.js"></script>
    <script type="text/javascript" src="js/DOMHandlers.js"></script>
  </head>
  <body>
    <header>
      <img id="rainbow" src="images/rainbow.png">
      <h1>Somewhere Over The Rainbow</h1>
      <div id="right">
          <h4>Recent places</h4><div id="triangle-down"></div>
          <img src="images/stripes.png">
          <h4>Maegan</h4>
          <h4>Log out</h4>
      </div>
    </header>
      <div id="left-container">
        <h1 id="city">San Francisco, CA</h1>
        <div id="map-canvas"></div>
      </div>
      <div id="right-container">
        <div id="search">
          <h6>Where would you like to explore?</h6>
          <form id="topForm" method="post">
          <input id="address" name="address-input" type="text" placeholder="New York">
          <input id="addressButton" type="submit" value="Go" onclick="codeAddress()"></form>
        </div>
        <div id="tabs">
          <img id="house" src="images/house.png" onclick="homeActive()">
          
          <div class="rhombus-yellow" onclick="homeActive()"></div>
          <div class="rhombus-blue" onclick="twitterActive()"></div>
          <div class="rhombus-red" onclick="instagramActive()"></div>
          <div class="rhombus-green" onclick="zillowActive()"></div>
          <p id="twitter-tab" onclick="twitterActive()">Twitter</p>
          <p id="instagram-tab" onclick="instagramActive()">Instagram</p>

          <p id="zillow-tab" onclick="zillowActive()">Data</p>
        </div>

        <div id="home">
        </div>
        <div id="twitter">
          <h3 id="twitter-title">#SanFrancisco</h3>
          <div id="twitter-div"></div>
        </div>
        <div id="instagram">
          <h3 id="instagram-title">#SanFrancisco</h3>
          <div id="instagram-div"></div>
        </div>
        <div id="cost-of-living">
          <div style='width:300px;margin:0 auto;'>
              <p>This is the overall cost of living index, which takes into account 
                childcare, healthcare, housing, food, transportation, and tax expenses. 
                The nationwide average score is 100. Therefore, if this result has a score 
                of 110, it is 10% higher than the U.S average.</p>
              <iframe src='http://cost-of-living.findthedata.org/w/giR9Tfll941' 
                  width=340 height=450 frameborder=0 scrolling='no' style='vertical-align:top;' ></iframe>
              <div style='text-align:center;'>
                <a target='_blank' href='http://cost-of-living.findthedata.org/l/60/San-Francisco-CA-Metro-Area' style='font:10px/14px arial;color:#3d3d3d;'>See more details | FindTheBest</a>
              </div>
            </div>
        </div>
      </div>
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-45910068-1', 'maeganclawges.com');
  ga('send', 'pageview');

</script>
  </body>
</html>