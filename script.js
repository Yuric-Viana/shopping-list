const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')
const trash = document.querySelectorAll('.trash')

function createItemList() {
    const li = document.createElement('li')

    const checkboxWrapper = document.createElement('div')

    const checkImg = document.createElement('div')
    checkImg.classList.add('checkbox-img')
    
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'check'

    const nameItem = document.createElement('label')
    nameItem.textContent = input.value

    const trashImg = document.createElement('img')
    trashImg.src = 'assets/icon-trash.svg'
    trashImg.classList.add('trash')

    checkboxWrapper.append(checkImg)
    checkboxWrapper.append(checkbox)
    checkboxWrapper.append(nameItem)

    li.append(checkboxWrapper)
    li.append(trashImg)

    return li
}

ul.addEventListener('click', (event) => {
    if(event.target.classList.contains('trash')) {
        const li = event.target.closest('li')
        if(li) {
            li.remove()
        }
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    ul.append(createItemList())

    input.value = ''
})
