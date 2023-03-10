<?php
// Get the long URL from the form submission
$long_url = $_POST['url'];

// Generate a unique identifier for the short URL
$short_id = substr(md5(uniqid(mt_rand(), true)), 0, 6);

// Build the short URL
$short_url = "https://example.com/$short_id";

// Save the short URL to a database or file
// ...

// Display the short URL to the user
echo "Your short URL is: <a href=\"$short_url\">$short_url</a>";
?>
