var navt = document.querySelectorAll('.nav-menu a') ;
for(var i =0;i<navt.length;i++){
    navt[i].addEventListener('click',function(event){
        event.preventDefault() ;
        var tsi = this.textContent.trim().toLowerCase();
        var ts = document.getElementById(tsi) ;
        console.log(ts) ;
var interval = setInterval(function(){
    var tsc =ts.getBoundingClientRect() ;
    if(tsc.top<=0){
        clearInterval(interval); 
        return  ;
    }
  window.scrollBy(0,50);   
},50);
});
   
}
