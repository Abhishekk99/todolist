const input = document.getElementById('input')
const addbtn = document.getElementById('addbtn')
const ul = document.querySelector('.list ul')

function additem() {
    if (input.value.length > 0) {
        let div = document.createElement('div')
        let btn = document.createElement('button')
        let li = document.createElement('li')
        li.append(document.createTextNode(input.value))
        btn.append(document.createTextNode('X'))
        div.append(li)
        div.append(btn)
        div.classList.toggle('maindiv')
        ul.append(div)
        input.value = ''


        li.addEventListener('click', () => {
            li.classList.toggle('done')
        })

        btn.addEventListener('click', ()=>{
            div.remove()
        })
    }
}

addbtn.addEventListener('click', additem)
input.addEventListener('keyup', (event) => {

    if (event.keyCode === 13) {
        document.getElementById("addbtn").click();
    }
})

// console.log(input.value.length)
// console.log(ul.children.length)