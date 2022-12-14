const mockDB = {
    "perfis": [
      {
        "id": 0,
        "nome": "Fulano",
        "avatar": ""
      },
    ],

  }
  function exibePerfil(id) {

    const preview = document.querySelectorAll('#avatar');
    preview.forEach(x => {
        x.src = buscaImg(id)
    });
    document.querySelector('#nome').innerHTML = buscaNome(id);
  }
function buscaNome(id) {
  if(localStorage.getItem("nome") == null){
    return "Fulano";
  }else{
    return JSON.parse(localStorage.getItem("nome"));
  }
}
function buscaImg(id) {
  if(localStorage.getItem("avatar") == null){
    return "https://www.w3schools.com/w3images/avatar2.png";
  }else{
    return JSON.parse(localStorage.getItem("avatar"));
  }
}

document.body.onload=() =>{
  exibePerfil();
}
const urlParams = new URLSearchParams(location.search);
 let idPerfil = parseInt(urlParams.get('id'))
 exibePerfil (idPerfil)

function previewFile() {
  const preview = document.querySelectorAll("#avatar");
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
    preview.forEach(element => {
      element.src = reader.result
    });
    //localStorage.setItem('avatar', reader.result)
    //adicionar reader.result em mockDB
    mockDB.perfis[0].avatar = reader.result
    localStorage.setItem("avatar",JSON.stringify (mockDB.perfis[0].avatar))
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}



// Editar nome

function editarNome() {
  document.querySelector('#labelnvnm').removeAttribute("hidden")
}

function salvarNome(){
  mockDB.perfis[0].nome = document.querySelector('#nvnm').value;
  localStorage.setItem("nome",JSON.stringify (mockDB.perfis[0].nome));
  document.querySelector('#nome').innerHTML = document.querySelector('#nvnm').value;
}