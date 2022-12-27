let value = ""

document.querySelectorAll('button').forEach(item => {
    item.addEventListener("click",(event) => {
        console.log(event.target.innerHTML)
    })
})
