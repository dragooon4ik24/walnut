import Success from './Success'
import {validateForm} from './utils'

const form = document.querySelector('.Form')
const nameInput = document.querySelector('.Form-Text')
const telInput = document.querySelector('.Form-Tel')
const formCheckbox = document.querySelector('.Form-Checkbox')

validateForm(form, Success().showSuccess, nameInput, telInput, formCheckbox)
