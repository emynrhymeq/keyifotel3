// Modal ve görsel elemanlarını al
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('close-btn')[0];

// Modalı açan fonksiyon
function openModal(imageSrc) {
    modal.style.display = 'block'; // Modalı görünür yap
    modalImage.src = imageSrc;      // Modaldaki görseli ayarla
}

// Modalı kapatan fonksiyon
closeBtn.onclick = function() {
    modal.style.display = 'none'; // Modalı gizle
}

// Modal dışında bir yere tıklandığında kapatma
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}