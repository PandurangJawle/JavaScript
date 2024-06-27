

// function changeText() {
//     let fpara =document.getElementById('fpara');
//     fpara.textContent="how are you"   
// }

// let fpara=document.getElementById('fpara');

// fpara.addEventListener('click',changeText);




// //defoult prevent

// let anchorElement =document.getElementById('fanchor')

// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent="Click done"
// })



// let paras=document.querySelectorAll('p')
function alertPara() {
        alert("You are Clicked on para: " + event.target.textContent )
}
// for (let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',alertPara)
    
// }


let myDiv=document.getElementById('wrapper');
document.addEventListener('click',alertPara);