/*
Name: Shiro
File: main.js
Date: 12 August 2026
Description: JavaScript for the Bear Accessibility Troubleshooting page.
*/

// Show/hide button for the bear details
const toggleButton = document.getElementById('toggle-details');
const detailsSection = document.getElementById('details');

toggleButton.addEventListener('click', () => {
  const isHidden = detailsSection.classList.toggle('hidden');

  if (isHidden) {
    toggleButton.textContent = 'Show details';
    toggleButton.setAttribute('aria-expanded', 'false');
  } else {
    toggleButton.textContent = 'Hide details';
    toggleButton.setAttribute('aria-expanded', 'true');
  }
});

// Comment form functionality
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('comment-name');
  const commentInput = document.getElementById('comment-text');

  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  if (name === '' || comment === '') {
    alert('Please fill out both fields before submitting.');
    return;
  }

  // Create new comment item
  const newComment = document.createElement('li');
  newComment.innerHTML = `<strong>${name}</strong>: ${comment}`;

  // Add ARIA live region for screen readers
  commentList.setAttribute('aria-live', 'polite');

  // Append comment
  commentList.appendChild(newComment);

  // Clear fields
  nameInput.value = '';
  commentInput.value = '';
});
