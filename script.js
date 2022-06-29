const newEl = (el) => document.createElement(el);

const createNav = (parent) => {
  const elNav = newEl("nav");
  const elUserName = newEl("h2");

  elNav.className = "navbar";
  elUserName.className = "logo";

  elUserName.textContent = userName;

  elNav.appendChild(elUserName);
  parent.appendChild(elNav);
};

const userName = prompt("Inserisci nome utente");
const body = document.querySelector("body");
localStorage.setItem("username", userName);

try {
  if (localStorage.getItem("username")) {
    createNav(body);
  } else throw Error("Lo username non è stato memorizzato in Local Storage");
} catch (error) {
  console.error(error);

  localStorage.setItem("username", userName);
}
