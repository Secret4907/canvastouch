const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let cor = "#eeff00";
const btnCor = document.getElementById("cor");
const txtTraco = document.getElementById("tam")
btnCor.value = cor;

let traco = 4;
txtTraco.value = traco//const larguraTela = innerWidth;

const larguraTela = screen.width;
//const tamanhoTela = innerHeight;

const tamanhoTela = screen.height;
console.log(larguraTela, tamanhoTela);

canvas.width = larguraTela - 40;
canvas.height = tamanhoTela - 300;

let eventype;
let pX, pY;
let upX, upY;
// canvas.addEventListener("mousedown", chance_event);
// canvas.addEventListener("mouseleave", chance_event);
// canvas.addEventListener("mouseup", chance_event);
// canvas.addEventListener("mousemove", paint)
canvas.addEventListener("touchmove", paint);
canvas.addEventListener("touchstart", function (e) {
    console.log(e)
    pY = e.touches[0].clientY - (canvas.clientTop + canvas.offsetTop)
    pX = e.touches[0].clientX - (canvas.clientLeft + canvas.offsetLeft)
})
function paint(e) {
    const offsetY = e.touches[0].clientY - (canvas.clientTop + canvas.offsetTop)
    const offsetX = e.touches[0].clientX - (canvas.clientLeft + canvas.offsetLeft)
    //console.log(e);
    upX = pX
    upY = pY

    pX = offsetX
    pY = offsetY
     desenhar ()
    //console.log("pX:", pX, "| pY:", pY); 
    //console.log("upX:", upX, "| upY:", upY);

}
// function chance_event(e) {

//     eventype = e.type
//     console.log(eventype)

// }

//desenhar (200,200)
function desenhar() {
    cor = btnCor.value
    ctx.beginPath();
    traco = Number(txtTraco.value)
    ctx.lineWidth = traco;
    ctx.strokeStyle = cor; 
    ctx.moveTo(upX, upY)
    ctx.lineTo(pX, pY)  
    ctx.stroke();
}

function limpar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    txtTraco.value = 4
}