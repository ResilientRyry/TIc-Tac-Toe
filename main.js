document.querySelectorAll('.square').forEach((el)=>{
  el.addEventListener('click', (el)=>{
    console.log(el.path[0].attributes[0].nodeValue);
  });
});
 const player = {
   move: [],

   moveMade(){
     this.move.push()
   }
 }
