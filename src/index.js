import Inputmask from 'inputmask'

import showApplication from './js/ApplicationForm'

import './styles/index.scss'
import './js/Menu'
import './js/MainForm'
import {clearInputs} from './js/utils'

const tel = document.querySelector('.Form-Tel')
const applicationTel = document.querySelector('.Application-Tel')
const im = new Inputmask({mask: '+7(999)999-99-99', placeholder: '_'})

im.mask(tel)
im.mask(applicationTel)

const infoBackCall = document.querySelector('.Info-Button')
const sideMenuBackCall = document.querySelector('.SideMenu-Call')
const allInput = document.querySelectorAll('.Header input')

const handleButtonBackCall = () => {
  showApplication()
  clearInputs(allInput)
}

infoBackCall.addEventListener('click', handleButtonBackCall)

sideMenuBackCall.addEventListener('click', handleButtonBackCall)
