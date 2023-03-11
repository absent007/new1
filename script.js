const form = document.getElementById('url-shortener-form');
const input = document.getElementById('url-shortener-input');
const output = document.getElementById('url-shortener-output');
const error = document.getElementById('url-shortener-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = input.value.trim();
  if (!isValidUrl(url)) {
    showError('Please enter a valid URL.');
    return;
  }
  shortenUrl(url);
});

function isValidUrl(url) {
  // Basic URL validation - you may want to use a more sophisticated method
  return url.length > 0 && url.startsWith('http');
}

function showError(message) {
  output.style.display = 'none';
  error.innerText = message;
  error.style.display = 'block';
}

function shortenUrl(url) {
  const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
  const accessToken = '<YOUR_ACCESS_TOKEN>'; // Replace with your Bitly access token
  const data = {
    long_url: url,
  };
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      const shortUrl = data.link;
      output.innerText = shortUrl;
      output.href = shortUrl;
      output.style.display = 'block';
      error.style.display = 'none';
      input.value = '';
    })
    .catch(error => {
      showError('An error occurred while trying to shorten the URL. Please try again later.');
      console.error(error);
    });
}
