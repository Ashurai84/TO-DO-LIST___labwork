
document.addEventListener('DOMContentLoaded', function() {

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeButton = document.querySelector('.close-button');
    

    const galleryItems = document.querySelectorAll('.gallery-item');
    

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.gallery-image');
            const title = this.querySelector('.overlay-content h3').textContent;
            

            lightboxImg.src = img.src;
            lightboxCaption.textContent = title;
            

            lightbox.style.display = 'block';
        });
    });
    

    closeButton.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
    

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });
});