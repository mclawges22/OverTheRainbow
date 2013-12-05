<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    
    <link rel="stylesheet" type="text/css" href="css/nv.d3.min.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD39cFvd3xoQNwFeExdQAvMNj-SB-8Oz1k&sensor=false">
    </script>
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>
    <script type="text/javascript" src="js/nv.d3.min.js"></script>
    <script type="text/javascript" src="js/map.js"></script>
    <script type="text/javascript" src="js/DOMHandlers.js"></script>

    <!-- TableTop.js -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.1.0/tabletop.min.js"></script>

    <!-- TableTop.js initialization -->
    <script type="text/javascript">
          window.onload = function() { init() };

          var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?key=0AsaFsXSqVoy6dGVRSW5YVFBmaHB4NzBDWkN6NlJZaVE&output=html';

          function init() {
            Tabletop.init( { key: public_spreadsheet_url,
                             callback: showInfo,
                             simpleSheet: true } )
          }
          var TableTopData;

          function showInfo(data, tabletop) {
            console.log(data);
            TableTopData = data;
          }
    </script>
  </head>
  <body>
  
    <header>
      <img id="rainbow" src="images/rainbow.png">
      <h1>Somewhere Over The Rainbow</h1>
      <div id="right">
          <h4 id="recent">Recent places</h4><div id="triangle-down"></div>
          <img src="images/stripes.png">
          <h4 id="about" onclick="about()">About</h4>
          <h4 id="close" onclick="close()">Close</h4>
          <h4 id="user">Maegan</h4>
          <h4 id="log-out">Log out</h4>
          <div id="about-section">
            <p><strong>Ever considered moving? </strong><br>Whether for a summer internship or permanent move, 
              "Somewhere Over The Rainbow" allows you to explore an area. Type in the name of a city and view geography, 
              nearby attractions, demographic data, recent social media activity and the weather for various times of year.</p>
              <p>This is a project by <a href="http://maeganclawges.com" target="_blank">Maegan Clawges</a>, 
              a interactive graphic design and computer science double major at the University of North Carolina at Chapel Hill.
              It was made for an Intermediate Multimedia and Web Development class in the UNC Journalism School.</p>
          </div>
      </div>
    </header>
      <div id="left-container">
        <div id="m-search">
          <h6>Where would you like to explore?</h6>
          <form id="m-topForm" method="post">
          <input id="m-address" name="address-input" type="text" placeholder="Chicago">
          <input id="addressButton" type="submit" value="Go"></form>
        </div>
        <h1 id="city">San Francisco</h1>

        <div id="map-canvas"></div>
      </div>
      <div id="right-container">
        <div id="search">
          <h6>Where would you like to explore?</h6>
          <form id="topForm" method="post">
          <input id="address" name="address-input" type="text" placeholder="Chicago">
          <input id="addressButton" type="submit" value="Go"></form>
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
          <div id="weather">
            <h3 id="weather-home-title" class="home-title">Weather for...
            <select id="sel-month" onchange="monthChange(this)">
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select></h3>
            <div id="inner-weather">
              <img id="weather-icon" src="images/weather/partlyCloudy.png">
              <h4 id="title-precip">Chance of precipitation</h4>
              <h1 id="chance-precip">1%</h1>
            </div>
              <h4 class="averages high">Average<br>High<br><strong id="high-temp">71&#8457;</strong></h4>
              
              <h4 class="averages low">Low<br><strong id="low-temp">55&#8457;</strong></h4>
            
          </div>
          <div id="twitter-home">
            <h3 id="twitter-home-title" class="home-title">#SanFrancisco</h3>
            <div id="instagram-top-6">
            </div>
            <div id="twitter-top-3">
            </div>
          </div>
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
          <h3 id="data-title">Demographics and Ethnicity</h3>
          
            <div id="left">
              <h3>Population<br><strong id="population">825,863</strong></h2>
              <div class="border"></div>

              <h3><strong id="people-sq-mi">17,179.1</strong><br>people per square mile</h3>
              <div class="border"></div>

              <h3><strong id="pop-change">3.66%</strong><br>change in population from 2000<br>to 2010</h3>
              <div class="border"></div>

              <h3><strong id="percent-units-available">8.25%</strong><br>of the<br><strong id="housing-units">376942</strong><br>housing units<br>in the area<br>are vacant.</h3>
             
            </div>
            <div id="right">
              <div id="other" class="ethnicity"></div>
              <div id="multi" class="ethnicity"></div>
              <div id="hispanic" class="ethnicity"></div>
              <div id="asian" class="ethnicity"></div>
              <div id="afram" class="ethnicity"></div>
              <div id="white" class="ethnicity"></div>
            
            </div>
            <div id="right-text">
              <h3 id="other-text" class="ethnic-text"></h3>
              <h3 id="multi-text" class="ethnic-text"></h3>
              <h3 id="hispanic-text" class="ethnic-text"></h3>
              <h3 id="asian-text" class="ethnic-text"></h3>
              <h3 id="afram-text" class="ethnic-text"></h3>
              <h3 id="white-text" class="ethnic-text"></h3>
            
            </div>
            <p class="credit">Data from <a href="http://developer.usatoday.com/docs/read/Census">USA Today Census API</a></p><img id="USAToday-logo" src="images/USAToday-logo.png">
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