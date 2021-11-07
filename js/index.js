"use strict";

let counterQuestions=0;
let answersResults=[];
let inputQuestions=document.getElementById('floatingQuestions');
let inputLanguage=document.getElementById('floatingLanguage');
let inputDifficulty=document.getElementById('floatingLevel');

document.body.onclick = e => {handleOrderQuestion(e)}

document.getElementById('divPagination').onclick = e => {handleDivPagination(e)}

btnInitQuestions.onclick=e=>{ // 1. Enviar opciones elegidas
    
    e.preventDefault();
    
    if(inputLanguage.value!="" && inputDifficulty.value!="" && inputQuestions.value!=""){
        
        let arrayQuestions= createArrayQuestions(inputLanguage.value,parseInt(inputQuestions.value),inputDifficulty.value);
        
        arrayQuestions.forEach(question => {
            
            counterQuestions++;
            
            switch (question.type) {
                case "radio":
                    createRadio(question);
                    break;
                case "code":
                    createCode(question);
                    break;
                case "checkbox":
                    createCheckBox(question);
                    break;
                case "order":
                    createOrder(question);  
                    break;
                case "boolean":
                    createBoolean(question)
                    break;
                default:
                    break;
            }
        });
        
        createPagination(); // buildPageNavigator(questionCount);
        
        addEndButton();
        
        showContainer('question-1');
        
    }else{

        showValidation();

    } 

}

const createArrayQuestions = (language,questions,difficulty) => { // 1.1. Crear objeto con informacion de las preguntas, aqui se podria llamar a una api
    
    let arrayQuestions=[];
    
    switch (language) {
        case "html":
            for (let i = 0; i < questions; i++) {
                arrayQuestions[i] = htmlQuestions[i];
            }
            break;
        case "css":
            for (let i = 0; i < questions; i++) {
                arrayQuestions[i] = cssQuestions[i];
            }
            break;
        case "js":
            for (let i = 0; i < questions; i++) {
                arrayQuestions[i] = jsQuestions[i];
            }
            break;
        default:
            break;
    }

    return arrayQuestions;

}

const createRadio = ({question,body,type}) =>{ // 1.1.2. Crear y agregar al DOM nodo con cada pregunta
    
    let divRadio=createDiv(question,type,"solo podes elegir una opcion");
    let questionCount=1;
    
    for (const option in body) {   
        divRadio.innerHTML+=`<div class="form-check">
                                <input id="input-${counterQuestions}-${questionCount}" class="form-check-input mb-3" type="radio" name="radio-q-${counterQuestions}" data-resp="${body[option].value}">
                                <label class="form-check-label" for="input-${counterQuestions}-${questionCount++}">${body[option].text}</label>
                            </div>`;
        questionCount++;
    }
    
    divRadio.innerHTML+=`</div>`;
    document.getElementById('questionsContainer').appendChild(divRadio);

}

const createCode = ({question,body,type}) =>{ // 1.1.2. Crear y agregar al DOM nodo con cada pregunta
    
    let divCode=createDiv(question,type,"rellena el codigo correctamente");
    let questionCount=1;
    let code="<code>";
    
    for (const option in body) {   
        code+=`${body[option].text}`;
        if(body[option].value) code+=`<input id="input-${counterQuestions}-${questionCount}" class="form-inline mx-1" data-resp="${body[option].value}">`;
        questionCount++;
    }
    
    divCode.innerHTML+=code;
    divCode.innerHTML+=`</code></div>`;
    document.getElementById('questionsContainer').appendChild(divCode);

}

const createCheckBox = ({question,body,type}) =>{ // 1.1.2. Crear y agregar al DOM nodo con cada pregunta
    
    let divCheck=createDiv(question,type,"elegi todas las opciones correctas");
    let questionCount=1;
    
    for (const option in body) {   
        divCheck.innerHTML+=`<div class="form-check">
                                <input id="input-${counterQuestions}-${questionCount}" class="form-check-input mb-3" type="checkbox" name="check-q-${counterQuestions}" data-resp="${body[option].value}">
                                <label class="form-check-label" for="input-${counterQuestions}-${questionCount++}">${body[option].text}</label>
                            </div>`;
        questionCount++;
    }
    
    divCheck.innerHTML+=`</div>`;
    document.getElementById('questionsContainer').appendChild(divCheck);

}

const createOrder = ({question,body,type}) =>{ // 1.1.2. Crear y agregar al DOM nodo con cada pregunta
    
    let divOrder=createDiv(question,type,"ordena las opciones");
    let questionCount=1;
    
    for (const option in body) {   
        divOrder.innerHTML+=`<div class="flex">
                                <button id="btn-${counterQuestions}-${questionCount++}" class="m-1 btn btn-primary ordenamiento" name="check-q-${counterQuestions}" data-resp="${body[option].value}">0</button>
                                <p class="m-0 aling-self-center">${body[option].text}</p>
                            </div>`;
    questionCount++;
    }
    
    document.getElementById('questionsContainer').appendChild(divOrder);

}

