console.log("Ah vei... console.log de novo");

//Manipulação de DOM

// capturei o elemento login container 
const loginContainer = document.getElementById("login-container")
console.log(loginContainer);
// alterei a cor de fundo do elemento login-container
loginContainer.style.backgroundColor = "pink";

// Capture o campo de email e mudem a cor da fonte para vermelho
const email = document.getElementById("email");
//mudar a cor da fonte para vermelho (chama pelo o nome da const)
email.style.color = "grey";

email.addEventListener(
    "blur",
    ()=>{
        if(email.value == " "){
            email.style.border = "2px solid red";
            email.parentNode.innerHTML += "preencha o campo de email"
        }
    }
)
const nome = prompt("Digite o seu nome");
alert(`Bom dia, ${nome}`);

