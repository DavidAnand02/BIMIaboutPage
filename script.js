// You can add JS functionality if needed in the future
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully!");
});



// Open modal when a card is clicked
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex'; // Show the modal
  });
});

// Close modal when the close button is clicked
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none'; // Hide the modal
  });
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

