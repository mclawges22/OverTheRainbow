<html>
<!--put header stuff here...-->


<?php

require_once('twitter-api-php/TwitterAPIExchange.php'); //tells PHP to go run this file

$settings = array(
    'oauth_access_token' => "772358408-H0r207h71IGdy6Oo9EBYxD8gsHt79R7MwhsVxX8K",
    'oauth_access_token_secret' => "LEyzQFg4ykMsCsX1SVPzxb4Ez64T3TbO93iyn6L2CMjkH",
    'consumer_key' => "qZ9vvoIuh5Ahe7FcXyDBUQ",
    'consumer_secret' => "fUQTyX9Gq8cJhYEdZVWvVNNhUCNkvRr75X5Le081MCM"
);

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$requestMethod = 'GET';

$getfield = '?q=%23baseball&count=20';

$twitter = new TwitterAPIExchange ($settings);

/**echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();  */

$string = json_decode($twitter->setGetfield($getfield)
                      ->buildOauth($url, $requestMethod)
                      ->performRequest(),$assoc = TRUE);

foreach($string['statuses'] as $items) {
    $userInfo = $items['user'];
    echo '<img class="userPhoto" src="' . $userInfo['profile_image_url'] . '">' . "Tweet: " .  $items['text'] . "<br>";
    echo "Time: " .  $items['created_at'] . "<br>";
    
    echo '<a href="http://www.twitter.com/' . $userInfo['screen_name'] . '">' . "Name: " . $userInfo['name'] . "</a><br><br>";
}
echo "hello";
echo "<pre>";
print_r($string);
echo "</pre>";
?>

</html>