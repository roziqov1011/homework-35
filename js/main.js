let elForm = document.getElementById('form');
let farangit = elForm.querySelector("#farangit");
let celcius = elForm.querySelector("#celsi");
let elFormula = document.getElementById('formula');

farangit.addEventListener("input", ()=>{
    celcius.value= (+farangit.value.trim()-32)*5/9;
    elFormula.textContent = '(' + farangit.value + '°F  -32)*5/9 ='+ celcius.value;
})
celcius.addEventListener("input", ()=>{
    farangit.value= +celcius.value.trim()*9/5 + 32;
    elFormula.textContent = celcius.value + '°C*9/5 + 32 ='+ farangit.value;
    
})