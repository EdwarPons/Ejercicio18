const nombre = "Edwar Frank";
const apellido = "Pons Bessio";

const yo = {
 nombre,
 apellido
};

sessionStorage.setItem("yo", JSON.stringify(yo));
localStorage.setItem("yo", JSON.stringify(yo));

cookieExpiration = new Date();
cookieExpiration.setMinutes(cookieExpiration.getMinutes() + 2);

document.cookie = "yo=" + JSON.stringify(yo) + ";expires=" + cookieExpiration.toUTCString();