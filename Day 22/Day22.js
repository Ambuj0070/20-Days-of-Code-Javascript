// Manipulating DOM Object

// Creating an element
{
    let title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = 'Creating HTML element DOM Day 2'

    console.log(title)
}

// Creating elements
{
    let title
    for (let i = 0; i < 3; i++) {
        title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '24px'
        title.textContent = i
        console.log(title)
    }
}

// Appending child to a parent element
{
 // creating multiple elements and appending to parent element
 let title
 for (let i = 0; i < 3; i++) {
     title = document.createElement('h1')
     title.className = 'title'
     title.style.fontSize = '24px'
     title.textContent = i
     document.body.appendChild(title)
 }
}

// Removing a child element from a parent node
{
    const ul = document.querySelector('ul')
    const lists = document.querySelectorAll('li')
    for (const list of lists) {
        ul.removeChild(list)

    }
}