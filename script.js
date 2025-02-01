// Lightbox para las imágenes
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    const overlayText = item.querySelector('.overlay p').textContent;

    // Crear lightbox
    const lightbox = document.createElement('div');
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '1000';

    // Crear imagen en el lightbox
    const lightboxImg = document.createElement('img');
    lightboxImg.src = imgSrc;
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.maxHeight = '90%';
    lightboxImg.style.borderRadius = '10px';

    // Crear texto en el lightbox
    const lightboxText = document.createElement('p');
    lightboxText.textContent = overlayText;
    lightboxText.style.color = '#fff';
    lightboxText.style.marginTop = '10px';
    lightboxText.style.textAlign = 'center';

    // Agregar elementos al lightbox
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(lightboxText);

    // Cerrar lightbox al hacer clic
    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });

    // Agregar lightbox al body
    document.body.appendChild(lightbox);
  });
});



// Añadir efecto al pasar el mouse por encima
galleryItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.1) rotate(5deg)'; // Escala y rotación
    item.style.transition = 'transform 0.3s ease'; // Transición suave
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1) rotate(0deg)'; // Volver al estado original
  });
});