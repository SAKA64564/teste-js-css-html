//DOM
const buttons = [...document.querySelectorAll(".bouton")];
const listKeycode = buttons.map(button => button.dataset.key);
const ecran = document.querySelector(".ecran");

document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
});

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
});

const calculer = (valeur) => {
  if (listKeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        const calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        const indexKeycode = listKeycode.indexOf(valeur);
        const button = buttons[indexKeycode];
        ecran.textContent += button.innerHTML
    }
  }
};

window.addEventListener('error',(e) =>{
  alert('une erreur est survenue dans votre calcule : ' +e.message )
});

