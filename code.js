//pobieram przycisk "button" w HTML. querySelector pobiera TYLKO PIERWSZY przycisk. Kolejne przyciski już nie bedą pobrane. Jeżeli nie znajdzie takiego elementu to zwróci "null"
const btn = document.querySelector("button");
let number = 1;
//Robię funkcję 
const addElement = function(){
    const div = document.createElement("div");
    div.textContent = (number);

    if(number%5==0){
        div.classList.add("circle");
    }
    //pobieram "body" i wmieszczam w nim element
    document.body.appendChild(div);
    //w div dodaję tekst, który będzie w środku
    number++;
    console.log(number);
}   

//robię nasłuchiwanie na zdarzenie "click" w btn i wykonuję funkcję "addElement"
btn.addEventListener("click", addElement);
