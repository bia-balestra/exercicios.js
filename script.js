const square = document.getElementsByClassName('square')[0]
square.addEventListener('click', (e) => {
    e.target.style.height = '600px'
    e.target.style.width = '600px'
    e.target.style['margin-left'] = '300px'
    e.target.style['border-radius'] = '100%'
})

square.addEventListener('mouseout', (e) => {
    e.target.style['background-color'] = 'blue'
})

square.addEventListener('mouseover', (e) => {
    e.target.style['background-color'] = 'red'
})