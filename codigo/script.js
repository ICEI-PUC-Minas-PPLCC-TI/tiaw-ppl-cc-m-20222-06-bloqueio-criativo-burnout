const arrayHeight = document.getElementsByClassName('height-nav');
const navHeight = document.getElementsByTagName('nav')[0].clientHeight;

for (let obj of arrayHeight)
    obj.style.height = navHeight + 'px';

function abrirMenu() {
    const botoesMenu = document.getElementById('botoesMenu');

    botoesMenu.className = botoesMenu.className.includes('responsivo') ? '' : 'responsivo'
}
function exibePerfil(id) {
    document.querySelector('#avatar').src = buscaImg(id);
}

function buscaImg(id) {
  if(localStorage.getItem("avatar") == null){
    return "https://www.w3schools.com/w3images/avatar2.png";
  }else{
    return JSON.parse(localStorage.getItem("avatar"));
  }
}
const urlParams = new URLSearchParams(location.search);
let idPerfil = parseInt(urlParams.get('id'))
exibePerfil (idPerfil)