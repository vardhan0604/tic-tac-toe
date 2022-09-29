const buttons= document.querySelectorAll(".button");
let turn ="X";
const result= document.getElementById("win")

const btn=document.getElementById("bt")
btn.addEventListener("click",function(){
    console.log("inside")
    reset()
})


function changeTurn(){
    turn= turn === "X" ? "O" : "X";
   
}


function reset(){
    turn ="X"
    buttons.forEach(function(e){
        eclick=false;
        e.innerText="";
        
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
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(e =>{
        if(buttons[e[0]].innerText===buttons[e[1]].innerText && buttons[e[0]].innerText==buttons[e[2]].innerText && buttons[e[2]].innerText !=""){
            result.innerText=buttons[e[0]].innerText+" WINS!!"
            result.style.color="green"
            console.log("wins")
            gameover=true
        }
    })
      
}
buttons.forEach(function(e){
    let eclick=false;
    if(!gameover){
    e.addEventListener("click",function(){
        if(eclick==false){
        e.innerText=turn;
        changeTurn()
        document.getElementById("turn").innerText="Turn of "+turn;
        eclick=true;
        checkwin()
    
    }
    })
}
})

