const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth-10;
canvas.height = 450;

let context = canvas.getContext("2d");
let startBackgroundColor = "white";
context.fillStyle = startBackgroundColor;
context.fillRect(0, 0, canvas.width, canvas.height)

//working with pen writing like an array
let restore_draw = [];
let index = -1;

//coding pen and his utilities
let draw_color = "black";
let draw_width = "5";
let is_drawing = false;
canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
    is_drawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft,event.clientY - canvas.offsetTop);
    event.preventDefault();
}
function draw(event) {
    if(is_drawing){
        context.lineTo(event.clientX - canvas.offsetLeft,event.clientY - canvas.offsetTop);
        context.strokeStyle = draw_color;
        context.lineWidth = draw_width;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
    }
    event.preventDefault();
}
function stop(event) {
    if(is_drawing){
        context.stroke();
        context.closePath();
        is_drawing = false;
    }
    event.preventDefault();

    if(event.type != 'mouseout'){

        restore_draw.push(context.getImageData(0,0,canvas.width,canvas.height));
        index+=1;
    }
}


//function that change the pencil color 
//depends on which elements were clicked on the html color field
const btn_black = document.getElementsByClassName("color-field").item(0);
const btn_red = document.getElementsByClassName("color-field").item(1);
const btn_blue = document.getElementsByClassName("color-field").item(2);
btn_black.addEventListener("click",event => {
    draw_color = "black";
})
btn_red.addEventListener("click",event => {
    draw_color = "red";
})
btn_blue.addEventListener("click",event => {
    draw_color = "blue";
})

//functions for buttons UNDO and CLEAR
function clearCanvas(){
    context.fillStyle = startBackgroundColor;
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillRect(0,0,canvas.width,canvas.height);
}
function undoCanvas(){
    if(index<=0){
        clearCanvas();
    }else{
        index -=1;
        restore_draw.pop();
        context.putImageData(restore_draw[index],0,0);
    }
}


document.getElementById('save').addEventListener('click', function () {
    // retrieve the canvas data
    var canvasContents = canvas.toDataURL(); // a data URL of the current canvas image
    var data = { image: canvasContents, date: Date.now() };
    var string = JSON.stringify(data);
  
    // create a blob object representing the data as a JSON string
    var file = new Blob([string], {
      type: 'application/json'
    });
    
    // trigger a click event on an <a> tag to open the file explorer
    var a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  download.addEventListener('click', function (e) {
    const link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  });

  function uploadImage() {
    var canvas = document.getElementById("canvas");
   
    var imageObj = new Image();
    imageObj.src = document.getElementById("load").src
   
    imageObj.onload = function () {
     canvas.drawImage(imageObj, 0, 0);
    };
   }

const arrayHeight = document.getElementsByClassName('height-nav');
const navHeight = document.getElementsByTagName('nav')[0].clientHeight;

for (let obj of arrayHeight)
    obj.style.height = navHeight + 'px';

function abrirMenu() {
    const botoesMenu = document.getElementById('botoesMenu');

    botoesMenu.className = botoesMenu.className.includes('responsivo') ? '' : 'responsivo'
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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