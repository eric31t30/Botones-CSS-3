const noScrollLinks = document.querySelectorAll('.btn');

noScrollLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});



// btn 17

const btn_17 = document.querySelector('.btn-17');
const btn_bordes = document.querySelector('.btn-17-bordes');

let btn17iluminacion = 0;

btn_bordes.addEventListener('click', ()=> {
    if(btn17iluminacion == 0){
        btn_bordes.style.border = '2px solid rgb(26, 244, 252)';
        btn_bordes.style.boxShadow = '0px 0px 20px rgb(26, 244, 252)';
        btn17iluminacion ++;
    }else if(btn17iluminacion == 1){
        btn_bordes.style.border = '2px solid rgb(252, 26, 26)';
        btn_bordes.style.boxShadow = '0px 0px 20px rgb(252, 26, 26)';
        btn17iluminacion ++;
    }else if(btn17iluminacion == 2){
        btn_bordes.style.border = '2px solid rgb(26, 252, 37)';
        btn_bordes.style.boxShadow = '0px 0px 20px rgb(26, 252, 37)';
        btn17iluminacion ++;
    }
    else if(btn17iluminacion == 3){
        btn_bordes.style.border = '2px solid rgb(245, 204, 20)';
        btn_bordes.style.boxShadow = '0px 0px 20px rgb(245, 204, 20)';
        btn17iluminacion ++;
    }else if(btn17iluminacion == 4){
        btn_bordes.style.border = '2px solid rgb(241, 20, 245)';
        btn_bordes.style.boxShadow = '0px 0px 20px rgb(241, 20, 245)';
        btn17iluminacion = 0;
    }
    
})



// boton 18

const btn_18 = document.querySelector('.btn-18');
const btn_18_daño = document.querySelector('.btn-18-daño');



let vida = 7;

let daño = 1;



btn_18.addEventListener('click', () =>{
    if(vida == 7){
        btn_18.style.backgroundImage = 'url("imagenes/barra\ de\ vida\ 6\ x4.png")';
        vida -= daño;
        btn_18.classList.add('btn-18-animacion')
        removerclase_btn18()
        console.log(vida)
    }else if(vida == 6){
        btn_18.style.backgroundImage = 'url("imagenes/barra\ de\ vida\ 5\ x4.png")';
        btn_18.classList.add('btn-18-animacion')
        removerclase_btn18()
        vida -= daño;
    }else if(vida == 5){
        btn_18.style.backgroundImage = 'url("imagenes/barra\ de\ vida\ 4\ x4.png")';
        btn_18.classList.add('btn-18-animacion')
        removerclase_btn18()
        vida -= daño;
    }else if(vida == 4){
        btn_18.style.backgroundImage = 'url("imagenes/barra\ de\ vida\ 3\ x4.png")';
        btn_18.classList.add('btn-18-animacion')
        removerclase_btn18()
        vida -= daño;
    }else if(vida == 3){
        btn_18.style.backgroundImage = 'url("imagenes/barra\ de\ vida\ 2\ x4.png")';
        btn_18.classList.add('btn-18-animacion')
        removerclase_btn18()
        vida -= daño;
    }else if(vida == 2){
        btn_18.style.backgroundImage = 'url("imagenes/barra\ de\ vida\ 1\ x4.png")';
        btn_18.classList.add('btn-18-animacion')
        removerclase_btn18()
        vida -= daño;
    }else if(vida == 1){
        btn_18.style.backgroundImage = 'url("imagenes/barra\ de\ vida\ 0\ x4.png")';
        btn_18.classList.add('btn-18-animacion')
        removerclase_btn18()
        vida -= daño;
    }else if(vida == 0){
        btn_18.style.backgroundImage = 'url("imagenes/barra\ de\ vida\ \ x4.png")';
        btn_18.classList.add('btn-18-animacion-recup')
        removerclase_btn18()
        vida = 7;
    }
    
    
})
  
function removerclase_btn18() {
    setTimeout(()=>{
        btn_18.classList.remove('btn-18-animacion');
        btn_18.classList.remove('btn-18-animacion-recup');
    },500)
}


