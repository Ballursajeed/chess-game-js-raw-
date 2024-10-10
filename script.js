
const playButton = document.getElementById('playBtn');
const chessBoard = document.getElementById('chessBoarsd');
const frontDiv = document.getElementById('frontPage');

playButton.addEventListener('click',() => {
  frontDiv.style.display = 'none';
  chessBoard.style.display = 'flex';
  const board = document.getElementById('board');

 

  const initialPostionOfTheBoard = () => {

    for (let i = 1; i < 9; i++) {
      for (let j = 1; j < 9; j++) {
        const div = document.createElement('div');
      div.className = 'square'
      div.textContent = `${i} ${j}`;
      if (j%2 !== 0 && i%2 !== 0) {
        div.style.backgroundColor = 'f6f6d5';
        div.style.color = 'black'
  
      }
      if (j%2 === 0 && i%2 === 0) {
        div.style.backgroundColor = 'f6f6d5'
        div.style.color = 'black'
      }
  
  
      if (j === 1) {
          // div.textContent = `${Math.abs(i-9)}`
      }
  
      if (i === 8) {
        const alpha = ['a','b','c','d','e','f','g','h'];
        // div.textContent = alpha[j-1];
      }
  
      if (j === 1 && i === 8) {
        div.textContent = 'a1'
      }

  board.appendChild(div);


    if (i === 7) { // for white pawns
      
       const divP = document.createElement('div');
       divP.textContent = `♟`;
       divP.className = 'whitePeices';
       div.appendChild(divP)

       //giving id's for each pawn
       if (j === 1) {
          divP.id = '1wp'
       }
       if (j === 2) {
        divP.id = '2wp'
          
       }
       if (j === 3) {
        divP.id = '3wp'
          
       }
       if (j === 4) {
        divP.id = '4wp'
          
       }
       if (j === 5) {
        divP.id = '5wp'
          
       }
       if (j === 6) {
        divP.id = '6wp'
          
       }
       if (j === 7) {
        divP.id = '7wp'
          
       }
       if (j === 8) {
        divP.id = '8wp'
          
       }
    }

    if (i === 2) { // for black pawns
      
      const divP = document.createElement('div');
      divP.innerHTML = `&#9823`;
      divP.className = 'blackPeices'
      div.appendChild(divP); 
      
       //giving id's for each pawn
      if (j === 1) {
        divP.id = '1bp'
     }
     if (j === 2) {
      divP.id = '2bp'
        
     }
     if (j === 3) {
      divP.id = '3bp'
        
     }
     if (j === 4) {
      divP.id = '4bp'
        
     }
     if (j === 5) {
      divP.id = '5bp'
        
     }
     if (j === 6) {
      divP.id = '6bp'
        
     }
     if (j === 7) {
      divP.id = '7bp'
        
     }
     if (j === 8) {
      divP.id = '8bp'
        
     }



   }

   //placing white peices
   if (i === 8) { // first rank
      if (j === 1) { //white Rook
        const divR = document.createElement('div');
       divR.textContent = `♜`;
       divR.className = 'whitePeices'
       div.appendChild(divR); 
      }

      if (j === 2) { //white night
        const divN = document.createElement('div');
        divN.textContent = `♞`;
        divN.className = 'whitePeices'
        div.appendChild(divN); 
      }

      if (j === 3) { //white bishop
        const divN = document.createElement('div');
        divN.textContent = `♝`;
        divN.className = 'whitePeices'
        div.appendChild(divN); 
      }

      if (j === 4) { //white Queen
        const divN = document.createElement('div');
        divN.textContent = `♛`;
        divN.className = 'whitePeices'
        div.appendChild(divN); 
      }

      if (j === 5) { //white KING
        const divN = document.createElement('div');
        divN.textContent = `♚`;
        divN.className = 'whitePeices'
        div.appendChild(divN); 
      }

      if (j === 6) { //white bishop
        const divN = document.createElement('div');
        divN.textContent = `♝`;
        divN.className = 'whitePeices'
        div.appendChild(divN); 
      }

      if (j === 7) { //white night
        const divN = document.createElement('div');
        divN.textContent = `♞`;
        divN.className = 'whitePeices'
        div.appendChild(divN); 
      }
      if (j === 8) { //white Rook
        const divN = document.createElement('div');
        divN.textContent = `♜`;
        divN.className = 'whitePeices'
        div.appendChild(divN); 
      }

   }

   // placing black peices
   if (i === 1) { // last rank
    if (j === 1) { //white Rook
      const divR = document.createElement('div');
     divR.textContent = `♜`;
     divR.className = 'blackPeices'
     div.appendChild(divR); 
    }

    if (j === 2) { //white night
      const divN = document.createElement('div');
      divN.textContent = `♞`;
      divN.className = 'blackPeices'
      div.appendChild(divN); 
    }

    if (j === 3) { //white bishop
      const divN = document.createElement('div');
      divN.textContent = `♝`;
      divN.className = 'blackPeices'
      div.appendChild(divN); 
    }

    if (j === 4) { //white Queen
      const divN = document.createElement('div');
      divN.textContent = `♛`;
      divN.className = 'blackPeices'
      div.appendChild(divN); 
    }

    if (j === 5) { //white KING
      const divN = document.createElement('div');
      divN.textContent = `♚`;
      divN.className = 'blackPeices'
      div.appendChild(divN); 
    }

    if (j === 6) { //white bishop
      const divN = document.createElement('div');
      divN.textContent = `♝`;
      divN.className = 'blackPeices'
      div.appendChild(divN); 
    }

    if (j === 7) { //white night
      const divN = document.createElement('div');
      divN.textContent = `♞`;
      divN.className = 'blackPeices'
      div.appendChild(divN); 
    }
    if (j === 8) { //white Rook
      const divN = document.createElement('div');
      divN.textContent = `♜`;
      divN.className = 'blackPeices'
      div.appendChild(divN); 
    }
   }

}
    }
  }

  const pawnMoveMement = () => {

    // white paws
    const firstWhitePawn = document.getElementById('1wp');
    const secondWhitePawn = document.getElementById('2wp');
    const thirdWhitePawn = document.getElementById('3wp');
    const fourthWhitePawn = document.getElementById('4wp');
    const fifthWhitePawn = document.getElementById('5wp');
    const sixthWhitePawn = document.getElementById('6wp');
    const seventhWhitePawn = document.getElementById('7wp');
    const eighthWhitePawn = document.getElementById('8wp');

    // black pawns
    const firstBlackPawn = document.getElementById('1bp');
    const secondBlackPawn = document.getElementById('2bp');
    const thirdBlackawn = document.getElementById('3bp');
    const fourthBlackPawn = document.getElementById('4bp');
    const fifthBlackPawn = document.getElementById('5bp');
    const sixthBlackPawn = document.getElementById('6bp');
    const seventhBlackPawn = document.getElementById('7bp');
    const eighthBlackawn = document.getElementById('8bp');

    firstWhitePawn.addEventListener('click',() => {
      console.log('first white pawn clicked!');
      
      
    })

    firstWhitePawn.addEventListener('click',() => {
      console.log('first white pawn clicked!');
      
    })
    secondWhitePawn.addEventListener('click',() => {
      console.log('second white pawn clicked!');
      
    })
    thirdWhitePawn.addEventListener('click',() => {
      console.log('third white pawn clicked!');
      
    })
    fourthWhitePawn.addEventListener('click',() => {
      console.log('fourth white pawn clicked!');
      
    })
    fifthWhitePawn.addEventListener('click',() => {
      console.log('fifth white pawn clicked!');
      
    })
    sixthWhitePawn.addEventListener('click',() => {
      console.log('seixth white pawn clicked!');
      
    })
    seventhWhitePawn.addEventListener('click',() => {
      console.log('7th white pawn clicked!');
      
    })
    eighthWhitePawn.addEventListener('click',() => {
      console.log('8th white pawn clicked!');
      
    });

    //black pawns events
    firstBlackPawn.addEventListener('click',() => {
      console.log('first black pawn clicked!');
      
    })
    secondBlackPawn.addEventListener('click',() => {
      console.log('2nd black pawn clicked!');
      
    })
    thirdBlackawn.addEventListener('click',() => {
      console.log('3rd black pawn clicked!');
      
    })
    fourthBlackPawn.addEventListener('click',() => {
      console.log('4th black pawn clicked!');
      
    })
    fifthBlackPawn.addEventListener('click',() => {
      console.log('first white pawn clicked!');
      
    })
    sixthBlackPawn.addEventListener('click',() => {
      console.log('first white pawn clicked!');
      
    })
    seventhBlackPawn.addEventListener('click',() => {
      console.log('first white pawn clicked!');
      
    })
    
    eighthBlackawn.addEventListener('click',() => {
      console.log('first white pawn clicked!');
      
    })

  }

  initialPostionOfTheBoard();
  pawnMoveMement()
  
  
  
});
