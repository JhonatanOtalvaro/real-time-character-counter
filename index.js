const textareaEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter");

const faltantesCounterEl = document.getElementById("faltantes-counter");

textareaEl.addEventListener("keyup", () =>{
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    faltantesCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}