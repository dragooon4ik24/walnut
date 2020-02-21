import {handleButtonClose} from './handlers'

let openButton = document.querySelector('.Navigation-Button')
let closeButton = document.querySelector('.SideMenu-Close')
let overlay = document.querySelector('.SideMenu-Overlay')

openButton.addEventListener('click', () => {
  overlay.classList.add('Overlay_shown')
})

closeButton.addEventListener('click', () => {
  handleButtonClose(overlay)
})

overlay.addEventListener('click', e => {
  if (e.target !== overlay) {
    return
  }
  handleButtonClose(overlay)
})
