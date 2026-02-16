document.addEventListener('DOMContentLoaded', function () {
  var galleryImages = document.querySelectorAll('.imagenes .JardinFotos1')
  var lightbox = document.getElementById('photoLightbox')
  var lightboxImage = document.getElementById('photoLightboxImage')
  var closeButton = document.getElementById('photoLightboxClose')

  if (galleryImages.length && lightbox && lightboxImage && closeButton) {
    function openLightbox(image) {
      lightboxImage.src = image.src
      lightboxImage.alt = image.alt || 'Foto del jardín infantil'
      lightbox.classList.add('is-open')
      lightbox.setAttribute('aria-hidden', 'false')
      document.body.style.overflow = 'hidden'
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open')
      lightbox.setAttribute('aria-hidden', 'true')
      lightboxImage.src = ''
      document.body.style.overflow = ''
    }

    galleryImages.forEach(function (image) {
      image.setAttribute('tabindex', '0')
      image.setAttribute('role', 'button')
      image.setAttribute('aria-label', (image.alt || 'Foto del jardín infantil') + ', ampliar')

      image.addEventListener('click', function () {
        openLightbox(image)
      })

      image.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openLightbox(image)
        }
      })
    })

    closeButton.addEventListener('click', closeLightbox)

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        closeLightbox()
      }
    })

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox()
      }
    })
  }

  var carousel = document.getElementById('myCarousel')
  if (carousel) {
    function pauseCarouselVideos() {
      var playingVideos = carousel.querySelectorAll('video')
      playingVideos.forEach(function (video) {
        video.pause()
      })
    }

    if (window.jQuery) {
      window.jQuery(carousel).on('slide.bs.carousel', pauseCarouselVideos)
    } else {
      carousel.addEventListener('slide.bs.carousel', pauseCarouselVideos)
    }
  }
})
