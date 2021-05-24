const body = document.body
const cardHeader = document.querySelector(".card-header")
const cardBody = document.querySelector(".card-body")
const cardTitle = document.querySelector(".card-title")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const circle = document.querySelector(".circle")
const btn = document.querySelectorAll("button");


one.addEventListener("click", () => {
    body.style.backgroundColor = "#3B4664"

    cardHeader.style.backgroundColor = "#181F32"
    cardTitle.style.color = "#fff"
    cardBody.style.backgroundColor = "#252C46"

    circle.style.backgroundColor = "#546186"
    circle.style.right = "4.8rem"
})
two.addEventListener("click", () => {
    body.style.backgroundColor = "#aca8a8"

    cardHeader.style.backgroundColor = "#fff"
    cardTitle.style.color = "#000"
    cardBody.style.backgroundColor = "#D3CDCD"

    circle.style.backgroundColor = "#D3CDCD"
    circle.style.right = "2.2rem"
})

three.addEventListener("click", () => {
    body.style.backgroundColor = "#17062A"

    cardHeader.style.backgroundColor = "#17062A"
    cardTitle.style.color = "#FEE53C"
    cardBody.style.backgroundColor = "#17062A"

    circle.style.backgroundColor = "#17062A"
    circle.style.right = "0"
})


let value = 0
let operation = ""

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
      
        switch (e.target.innerHTML) {
            case "del":
                cardTitle.innerHTML = 0
                return;
            case "+":
                value = parseFloat(cardTitle.innerHTML)
                operation = "+"
                cardTitle.innerHTML = 0
                return;
            case "-":
                value = parseFloat(cardTitle.innerHTML)
                operation = "-"
                cardTitle.innerHTML = 0
                return;
            case "*":
                value = parseFloat(cardTitle.innerHTML)
                operation = "*"
                cardTitle.innerHTML = 0
                return;
            case "/":
                value = parseFloat(cardTitle.innerHTML)
                operation = "/"
                cardTitle.innerHTML = 0
                return;
            case "=":
                equal(operation, parseFloat(cardTitle.innerHTML))
                return;
            case "reset":
                cardTitle.innerHTML = 0
                return;
            default:
                break;
        }
    
        if (cardTitle.innerHTML == 0) {
            if(e.target.innerHTML=="." || e.target.innerHTML=="reset") return
            cardTitle.innerHTML = ""
            cardTitle.append(e.target.innerHTML)
            return
        }
        else {
            cardTitle.append(e.target.innerHTML)
        }
    })
}

function equal(operation, v) {
    let newValue=0
    switch (operation) {
        case "+":
            newValue=value + v
            cardTitle.innerHTML = newValue.toLocaleString("tr-TR")
            break;
        case "-":
            newValue=value - v
            cardTitle.innerHTML = newValue.toLocaleString("tr-TR")
            break;
        case "*":
            newValue=value * v
            cardTitle.innerHTML =  newValue.toLocaleString("tr-TR")
            break;
        case "/":
            newValue=value / v
            cardTitle.innerHTML =  newValue.toLocaleString("tr-TR")
            break;
        default:
            break;
    }
}