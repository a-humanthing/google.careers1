let word=["Create","Design","Code","Build"]
let colour=["#34A853","#F9AB00","#D93025","#1A73E8"]
let jsimage=["img/1.png","https://careers.google.com/jobs/dist/img/assets/hero-04_2x.b2bd827dc40d5593846a2bc1a8b5ad4e.png"]
let counterImg=0;
let counter = 0;
let elem = document.getElementById("changingWord");
let img=document.getElementById("jsImage");
let inst = setInterval(change, 3000)

function change() {
    img.src= jsimage[counterImg];
   elem.innerHTML = word[counter];
  elem.style.color=colour[counter];
  counter++;
  counterImg++;
  if(counterImg>=jsimage.length){
    counterImg=0;
  }
  if (counter >= word.length) {
    counter = 0;
     //clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

