const inpVal = document.querySelector('.input-value');
const inpBtn = document.querySelector('.input-btn');
const list = document.querySelector('.list-container');

pend()

inpBtn.addEventListener('click', e =>{
    e.preventDefault();
    showValue();
    
    inpVal.value = '';
    inpVal.focus();
});

list.addEventListener('click', deleteTodo )



function showValue(){
    if(inpVal.value === ''){
        return
    }
    sinPen.remove();
    const valor = inpVal.value;
    var tarea = document.createElement('div')
    tarea.classList.add('pendent');

    tarea.innerHTML = 
    `<span> ${valor} </span>
    <div class="botones">
            <button class="complete"><i class="fas fa-check-circle"></i></button>
            <button class="trash"><i class="fas fa-trash-alt"></i></button>
        </div>`;
    list.appendChild(tarea); 
}

function deleteTodo(e) {
    const item = e.target;
  
    if (item.classList[0] === "trash") {
        const trash = item.parentElement.parentElement;
            trash.remove();
    }

    if (item.classList[0] === "complete") {
        const completado = item.parentElement.parentElement;
        completado.classList.toggle("completed");
    }
    pend()
  }

function pend(){
    sinPen = document.createElement('div');
        sinPen.innerHTML=
        `<div class="pendientes">
            <span>Sin Tareas Pendientes  😍</span>
        </div>`
    
        if(list.innerHTML === ""){
            list.appendChild(sinPen);
        }
    }
    