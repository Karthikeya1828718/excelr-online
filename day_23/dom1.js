// accessing element with getElementById()

let heading=document.getElementById('heading');
heading.style.color='red';
console.log(heading);


//accessing element with getElementsByClassName()
let heading2=document.getElementsByClassName('heading2');
for(let e of heading2){
    e.style.color='green';
}

console.log(heading2);

//accessing element with getElementsByTagName()
let heading3=document.getElementsByTagName('h3');
for(let e of heading3){
    e.style.color='blue';
}

//accessing element with querySelector()
let p=document.querySelector('.p1');
p.style.color='red';
//accessing element with queryAllSelector()
let pList=document.querySelectorAll('.p1');
for (let e of pList) {
    e.style.fontSize='40px';
}

//creation of element with createElement()

let pCreate=document.createElement('p');
pCreate.textContent='this is a new paragraph created by using textContent property';

let container=document.querySelector('.container');
container.appendChild(pCreate);
