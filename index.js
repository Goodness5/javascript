var bg
function dark() {
     a = document.getElementById('t2')
     b = document.getElementById('t3')
     c = document.getElementById('t4')
     x = document.getElementById('body')
     y = document.getElementById('one')
        x.style.backgroundColor="black";
        y.style.backgroundColor="rgb(86, 86, 86)";
        a.style.backgroundColor="rgb(86, 86, 86)";
        b.style.backgroundColor="rgb(86, 86, 86)";
        c.style.backgroundColor="rgb(86, 86, 86)";
        y.style.color="white";
        a.style.color="white";
        b.style.color="white";
        c.style.color="white";
        bg = true;
        return x  
    }
    function light() {
        location.reload();
        a = document.getElementById('t2')
        b = document.getElementById('t3')
        c = document.getElementById('t4')
        x = document.getElementById('body')
        y = document.getElementById('one')
           x.style.backgroundColor="white";
           x.style.color="white";
           y.style.backgroundColor="";
           y.style.color="";
           bg = false;
           return x  
       }
function func() {
    bg ? light() : dark();
    if (location.reload==true) {
        return bg
    }
}



function book() {
    var x = document.getElementById('form')
    x.style.display="flex"    
}



let parentt =document.querySelectorAll('.one #check')
parentt.forEach(items => {
    items.addEventListener("click",()=>{
         
    if (items.checked==true){
        time = document.querySelectorAll('#time').value
       console.log(time);
    }
        
    })
});
