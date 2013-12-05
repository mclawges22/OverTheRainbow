    /***global variables for map***/
    
    var geocoder;
    var map;
    var latlng;
    var address;
    var encodeCity;
    var noSpaceCity;
    var underScoreCity;
    var currMonth;
    var infowindow;
    var service;
    var FIPS;
    function initialize() {
        geocoder = new google.maps.Geocoder();
        latlng = new google.maps.LatLng(37.7833, -122.4167);
        var mapOptions = {
          zoom: 13,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROAD,
          scrollwheel: false
        }
        var request = {
          location: latlng,
          radius:'4000',
          types: ['airport', 'amusement_park', 'aquarium', 'bicycle_store' , 'book_store',
            'bowling_alley', 'grocery_or_supermarket', 'gym', 'library', 'museum',
            'night_club', 'park', 'shopping_mall', 'university']
        };
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        infowindow = new google.maps.InfoWindow();
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
        noSpaceCity = "SanFrancisco";
        underScoreCity = "San_Francisco";
        getTweets("SanFrancisco");
        getInstagram("SanFrancisco");
        getWeather(underScoreCity);
        getUSAToday(underScoreCity);
        function callback(results, status) {
          console.log("status: " + status);
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < 20; i++) {
              var place = results[i];
              createMarker(results[i]);
            }
          }
        }
        function createMarker(place) {
          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });

          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
          });
        }
    }
    
    /* right now markers only appear when click "go" button.
    Just hitting "enter" key still prints "found ya" but markers do not appear.
    Opposite happens when in mobile mode, markers appear on "enter" key, but not "go" button click */

    function findPlaces () {
      console.log("found ya");
      infowindow = new google.maps.InfoWindow();
      var request = {
          location: latlng,
          radius:'4000',
          types: ['airport', 'amusement_park', 'aquarium', 'bicycle_store' , 'book_store',
            'bowling_alley', 'grocery_or_supermarket', 'gym', 'library', 'museum',
            'night_club', 'park', 'shopping_mall', 'university']
        };
      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
        function callback(results, status) {
          console.log("status: " + status);
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < 20; i++) {
              var place = results[i];
              createMarker(results[i]);
            }
          }
        }
        function createMarker(place) {

          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });


          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
          });
        }

    }

    function getTweets(city) {
      
      $.get("http://maeganclawges.com/static/final/twitter.php?address-input=" + city, function(data) {
        $("#twitter-div").html(data);
        $("#twitter-top-3").html(data);
        $("#twitter-title").html("#" + noSpaceCity);
        $("#twitter-home-title").html("#" + noSpaceCity);

      });
    }



    function getDemographics() {
      $.get("http://maeganclawges.com/static/final/demographics.php?latlng-input=" + latlng, function(data) {
              console.log(data);
              FIPS = data.Block.FIPS;
              getUSAToday(FIPS);
            });

      /*

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
      });*/

      
    }

    function codeAddress() {
        address = document.getElementById('address').value;
        address_array = address.split(',');
        address = address_array[0];
        console.log("address" + address);

        encodeCity = encodeURIComponent(address);
        noSpaceCity= address.replace(/ /g,'');
        underScoreCity= address.replace(/ /g,'_');
        console.log(encodeCity);
        console.log(noSpaceCity);
        getTweets(encodeCity);
        getInstagram(noSpaceCity);
        getUSAToday(underScoreCity);
        getWeather(underScoreCity);

        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            latlng = results[0].geometry.location;
            map.setCenter(latlng);
            console.log(latlng.ob);
            console.log(latlng.pb);
            $("#city").html(address);
            findPlaces();
          } else {
            console.log('Geocode was not successful for the following reason: ' + status);
            alert('We were unable to find that location, please check the spelling of your search and specify the location.');
          }
        });
        
        //getIndex(noSpaceCity);
    }

    function codeAddressM() {
        address = document.getElementById('m-address').value;
        console.log(document.getElementById('m-address').value);
        encodeCity = encodeURIComponent(address);
        noSpaceCity= address.replace(/ /g,'');
        underScoreCity= address.replace(/ /g,'_');
        console.log(encodeCity);
        console.log(noSpaceCity);
        getTweets(encodeCity);
        getInstagram(noSpaceCity);
        getWeather(underScoreCity);
        getUSAToday(underScoreCity);
        
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            latlng = results[0].geometry.location;
            map.setCenter(latlng);
            console.log(latlng.ob);
            console.log(latlng.pb);
            $("#city").html(address);
            findPlaces();
          } else {
            console.log('Geocode was not successful for the following reason: ' + status);
            alert('We were unable to find that location, please check the spelling of your search and specify the location.');
          }
        });
        
        //getIndex(noSpaceCity);
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
        var iterations = 15;
        if (data.data.length<15) {
            iterations = data.data.length;
        }
        for (var i = 0; i < iterations; i++) {
          
          instagramHTML += "<div class='instaframe'><a target='_blank' href='" + data.data[i].link +"'><img class='instagram-photo' src='" + data.data[i].images.standard_resolution.url +"' /></a></div>";
        }
        var instagramHomeHTML= "";
        for (var i = 0; i < 6; i++) {
          
          instagramHomeHTML += "<div class='instaframehome'><a target='_blank' href='" + data.data[i].link +"'><img class='instagram-photo' src='" + data.data[i].images.standard_resolution.url +"' /></a></div>";
        }
        $("#instagram-top-6").html(instagramHomeHTML);
        $("#instagram-div").html(instagramHTML);
        $("#instagram-title").html("#" + city);

      }
    });

  }

