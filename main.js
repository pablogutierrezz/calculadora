let result = document.querySelector(".result-total"),
content = document.querySelector(".content"),
number = document.querySelectorAll(".num")
number.forEach(el => {
    el.addEventListener("click",e=>{
        content.innerHTML += el.textContent
    })
});

document.querySelector(".error").addEventListener("click",e=>{
    content.textContent = content.textContent.slice(0, -1)
})
document.querySelector(".igual").addEventListener("click",e=>{
    resultTotal()
})

function resultTotal() {  
        content.innerHTML = eval(content.innerHTML)
    
}