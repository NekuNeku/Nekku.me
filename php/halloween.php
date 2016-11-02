<?php
$video = file('halloween.txt');

//sets the keys to the array equal to the values
$video = array_combine($video, $video);
if (headers_sent() === false) {
	header("HTTP/1.1 303 See Other");
	header('Location: ' . $video[array_rand($video)], true, 303);
}
?>
