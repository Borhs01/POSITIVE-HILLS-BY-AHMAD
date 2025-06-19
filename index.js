document.querySelectorAll('.section__faqs__right--examples')[0].addEventListener('click', function() {
  const faqsText = document.querySelectorAll('.faqs__text')[0];
  faqsText.style.display = faqsText.style.display === 'block' ? 'none' : 'block';
});
document.querySelectorAll('.section__faqs__right--examples')[1].addEventListener('click', function() {
  const faqsText = document.querySelectorAll('.faqs__text')[1];
  faqsText.style.display = faqsText.style.display === 'block' ? 'none' : 'block';
});
document.querySelectorAll('.section__faqs__right--examples')[2].addEventListener('click', function() {
  const faqsText = document.querySelectorAll('.faqs__text')[2];
  faqsText.style.display = faqsText.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.section__faqs__right--examples')[3].addEventListener('click', function() {
  const faqsText = document.querySelectorAll('.faqs__text')[3];
  faqsText.style.display = faqsText.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.section__faqs__right--examples')[4].addEventListener('click', function() {
  const faqsText = document.querySelectorAll('.faqs__text')[4];
  faqsText.style.display = faqsText.style.display === 'block' ? 'none' : 'block';
});
document.querySelectorAll('.section__faqs__right--examples')[5].addEventListener('click', function() {
  const faqsText = document.querySelectorAll('.faqs__text')[5];
  faqsText.style.display = faqsText.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('DOMContentLoaded', function() {
  const bookACallBtn = document.getElementById('bookACallBtn');
  const bookCallPopup = document.getElementById('bookCallPopup');
  const closePopupBtn = document.getElementById('closePopupBtn'); // Still uses this ID

  // Open the pop-up
  bookACallBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      bookCallPopup.style.display = 'flex'; // Show the pop-up
  });

  // Close the pop-up when the "Exit" button is clicked
  closePopupBtn.addEventListener('click', function(event) {
      event.preventDefault();
      bookCallPopup.style.display = 'none'; // Hide the pop-up
  });

  // Close the pop-up when clicking outside the content (on the overlay)
  bookCallPopup.addEventListener('click', function(event) {
      if (event.target === bookCallPopup) {
          bookCallPopup.style.display = 'none'; // Hide the pop-up
      }
  });
});