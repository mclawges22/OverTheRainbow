<?php 

header('Content-type: application/json');

$ltlng = (isset($_POST["latlng-input"])) ? $_POST["latlng-input"] : $_GET["latlng-input"];
//echo($ltlng);
$ltlngTrim = trim($ltlng, "\(\)");
//echo $ltlngTrim;
$ltlngParse = explode(", ", $ltlngTrim);
//echo $ltlngParse[0]; 
//echo $ltlngParse[1]; 

$url = "http://data.fcc.gov/api/block/2010/find?format=json&latitude=".$ltlngParse[0]."&longitude=".$ltlngParse[1];
//echo ($url);
        
$ch = curl_init($url);
$return = curl_exec($ch);
curl_close($ch);
//echo $return;
?>