const createBoolean = ({question,body,type}) =>{ // 1.1.2. Crear y agregar al DOM nodo con cada pregunta
    
    let divBoolean=createDiv(question,type,"elegi entre verdadero y falso");
    
    divBoolean.innerHTML+=`<div class="form-floating m-2">
                                <select class="form-select" id="input-${counterQuestions}-1" aria-label="Floating label select example" name="check-q-${counterQuestions}" data-resp="${body[0].value}">
                                    <option selected>Elige una opcion...</option>
                                    <option value="true">Verdadero</option>
                                    <option value="false">Falso</option>
                                </select>
                                <label for="input-${counterQuestions}-1">Valor de verdad</label>
                            </div>`;

    document.getElementById('questionsContainer').appendChild(divBoolean);

}

const createDiv = (question,type,instructionText) => { // 1.1.3. Crear div generico para cada pregunta

    let div=document.createElement('div');
    div.classList.add('contenedor-pregunta');        
    div.classList.add('border');        
    div.classList.add('border-3');        
    div.classList.add('border-primary');        
    div.classList.add('rounded-3');        
    div.classList.add('m-2');        
    div.classList.add('p-2');
    div.dataset.type=type;
    div.id=`question-${counterQuestions}`;
    div.innerHTML+=`<h2 class="text-center">${question}</h2>
                         <h3 class="text-center mb-2">(${instructionText})</h3>`;
    return div;
}

const createPagination = () => { // 1.1.4. Crear y agregar paginacion para las preguntas
    
    let divPagination=document.createElement('div');
    divPagination.classList.add('flex');
    divPagination.classList.add('m-1');
    
    for (let i = 1; i <= counterQuestions; i++) {
        divPagination.innerHTML+=`<input id="pag-${i}" class="btn btn-primary grow-1 mx-1 px-1" type="button" value="${i}">`; 
    
    }
    document.getElementById('divPagination').appendChild(divPagination);
}

const addEndButton = () => { // 1.1.5. Agregar boton finalizar
    
    let divEndButton=document.createElement('div');
    divEndButton.id='divBtnFinalizar';
    divEndButton.classList.add('d-grid');
    divEndButton.classList.add('m-2');
    divEndButton.innerHTML='<input id="btnFinalizar" class="btn btn-primary mt-1" type="button" value="Finalizar">';
    document.getElementById('divPagination').appendChild(divEndButton);    
}

const showValidation = () => { // 1.2 Mostrar msj si algun input del formulario esta vacio
    
    let msjValidation;

    if(inputLanguage.value==""){
        msjValidation="DEBES ELEGIR UN LENGUAJE";
    }else if(inputDifficulty.value==""){
        msjValidation="DEBES ELEGIR LA DIFICULTAD";
    }else if(inputQuestions.value==""){
        msjValidation="DEBES ELEGIR EL NUMERO DE PREGUNTAS";
    }

    Swal.fire({
        html:`<p>${msjValidation}</p>`,
        toast: 'true',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000
    });

}

const handleDivPagination = e => { // 2.1. Manejo de eventos botonera paginas/finalizar/volver
    e.preventDefault();
    if(e.target.classList.contains('mx-1'))
        showContainer("question-"+e.target.value)
    if(e.target.id=="btnFinalizar")
        finalizeQuestions();
    if(e.target.id=="btnVolver")
        resetApp();
}

const finalizeQuestions = () => { // 2.1.1. Manejo respuestas
    
    let questionsElements = Array.from(document.getElementsByClassName('contenedor-pregunta'));
    
    for (const element of questionsElements) {
        let success;
        switch (element.dataset.type) {
            case "radio":
                success=reviewQuestionRadio(element);
                break;
            case "checkbox":
                success=reviewQuestionCheck(element);
                break;
            case "code":
                success=reviewQuestionCode(element);
                break;
            case "boolean":
                success=reviewQuestionBoolean(element);
                break;
            case "order":
                success=reviewQuestionOrder(element);
                break;   
            default:
                break;
        }
        answersResults=success?[...answersResults,"Correcta"]:[...answersResults,"Incorrecta" ];
    }

    showResults(answersResults);    

}

const reviewQuestionRadio = (questionElement) => { // 2.1.2. Chequear cada tipo de pregunta
    
    let success=false;
    let inputs = Array.from(questionElement.getElementsByTagName('input'));
    let labels = Array.from(questionElement.getElementsByTagName('label'));
    
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].checked && inputs[i].checked.toString()==inputs[i].dataset.resp) success=true;
        labels[i].innerHTML+=inputs[i].dataset.resp=='true'?'<span class="texto-azul">&nbsp;&frasl;&frasl;&nbsp;Correcta</span>':'<span class="texto-rojo">&nbsp;&frasl;&frasl;&nbsp;Incorrecta</span>';
    }
    
    return success;

}

