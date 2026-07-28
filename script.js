//your JS code here. If required.
	let cells=document.querySelectorAll('.cell');
function game(){
let player1=document.querySelector('#player1').value;
let player2=document.querySelector('#player2').value;
	 if(player1=="" || player2==""){
		  alert('missing name');
		 return;
      }
	document.getElementById("form-page").style.display = "none";
	document.getElementById("submit").style.display = "none";
	document.querySelector(".game-board").style.display = "block";
	
	let turn=document.querySelector('.message')
	turn.innerText=`${player1}, you're up`

	   for(let i=0;i<cells.length;i++){
		   cells[i].addEventListener('click',play);
      }	 
}

	let currentPlayer="X";
    let gameOver = false;
function play(event){
	
	if(gameOver){
    return;
     }
	let turn=document.querySelector('.message')
	let player1=document.querySelector('#player1').value;
    let player2=document.querySelector('#player2').value;
	let cell=event.target;
	
	  if(cell.innerText!==""){
		  return;
       }
	    turn.innerText=`${player1}, you're up`;
	   cell.innerText=currentPlayer;
	    checkWinner();
	
    if(gameOver){
        return;
    }
	   
	cell.style='align-items:center';
	 
	    if(currentPlayer==='X'){
			 turn.innerText=`${player2}, you're up`;
			currentPlayer="O";
			 
         }
	     else{
			 turn.innerText=`${player1}, you're up`;
			 currentPlayer="X";
            }
  }
