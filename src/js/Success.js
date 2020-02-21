import {handleButtonClose} from './handlers'

export default function Success() {
  const successModal = document.querySelector('.Modals-Success')
  const successCloseButton = document.querySelector('.Success-Close')
  const successOkButton = document.querySelector('.Success-Ok')

  successCloseButton.addEventListener('click', () =>
    handleButtonClose(successModal)
  )

  successOkButton.addEventListener('click', () =>
    handleButtonClose(successModal)
  )
  successModal.addEventListener('click', e => {
    if (e.target !== successModal) {
      return
    }
    handleButtonClose(successModal)
  })
  return {
    showSuccess: function() {
      successModal.classList.add('Overlay_shown')
    },
  }
}