const reviewQuestionCheck = (questionElement) => { // 2.1.2. Chequear cada tipo de pregunta
    
    let success=true;
    let inputs = Array.from(questionElement.getElementsByTagName('input'));
    let labels = Array.from(questionElement.getElementsByTagName('label'));
    
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].checked.toString()!=inputs[i].dataset.resp) success=false;
        labels[i].innerHTML+=inputs[i].dataset.resp=='true'?'<span class="texto-azul">&nbsp;&frasl;&frasl;&nbsp;Correcta</span>':'<span class="texto-rojo">&nbsp;&frasl;&frasl;&nbsp;Incorrecta</span>';
    
    }
    return success;

}

const reviewQuestionCode = (questionElement) => { // 2.1.2. Chequear cada tipo de pregunta
    
    let success=true;
    let p=document.createElement('p');
    p.classList.add('texto-azul');
    let userResp=[];
    let inputs = Array.from(questionElement.getElementsByTagName('input'));
    
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value!=inputs[i].dataset.resp) success=false;
        p.innerHTML+=`&nbsp;&nbsp;&frasl;&frasl;&nbsp;${inputs[i].dataset.resp}`;
        userResp[i]=inputs[i].value;
    }
    
    questionElement.appendChild(p);
    
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value=userResp[i];
    }
    
    return success;

}

const reviewQuestionBoolean = (questionElement) => { // 2.1.2. Chequear cada tipo de pregunta
    
    let success=false;
    let selects = Array.from(questionElement.getElementsByTagName('select'));
    
    for (let i = 0; i < selects.length; i++) {
        if(selects[i].value ==selects[i].dataset.resp) success=true;
        questionElement.innerHTML+=selects[i].dataset.resp=='true'?'<p class="texto-azul">&nbsp;&frasl;&frasl;&nbsp;Verdadero</p>':'<p class="texto-azul">&nbsp;&frasl;&frasl;&nbsp;Falso</p>';
    }
    
    return success;

}

const reviewQuestionOrder = (questionElement) => { // 2.1.2. Chequear cada tipo de pregunta
    
    let success=true;
    let buttons = Array.from(questionElement.getElementsByTagName('button'));
    let ps = Array.from(questionElement.getElementsByTagName('p'));
    
    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].innerHTML!=buttons[i].dataset.resp) success=false;
        ps[i].innerHTML+=`<span class="texto-azul">&nbsp;&frasl;&frasl;&nbsp;${buttons[i].dataset.resp}</span>`;
    
    }
    
    return success;

}

const showResults = answersResults => { // 2.1.4. Mostrar modal con resultados
    
    let innerResult="<h1>Resultado</h1>";
    
    for (let i = 0; i < answersResults.length; i++) {
        innerResult+= `<p>PREGUNTA&nbsp;${i+1}: ${answersResults[i]}</p>`
    }
    
    Swal.fire({
        html:innerResult,
        showCloseButton: true,
        confirmButtonColor: "#5c0"
    });
    
    divBtnFinalizar.innerHTML='<input id="btnVolver" class="btn btn-primary mt-1" type="button" value="Volver al inicio">';

}

const resetApp = () => { // 2.2. Volver app a estado inicial
    
    document.getElementById('questionsContainer').innerHTML="";
    document.getElementById('divPagination').innerHTML="";
    counterQuestions=0;
    answersResults=[];
    
    showContainer('mainContainer');

}

let handleOrderQuestion = e=>{ // 2.*. Manejo de las preguntas con ordenamiento 
    
    if(e.target.classList.contains('ordenamiento')){  
        
        let counter=0;
        let btnOrd =Array.from(e.target.parentElement.parentElement.getElementsByClassName('ordenamiento'));
        
        btnOrd.forEach(btn=>{
            if(btn.innerText>counter)
                counter=btn.innerText
        });
        
        if(counter==0 || counter>0 && counter!=e.target.innerText){
            e.target.innerText=++counter;
        }else if(counter>0 && counter==e.target.innerText){
            e.target.innerText=0;
            counter--;
            flag=1;
        }

        btnOrd.forEach(btn=>{
            if(btn.innerText<counter && btn.innerText>0)
                btn.classList.add('disabled');
            if(btn.innerText==counter) btn.classList.remove('disabled');
        });

    }

}

const showContainer = ver =>{ // ** Mostrar/ocultar "Interfaces"(elementos del DOM)
    
    for (let i = 1; i <= counterQuestions; i++) {
        document.getElementById("question-"+i).classList.add('d-none');    
    }
    
    mainContainer.classList.add("d-none");
    document.getElementById(ver).classList.remove("d-none");

}

