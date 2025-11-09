// Event delegation for all modal buttons
document.addEventListener('click', function(event) {
  // Open modal when clicking buttons
  if (event.target.classList.contains('DescriptionButton')) {
    const modalId = event.target.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  }
  
  // Close modal when clicking close buttons
  if (event.target.classList.contains('closeButton')) {
    const modal = event.target.closest('.modal');
    modal.style.display = 'none';
  }
  
  // Close modal when clicking outside
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});