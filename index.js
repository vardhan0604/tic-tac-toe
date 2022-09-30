const buttons= document.querySelectorAll(".button");
let turn ="X";
const result= document.getElementById("win")

const btn=document.getElementById("bt")

buttons.forEach(function(e){

    e.setAttribute("data-key",false)
 
})

btn.addEventListener("click",function(){
    reset()
})


function changeTurn(){
    turn= turn === "X" ? "O" : "X";
   
}


function reset(){
    turn ="X"
    buttons.forEach(function(e){
        e.setAttribute("data-key",false)
        e.innerText="";
        result.innerText=""
        
    })
    gameover= false
    
}

gameover= false;
function checkwin(){
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e =>{
        if(buttons[e[0]].innerText===buttons[e[1]].innerText && buttons[e[0]].innerText==buttons[e[2]].innerText && buttons[e[2]].innerText !=""){
            result.innerText=buttons[e[0]].innerText+" WINS!!"
            result.style.color="green"
      
            gameover=true
            buttons.forEach(function(e){
            
                e.setAttribute("data-key",true)
             
            })

        }
       
    })
    let count=0;
    buttons.forEach(function(e){
        console.log("check tie ")
        console.log(e.getAttribute("data-key"))
                if(e.getAttribute("data-key")==="true"){
                    count++;
                    console.log(e.getAttribute("data-key"))
                }
             
            })
            if(count=9){
                result.style.color="yellow"
                result.innerText="TIE!!!"
            }
      
}
buttons.forEach(function(e){
    if(!gameover){
    e.addEventListener("click",function(){
        
        if(e.getAttribute("data-key")==="false"){
        e.innerText=turn;
        changeTurn()
        document.getElementById("turn").innerText="Turn of "+turn;
        e.setAttribute("data-key",true)

        checkwin()
    
    }
    })
}
})

