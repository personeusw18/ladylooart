document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('artwork-modal');
  const modalImage = document.getElementById('artwork-modal-image');
  const closeButton = document.getElementById('artwork-modal-close-button');

  // Function to show the modal
  function showModal(event) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    const imageSrc = event.target.src; // Get the image source from the clicked card
    modalImage.src = imageSrc; // Set the modal image source
  }

  // Function to hide the modal
  function hideModal() {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }

  // Event listener for artwork cards
  document.querySelectorAll('[data-modal-target="artwork-modal"]').forEach(card => {
    card.addEventListener('click', showModal);
  });

  // Event listener for the close button
  closeButton.addEventListener('click', hideModal);
});