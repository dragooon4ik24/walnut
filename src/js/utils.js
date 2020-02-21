const validateForm = (form, callback, ...fields) => {
  const submitButton = form.querySelector('button[type="submit"]')
  const invalidFields = []
  const [nameInput, telInput, formCheckbox] = fields

  const deleteInvalidOutline = () => {
    invalidFields.forEach(field => field.classList.remove('Field_invalid'))
    invalidFields.length = 0
  }

  const clearAllFields = () => {
    fields.forEach(field => {
      if (field.type === 'checkbox') {
        field.checked = false
      } else {
        field.value = ''
      }
    })
  }

  const checkFields = () => {
    if (nameInput.validity.valueMissing) {
      invalidFields.push(nameInput)
    }
    if (
      !(!telInput.validity.valueMissing && !telInput.validity.patternMismatch)
    ) {
      invalidFields.push(telInput)
    }
    if (!formCheckbox.checked) {
      invalidFields.push(formCheckbox)
    }
  }

  submitButton.addEventListener('click', e => {
    e.preventDefault()

    if (invalidFields.length) {
      deleteInvalidOutline()
    }

    checkFields()

    if (invalidFields.length) {
      invalidFields.forEach(field => {
        field.classList.add('Field_invalid')
        if (field.type !== 'checkbox') field.value = ''
      })
      invalidFields[0].focus()
      form.classList.add('FormInvalid')
    } else {
      form.classList.remove('FormInvalid')
      deleteInvalidOutline()
      clearAllFields()
      callback()
    }
  })
}

const clearInputs = allInput => {
  allInput.forEach(input => {
    if (input.classList.contains('Field_invalid'))
      input.classList.remove('Field_invalid')
  })
}

export {clearInputs, validateForm}
