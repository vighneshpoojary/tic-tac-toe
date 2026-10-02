let boxes = document.querySelectorAll(".box");
let  reset = document.querySelector("#reset");
let new_btn = document.querySelector("#new_game");
let new_para = document.querySelector("#msg");
let new_cont = document.querySelector(".msg_container");
let new_btn2 = document.querySelector(".hide")
let turno = true;
let count = 0;
let draw = true;

const winpaterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        
        reset.classList.remove("hide1");
        if(turno){
            box.innerText = "X";
            box.classList.add("white");
            turno = !turno;
        }
        else{
            box.innerText = "O";
            box.classList.add("dark");
            turno = !turno;
        } 
        count++;
        box.disabled = true;
        checkwinner(count);
         
        
    })
 });

const checkwinner = (count) => {
     for( let pattern of winpaterns){
        // console.log("hi");
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
             if((pos1 === pos2) && (pos2 == pos3)){
                 console.log("winner");
                 draw = false;
                //  alert(`${pos1} ,congratualtions you won the match`);
                 show_winner(pos1,count,draw);
        }else if(count == 9){
            show_winner(pos1,count,draw);
        }

    }
}};
const show_winner=(winner,count,draw)=>{
    if (draw == true){
         new_para.innerText = `Drawww Matchhh!!`; 
         new_cont.classList.remove("hide");
         reset.classList.add("hide1");
         new_btn.classList.remove("hide2")
         disablebox();  
    }else{

        new_para.innerText = `congratulation ,winner is ${winner}`;
        new_cont.classList.remove("hide");
        reset.classList.add("hide1");
        new_btn.classList.remove("hide2")
        disablebox();
    }

}
const disablebox = () =>{
   
    for( let i of boxes){
        i.disabled = true;
   
        
}}
const enablebox = () =>{
     reset.classList.remove("hide1");
     new_btn.classList.add("hide2")
     
    for( let box of boxes){
        
        box.disabled = false;
        box.innerText = "";
       box.classList.remove("white", "dark", "old_color");
}}

const resetgame = ()=>{
    turno = true;
    count = 0;

    enablebox();
    new_cont.classList.add("hide");
    draw = true;

}


new_btn.addEventListener(("click"),resetgame);
reset.addEventListener(("click"),resetgame);

// if(reset){
    
//     boxes.forEach((box) => {
//         reset.addEventListener("click", () => {
//               box.disabled = false;
//               box.innerText = "";
//               box.style.backgroundColor = "#F2CC8F";
// })})};

