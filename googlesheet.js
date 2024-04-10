const scriptURL = 'https://script.google.com/macros/s/AKfycby12bLN5iYaAuye4_AeKF_IYeVbIRg9mPR4HYNhSt16ryPlapJKS0IY1P3XneJ-TsYb/exec'

const form = document.forms['nameForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .catch(error => console.error('Error!', error.message))
})
