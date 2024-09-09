// Modal functionality
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Content sections
const whoamiContent = document.getElementById('whoami-content').innerHTML;
const githubContent = document.getElementById('github-content').innerHTML;
const contactContent = document.getElementById('contact-content').innerHTML;

// Event listeners for buttons
document.getElementById('whoami-button').addEventListener('click', function() {
    modalBody.innerHTML = whoamiContent;
    modal.classList.remove('hidden');
});

document.getElementById('projects-button').addEventListener('click', function() {
    modalBody.innerHTML = githubContent;
    modal.classList.remove('hidden');
});

document.getElementById('contact-button').addEventListener('click', function() {
    modalBody.innerHTML = contactContent;
    modal.classList.remove('hidden');
});

// Close modal on click
closeBtn.addEventListener('click', function() {
    modal.classList.add('hidden');
});
