import {clearInputs} from './utils'

export const handleButtonClose = (overlay, inputs) => {
  overlay.classList.remove('Overlay_shown')
  overlay.classList.add('Overlay_hide')
  setTimeout(() => {
    overlay.classList.remove('Overlay_hide')
  }, 200)
  let form = overlay.querySelector('form')
  if (form && form.classList.contains('FormInvalid')) {
    form.classList.remove('FormInvalid')
    clearInputs(inputs)
  }
}
