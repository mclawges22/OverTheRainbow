<?php

require_once('twitter-api-php/TwitterAPIExchange.php'); //tells PHP to go run this file

$settings = array(
    'oauth_access_token' => "772358408-H0r207h71IGdy6Oo9EBYxD8gsHt79R7MwhsVxX8K",
    'oauth_access_token_secret' => "LEyzQFg4ykMsCsX1SVPzxb4Ez64T3TbO93iyn6L2CMjkH",
    'consumer_key' => "qZ9vvoIuh5Ahe7FcXyDBUQ",
    'consumer_secret' => "fUQTyX9Gq8cJhYEdZVWvVNNhUCNkvRr75X5Le081MCM"
);
$addressP = (isset($_POST["address-input"])) ? $_POST["address-input"] : $_GET["address-input"];
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$requestMethod = 'GET';

$getfield = '?q=%23' . urlencode($addressP) . '&count=20';

$twitter = new TwitterAPIExchange ($settings);


/**echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();  */

$string = json_decode($twitter->setGetfield($getfield)
                      ->buildOauth($url, $requestMethod)
                      ->performRequest(),$assoc = TRUE);

foreach($string['statuses'] as $items) {

          # Access as an object
          $tweetText = $items['text'];

          # Make links active
          $tweetText = preg_replace("/(http:\/\/|(www\.))(([^\s<]{4,68})[^\s<]*)/", '<a href="http://$2$3" target="_blank">$1$2$4</a>', $tweetText);

          # Linkify user mention
          $tweetText = preg_replace("/@(\w+)/", '<a href="https://twitter.com/$1" target="_blank">@$1</a>', $tweetText);

          # Linkify tags
          $tweetText = preg_replace("/#(\w+)/", '<a href="https://twitter.com/search?q=$1" target="_blank">#$1</a>', $tweetText);

          
    $userInfo = $items['user'];
    echo '<div class="tweet-div"><a href="http://www.twitter.com/' . $userInfo['screen_name'] . '"><img class="userPhoto" src="' . $userInfo['profile_image_url'] . '"></a>' . '<p class="tweet">' .  $tweetText . "</div>";
}
//"<pre>";
//print_r($string);
//echo "</pre>";
?>