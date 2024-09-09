function showPanel(id) {
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
}

function hidePanel(id) {
    document.getElementById(id).classList.add('hidden');
}

// Fade in effect for the quote
document.addEventListener("DOMContentLoaded", function() {
    const quoteContainer = document.querySelector('.quote-container');
    quoteContainer.style.opacity = 0;
    quoteContainer.style.transition = 'opacity 2s';
    setTimeout(() => {
        quoteContainer.style.opacity = 1;
    }, 100);
});
