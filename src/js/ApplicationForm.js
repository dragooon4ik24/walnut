import {handleButtonClose} from './handlers'
import Success from './Success'
import {validateForm} from './utils'

const applicationModal = document.querySelector('.Modals-Application')
const applicationCloseButton = document.querySelector('.Application-Close')

const form = document.querySelector('.Application-Content')
const nameInput = document.querySelector('.Application-Text')
const telInput = document.querySelector('.Application-Tel')
const formCheckbox = document.querySelector('.Application-Checkbox')
const inputs = [nameInput, telInput, formCheckbox]

applicationCloseButton.addEventListener('click', () => {
  handleButtonClose(applicationModal, inputs)
})
const checkCompletedSuccessfully = () => {
  Success().showSuccess()
  handleButtonClose(applicationModal, inputs)
}
validateForm(form, checkCompletedSuccessfully, ...inputs)

applicationModal.addEventListener('click', e => {
  if (e.target !== applicationModal) {
    return
  }
  handleButtonClose(applicationModal, inputs)
})

export default function showApplication() {
  applicationModal.classList.add('Overlay_shown')
}
