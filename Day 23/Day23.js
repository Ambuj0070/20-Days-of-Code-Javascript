// Event Listener

// Click
{
    const button = document.querySelector('button')
    button.addEventListener('click', e => {
      console.log('e gives the event listener object:', e)
      console.log('e.target gives the selected element: ', e.target)
      console.log(
        'e.target.textContent gives content of selected element: ',
        e.target.textContent
      )
    })
}

// Double Click
{
    const button = document.querySelector('button')
    button.addEventListener('dblclick', e => {
      console.log('e gives the event listener object:', e)
      console.log('e.target gives the selected element: ', e.target)
      console.log(
        'e.target.textContent gives content of selected element: ',
        e.target.textContent
      )
    })
}

// Mouse Enter
{
    const button = document.querySelector('button')
    button.addEventListener('mouseenter', e => {
      console.log('e gives the event listener object:', e)
      console.log('e.target gives the selected element: ', e.target)
      console.log(
        'e.target.textContent gives content of selected element: ',
        e.target.textContent
      )
    })
}

// Getting value from an input element

// input value
{
    const mass = document.querySelector('#mass')
    const height = document.querySelector('#height')
    const button = document.querySelector('button')

    let bmi
    button.addEventListener('click', () => {
      bmi = mass.value / height.value ** 2
      alert(`your bmi is ${bmi.toFixed(2)}`)
      console.log(bmi)
    })
}

// input event and change
{
    const input = document.querySelector('input')
    const p = document.querySelector('p')

    input.addEventListener('input', e => {
      p.textContent = e.target.value
    })
}

// blur event
{
    const input = document.querySelector('input')
    const p = document.querySelector('p')

    input.addEventListener('blur', (e) => {
        p.textContent = 'Field is required'
        p.style.color = 'red'

    })
}

// keypress, keydown, keyup
{
    document.body.addEventListener('keypress', e => {
        alert(e.keyCode)
      })
}