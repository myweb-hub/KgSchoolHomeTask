function drawChessBoard(){
    b1 = 'wbwbwbwb'
    b2 = 'bwbwbwbw'
      for( i=0; i<8; i++){
          if (i%2==0) {
             console.log(b2);
          }
          else{
             console.log(b1);
              }
      }
  }
darwChessboard();