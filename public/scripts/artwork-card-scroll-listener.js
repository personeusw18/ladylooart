// Function to check if at least 50% of the element is in the viewport
function isElementAtLeastHalfInViewport(el) {
  const rect = el.getBoundingClientRect();
  const elementHeight = rect.height;

  return (
    rect.top + elementHeight / 2 >= 0 &&             // Top half is visible
    rect.bottom - elementHeight / 2 <= window.innerHeight && // Bottom half is visible
    rect.left >= 0 &&                                  // Left side is within the viewport
    rect.right <= window.innerWidth                    // Right side is within the viewport
  );
}

// Function to load visible images
function loadVisibleImages() {
  const images = document.querySelectorAll('.animate-artwork-card-image');

  images.forEach((image) => {
    // Check if at least half of the image is in view
    if (isElementAtLeastHalfInViewport(image)) {
      if (image.dataset.src && !image.src) {
        // Lazy-load the image
        image.src = image.dataset.src;
        image.dataset.src = ''; // Clear the dataset attribute after loading
      }
      
      // Ensure the animation plays after the image is loaded
      image.onload = () => {
        image.classList.remove('opacity-0'); // Show the image after loading
        image.classList.add('animate-appear'); // Add animation class
      };

      // If image is already cached (loaded), apply the animation immediately
      if (image.complete) {
        image.classList.remove('opacity-0'); // Show the image if cached
        image.classList.add('animate-appear'); // Add animation class
      }
    }
  });
}

// Initial check for visible images on page load
document.addEventListener('DOMContentLoaded', loadVisibleImages);

// Check images on scroll
window.addEventListener('scroll', loadVisibleImages);

// Check images when the page is shown (for cache hits)
window.addEventListener('pageshow', loadVisibleImages);

// Handle back/forward navigation
window.addEventListener('popstate', () => {
  setTimeout(loadVisibleImages, 100); // Delay for DOM updates
});