btn_18.addEventListener('click', ()=>{
    if(vida == 7){
        btn_18_daño.classList.add('btn-18-daño-animacion');
        btn_18_daño.textContent = '+7';
        btn_18_daño.style.color = 'red';
        removerclase_btn18_daño() 
    }else if(vida !== 7){
        btn_18_daño.classList.add('btn-18-daño-animacion');
        btn_18_daño.textContent = '-1';
        btn_18_daño.style.color = 'white';
        removerclase_btn18_daño() 
    }
})

function removerclase_btn18_daño() {
    setTimeout(()=>{
        btn_18_daño.classList.remove('btn-18-daño-animacion');
    },500)
}


const btn_18_daño_gif = document.querySelector('.btn-18-daño-gif');

btn_18.addEventListener('click', (event) => {
    
    if(vida !==7){
    const posX = event.clientX - btn_18.offsetLeft;
    const posY = event.clientY - btn_18.offsetTop;
  
    btn_18_daño_gif.style.left = `${posX}px`;
    btn_18_daño_gif.style.top = `${posY}px` - 50;
    btn_18_daño_gif.style.display = 'block';
    btn_18_daño_gif.style.backgroundImage = 'url("imagenes/daño.gif")'
    }
    setTimeout(() => {
      btn_18_daño_gif.style.display = 'none';
    }, 300);

    if(vida == 7){
        btn_18_daño_gif.style.backgroundImage = ''
    }
});



// boton 19

const btn_19_cont1 = document.querySelector('.btn-19-cont1')
const btn_19 = document.querySelector('.btn-19')
const btn_19_contenidos1 = document.getElementsByClassName('btn-19-validar1')
const btn_19_contenidos2 = document.getElementsByClassName('btn-19-validar2')



const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      const objetoAncho = entry.contentRect.width;
      
      
      if (objetoAncho >= 220) {
        for (let i = 0; i < btn_19_contenidos1.length; i++) {
            btn_19_contenidos1[i].classList.add('btn-19-activado1');
          }
    
          for (let i = 0; i < btn_19_contenidos2.length; i++) {
            btn_19_contenidos2[i].classList.add('btn-19-activado2');
          }

          
      }
    
    }
  });
  
  btn_19.addEventListener('click', () => {
    for (let i = 0; i < btn_19_contenidos1.length; i++) {
      if (btn_19_contenidos1[i].classList.contains('btn-19-activado1')) {
        btn_19_contenidos1[i].classList.remove('btn-19-activado1');
      }
    }
  
    for (let i = 0; i < btn_19_contenidos2.length; i++) {
      if (btn_19_contenidos2[i].classList.contains('btn-19-activado2')) {
        btn_19_contenidos2[i].classList.remove('btn-19-activado2');
      }
    }
  });
  
  observer.observe(btn_19_cont1);


//   boton 21

const btn_21 =document.querySelector('.btn-21');


btn_21.addEventListener('mousemove', (e)=> {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    btn_21.style.setProperty('--x', x + 'deg');
})



// boton 23

const btn_23 =document.querySelector('.btn-23');
const btn_23_span =document.querySelector('.btn-23-span');
const btn_23_span_2 =document.querySelector('.btn-23-span-2');
const btn_23_icono =document.querySelector('.btn-23-icono');


btn_23.addEventListener('click', ()=>{
    if(!btn_23.classList.contains('btn-23-activado')){
        btn_23.classList.add('btn-23-activado');
        btn_23_span.classList.add('btn-23-span-activado');
        btn_23_span_2.classList.add('btn-23-span-2-activado');
        btn_23_icono.classList.add('btn-23-icono-activado');
        }else{
        removerclase_btn23();
        btn_23.classList.remove('btn-23-activado');
        btn_23_span.classList.remove('btn-23-span-activado');
        btn_23_span_2.classList.remove('btn-23-span-2-activado');
        btn_23_icono.classList.remove('btn-23-icono-activado');
    }
});




function removerclase_btn23() {
    btn_23.classList.remove('btn-23-activado');
    btn_23_icono.classList.remove('btn-23-icono-activado');
    btn_23_span.classList.remove('btn-23-span-activado');
}