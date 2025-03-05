document.addEventListener('DOMContentLoaded', function() {
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('click', function() {
            const url = card.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});
