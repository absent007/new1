// Define the function to handle the short link click event
function handleLinkClick(event) {
  event.preventDefault(); // prevent the default behavior of the link click

  // Open YouTube app in mobile or the Chrome browser in desktop
  const youtubeUrl = 'youtube://';
  const chromeUrl = 'googlechrome://';

  // Open the destination URL in Chrome browser after 3 seconds
  const destinationUrl = this.href;
  setTimeout(() => {
    window.location.href = destinationUrl;
  }, 3000);

  // Try to open the YouTube app or Chrome browser immediately
  window.location.href = youtubeUrl;
  setTimeout(() => {
    window.location.href = chromeUrl;
  }, 1000);
}

// Find all the short links on the page
const shortLinks = document.querySelectorAll('.short-link');

// Add click event listener to each short link
shortLinks.forEach((link) => {
  link.addEventListener('click', handleLinkClick);
});