function getIndex (city) {
    console.log(TableTopData);
    for (var i=0; i<TableTopData.length; i++) {
      if (city == TableTopData[i].city) {
        getData(i);
      }
    }
}
function getData (index) {

}

function getUSAToday (city) {
  var url = "http://api.usatoday.com/open/census/loc?keypat="+city+"&keyname=placename&sumlevid=4,6&api_key=mzuh4gnpujyh96k3sdybef85";
  //http://api.usatoday.com/open/census/pop?keypat=VA&sumlevid=4,6&api_key=mzuh4gnpujyh96k3sdybef85
  console.log(url);
  $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: url,
      success: function(data) {
          console.log(data);
          if (data.response.length == 0) {
                $("#data-title").html("Census data not available for "+city+".");
                $("#left").hide();
                $("#right").hide();
                $("#right-text").hide();
          }else {
            $("#data-title").html("Demographics and Ethnicity");
            $("#left").show();
                $('#right').show();
                $('#right-text').show();
          console.log("population: "+data.response[0].Pop);
          $("#population").html(data.response[0].Pop);
          var popSqMi = data.response[0].PopSqMi;
          $("#people-sq-mi").html(popSqMi.slice(0,7));
          var popChange = parsePercentage(data.response[0].PctChange);
          $("#pop-change").html(popChange);
          var vacant = parsePercentage(data.response[0].PctVacant);
          
          $("#percent-units-available").html(vacant);
          $("#housing-units").html(data.response[0].HousingUnits);

          var white = parsePercentage(data.response[0].PctNonHispWhite);
          $("#white").css("height", white);
          $("#white-text").html("White: <strong>"+white+"</strong>");
          var afram = parsePercentage(data.response[0].PctBlack);
          $("#afram").css("height", afram);
          $("#afram-text").html("Black: <strong>"+afram+"</strong>");
          var hispanic = parsePercentage(data.response[0].PctHisp);
          $("#hispanic").css("height", hispanic);
          $("#hispanic-text").html("Hispanic: <strong>"+hispanic+"</strong>");
          var asian = parsePercentage(data.response[0].PctAsian);
          $("#asian").css("height", asian);
          $("#asian-text").html("Asian: <strong>"+asian+"</strong>");
          var multi = parsePercentage(data.response[0].PctTwoOrMore);
          $("#multi").css("height", multi);
          $("#multi-text").html("Multi-race: <strong>"+multi+"</strong>");
          var other = parsePercentage(data.response[0].PctOther);
          $("#other").css("height", other);
          $("#other-text").html("Other: <strong>"+other+"</strong>");
        }
      }
    });
}

function parsePercentage(input) {
  var tmp1 = input;
  tmp2 = tmp1.slice(2,4);
  tmp2 = tmp2+ "." + tmp1.slice(5,6) +"%";
  tmp2 = tmp2.replace(/^0+/, '');
  return tmp2;
}
/*nv.addGraph(function() {
    var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)
      .labelThreshold(.05)
      .donut(true);

      d3.select("#chart2 svg")
      .datum(exampleData())
      .transition().duration(1200)
        .call(chart);

    return chart;
 });*/


function getWeather (city) {

    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: "http://api.wunderground.com/api/d5196a8011cd3d5e/planner_"+currMonth+"01"+currMonth+"28"+"/q/CA/"+underScoreCity+".json",
  
      success: function(weather) {
        console.log(weather.trip);
        if (weather.trip == undefined) {
          $('#high-temp').html('');
          $('#low-temp').html('');
          $('#chance-precip').html('');
          $('#title-precip').html('Weather data not available');
          $("#weather-icon").hide();
        }
        else {
          $('#title-precip').html('Chance of precipitation');
          $('#high-temp').html(weather.trip.temp_high.avg.F+ "&#8457;");
          $('#low-temp').html(weather.trip.temp_low.avg.F+ "&#8457;");
          $('#chance-precip').html(weather.trip.chance_of.chanceofprecip.percentage+ "%");
      
          if (parseInt(weather.trip.chance_of.chanceofsunnycloudyday.percentage) > parseInt(weather.trip.chance_of.chanceofpartlycloudyday.percentage)) {
              console.log("sunny!");
              $("#weather-icon").attr("src", "images/weather/sunny.png");
          }
          else if (parseInt(weather.trip.chance_of.chanceofpartlycloudyday.percentage) > parseInt(weather.trip.chance_of.chanceofrainday.percentage)) {
              console.log("partly cloudy");
              $("#weather-icon").attr("src", "images/weather/partlyCloudy.png");
          }
          else if (parseInt(weather.trip.chance_of.chanceofrainday.percentage) > parseInt(weather.trip.chance_of.chanceofsnowday.percentage)) {
              console.log("rain");
              $("#weather-icon").attr("src", "images/weather/chanceofrain.png");
          }
          else {
              console.log("snow");
              $("#weather-icon").attr("src", "images/weather/snow.png");
          }
          $("#weather-icon").show();
        }
      }
    });
}

/*
weather undergraound key: d5196a8011cd3d5e
USAToday: mzuh4gnpujyh96k3sdybef85

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