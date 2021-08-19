function drawTriangle (height){
    for (let i = 0; i < height; i++) { 
        for (let j = 0; j <= i; j++) { 
            console.log("#");
        }
       console.log("\n");
    }
}
drawTriangle(3);