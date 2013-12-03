    /***global variables for map***/
    
    var geocoder;
    var map;
    var latlng;
    var address;
    var encodeCity;
    var noSpaceCity;
    var currMonth;
    function initialize() {
        geocoder = new google.maps.Geocoder();
        latlng = new google.maps.LatLng(37.7833, -122.4167);
        var mapOptions = {
          zoom: 11,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROAD,
          scrollwheel: false
        }
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        noSpaceCity = "SanFrancisco";
        getTweets("SanFrancisco");
        getInstagram("SanFrancisco");
        getWeather("San_Francisco");
        //getDemographics();
    }
    
    function getTweets(city) {
      
      $.get("http://maeganclawges.com/static/final/twitter.php?address-input=" + city, function(data) {
        $("#twitter-div").html(data);
        $("#twitter-title").html("#" + noSpaceCity);

      });
    }

    /*function getDemographics() {
      $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "http://data.fcc.gov/api/block/2010/find?format=json&latitude="+latlng.ob+"&longitude="+latlng.pb,
        success: function(info) {
          console.log("heya");
          console.log("data: "+info.State.FIPS);

          $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: "http://api.census.gov/data/2010/sf1?key=34625df4fb45edf8f821d607b3cf70cf2a3d960f&get=P0010001,NAME&for=state:06",
            success: function(demo) {
              console.log("data: "+demo);
            }
          });
        }
      });

      
    }*/

    function codeAddress() {
        address = document.getElementById('address').value;
        console.log(document.getElementById('address').value);
        encodeCity = encodeURIComponent(address);
        noSpaceCity= address.replace(/ /g,'')
        console.log(encodeCity);
        console.log(noSpaceCity);
        getTweets(encodeCity);
        getInstagram(noSpaceCity);
        
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            latlng = results[0].geometry.location;
            map.setCenter(latlng);
            console.log(latlng.ob);
            console.log(latlng.pb);
            $("#city").html(address);
          } else {
            console.log('Geocode was not successful for the following reason: ' + status);
            alert('We were unable to find that location, please check the spelling of your search and specify the location.');
          }
        });
        //getDemographics();
    }

    function codeAddressM() {
        address = document.getElementById('m-address').value;
        console.log(document.getElementById('m-address').value);
        encodeCity = encodeURIComponent(address);
        noSpaceCity= address.replace(/ /g,'')
        console.log(encodeCity);
        console.log(noSpaceCity);
        getTweets(encodeCity);
        getInstagram(noSpaceCity);
        
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            latlng = results[0].geometry.location;
            map.setCenter(latlng);
            console.log(latlng.ob);
            console.log(latlng.pb);
            $("#city").html(address);
          } else {
            console.log('Geocode was not successful for the following reason: ' + status);
            alert('We were unable to find that location, please check the spelling of your search and specify the location.');
          }
        });
        //getDemographics();
    }
      
      google.maps.event.addDomListener(window, 'load', initialize);


  function getInstagram (city) {
    
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: "https://api.instagram.com/v1/tags/"+city+"/media/recent/?access_token=281771507.1fb234f.20338b4868464ff4aeea3b6d4cf13fef",
      success: function(data) {
        console.log(data);
        var instagramHTML= "";
        for (var i = 0; i < 15; i++) {
          
          instagramHTML += "<div class='instaframe'><a target='_blank' href='" + data.data[i].link +"'><img class='instagram-photo' src='" + data.data[i].images.standard_resolution.url +"' /></a></div>";

        }
        $("#instagram-div").html(instagramHTML);
        $("#instagram-title").html("#" + city);
      }
    });

  }

function getWeather (city) {

    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: "http://api.wunderground.com/api/d5196a8011cd3d5e/planner_"+currMonth+"01"+currMonth+"28"+"/q/CA/"+city+".json",
      success: function(weather) {
          console.log(weather.trip);
      }
    });
}

/*
weather undergraound key: d5196a8011cd3d5e

GET /v1/tags/sanfrancisco/media/recent?access_token=281771507.1fb234f.20338b4868464ff4aeea3b6d4cf13fef HTTP/1.1
X-HostCommonName:
api.instagram.com
Host:
api.instagram.com
X-Target-URI:
https://api.instagram.com
Connection:
Keep-Alive*/


      /*function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(35.530280, -82.385020),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };
        
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      
        var marker = new google.maps.Marker ({
          position:map.getCenter(),
          map:map,
          title:'Click to zoom'
        });
      
        google.maps.event.addListener(map, 'center-change', function() {
          window.setTimeout(function() { map.panTo(marker.getPosition()); }, 3000);
          });
      
      google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(20);
        map.setCenter(marker.getPosition());
    });
      
      }
      
      google.maps.event.addDomListener(window, 'load', initialize);*/