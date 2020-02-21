export const handleButtonClose = overlay => {
  overlay.classList.remove('Overlay_shown')
  overlay.classList.add('Overlay_hide')
  setTimeout(() => {
    overlay.classList.remove('Overlay_hide')
  }, 200)
}