function checkWinner() {
	let turn = document.querySelector(".message");
	 let player1 = document.querySelector("#player1").value;
    let player2 = document.querySelector("#player2").value;
    if(
        cells[0].innerText==='X' && cells[1].innerText==='X' && cells[2].innerText==='X' ||
        cells[3].innerText==='X' && cells[4].innerText==='X' && cells[5].innerText==='X' ||
        cells[6].innerText==='X' && cells[7].innerText==='X' && cells[8].innerText==='X' ||
        cells[0].innerText==='X' && cells[4].innerText==='X' && cells[8].innerText==='X' ||
        cells[2].innerText==='X' && cells[4].innerText==='X' && cells[6].innerText==='X' ||
        cells[0].innerText==='X' && cells[3].innerText==='X' && cells[6].innerText==='X' ||
        cells[1].innerText==='X' && cells[4].innerText==='X' && cells[7].innerText==='X' ||
        cells[2].innerText==='X' && cells[5].innerText==='X' && cells[8].innerText==='X'
    )
    {

        if(cells[0].innerText==='X' && cells[1].innerText==='X' && cells[2].innerText==='X'){
            cells[0].classList.add("winner");
            cells[1].classList.add("winner");
            cells[2].classList.add("winner");
			gameOver=true;
			turn.innerText = `${player1} congratulations you won!`;
			return;
        }

        else if(cells[3].innerText==='X' && cells[4].innerText==='X' && cells[5].innerText==='X'){
            cells[3].classList.add("winner");
            cells[4].classList.add("winner");
            cells[5].classList.add("winner");
			gameOver=true;
			
			turn.innerText = `${player1} congratulations you won!`;
			return;
        }

        else if(cells[6].innerText==='X' && cells[7].innerText==='X' && cells[8].innerText==='X'){
            cells[6].classList.add("winner");
            cells[7].classList.add("winner");
            cells[8].classList.add("winner");
			gameOver=true;
			
			turn.innerText = `${player1} congratulations you won!`;
			return;
        }

        else if(cells[0].innerText==='X' && cells[4].innerText==='X' && cells[8].innerText==='X'){
            cells[0].classList.add("winner");
            cells[4].classList.add("winner");
            cells[8].classList.add("winner");
			gameOver=true;
			
			turn.innerText = `${player1} congratulations you won!`;
			return;
        }

        else if(cells[2].innerText==='X' && cells[4].innerText==='X' && cells[6].innerText==='X'){
            cells[2].classList.add("winner");
            cells[4].classList.add("winner");
            cells[6].classList.add("winner");
			gameOver=true;
			
			turn.innerText = `${player1} congratulations you won!`;
			return;
        }

        else if(cells[0].innerText==='X' && cells[3].innerText==='X' && cells[6].innerText==='X'){
            cells[0].classList.add("winner");
            cells[3].classList.add("winner");
            cells[6].classList.add("winner");
			gameOver=true;
			
			turn.innerText = `${player1} congratulations you won!`;
			return;
        }

        else if(cells[1].innerText==='X' && cells[4].innerText==='X' && cells[7].innerText==='X'){
            cells[1].classList.add("winner");
            cells[4].classList.add("winner");
            cells[7].classList.add("winner");
			gameOver=true;
			
			turn.innerText = `${player1} congratulations you won!`;
			return;
        }

        else if(cells[2].innerText==='X' && cells[5].innerText==='X' && cells[8].innerText==='X'){
            cells[2].classList.add("winner");
            cells[5].classList.add("winner");
            cells[8].classList.add("winner");
			gameOver=true;
			
			turn.innerText = `${player1} congratulations you won!`;
			return;
        }

    }


    else if(
        cells[0].innerText==='O' && cells[1].innerText==='O' && cells[2].innerText==='O' ||
        cells[3].innerText==='O' && cells[4].innerText==='O' && cells[5].innerText==='O' ||
        cells[6].innerText==='O' && cells[7].innerText==='O' && cells[8].innerText==='O' ||
        cells[0].innerText==='O' && cells[4].innerText==='O' && cells[8].innerText==='O' ||
        cells[2].innerText==='O' && cells[4].innerText==='O' && cells[6].innerText==='O' ||
        cells[0].innerText==='O' && cells[3].innerText==='O' && cells[6].innerText==='O' ||
        cells[1].innerText==='O' && cells[4].innerText==='O' && cells[7].innerText==='O' ||
        cells[2].innerText==='O' && cells[5].innerText==='O' && cells[8].innerText==='O'
    )
    {

        if(cells[0].innerText==='O' && cells[1].innerText==='O' && cells[2].innerText==='O'){
            cells[0].classList.add("winner");
            cells[1].classList.add("winner");
            cells[2].classList.add("winner");
			gameOver=true;
			turn.innerText = `${player2} congratulations you won!`;
			return;
        }

        else if(cells[3].innerText==='O' && cells[4].innerText==='O' && cells[5].innerText==='O'){
            cells[3].classList.add("winner");
            cells[4].classList.add("winner");
            cells[5].classList.add("winner");
			gameOver=true;
			turn.innerText = `${player2} congratulations you won!`;
			return;
			
        }

        else if(cells[6].innerText==='O' && cells[7].innerText==='O' && cells[8].innerText==='O'){
            cells[6].classList.add("winner");
            cells[7].classList.add("winner");
            cells[8].classList.add("winner");
			gameOver=true;
			turn.innerText = `${player2} congratulations you won!`;
			return;
        }

        else if(cells[0].innerText==='O' && cells[4].innerText==='O' && cells[8].innerText==='O'){
            cells[0].classList.add("winner");
            cells[4].classList.add("winner");
            cells[8].classList.add("winner");
			gameOver=true;
			turn.innerText = `${player2} congratulations you won!`;
			return;
        }

        else if(cells[2].innerText==='O' && cells[4].innerText==='O' && cells[6].innerText==='O'){
            cells[2].classList.add("winner");
            cells[4].classList.add("winner");
            cells[6].classList.add("winner");
			gameOver=true;
			turn.innerText = `${player2} congratulations you won!`;
			return;
        }

        else if(cells[0].innerText==='O' && cells[3].innerText==='O' && cells[6].innerText==='O'){
            cells[0].classList.add("winner");
            cells[3].classList.add("winner");
            cells[6].classList.add("winner");
			gameOver=true;
			turn.innerText = `${player2} congratulations you won!`;
			return;
        }

        else if(cells[1].innerText==='O' && cells[4].innerText==='O' && cells[7].innerText==='O'){
            cells[1].classList.add("winner");
            cells[4].classList.add("winner");
            cells[7].classList.add("winner");
			gameOver=true;
			turn.innerText = `${player2} congratulations you won!`;
			return;
        }

        else if(cells[2].innerText==='O' && cells[5].innerText==='O' && cells[8].innerText==='O'){
            cells[2].classList.add("winner");
            cells[5].classList.add("winner");
            cells[8].classList.add("winner");
			gameOver=true;
			turn.innerText = `${player2} congratulations you won!`;
			return;
        }
		
    }

}

