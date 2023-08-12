function num(a, b, c, d){
    let product = (a*b);
    if(product > 100){
        let sum = c + d
        console.log(sum);
    }else if(product < 100 ){
        let subt = (c - d); 
        console.log(subt)
    }else if(product === 100){
        let multi3 = (a*b*c)%d;
        console.log(multi3);
    }
}

//num(50, 2, 4, 90);

function times21(){
    for (let i = 0; i <= 21; i++) {
        console.log(i)
        
    }
}
//times21(2)
function num(x, y){
    
}


function takeIn(arrNum){
    //for (let i = 0; i < arrNum.length; i++) {
        if(arrNum[0]< arrNum[arrNum.length - 1]){
            console.log(`Hi`)
        }else if(arrNum[0] > arrNum[arrNum.length-1]){
            console.log(`By`)
        }else if(arrNum[0] === arrNum[arrNum.length -1]){
            console.log(`we are closee`);
        }
        
    //}
}

//takeIn([3, 7, 9, 4, 6])




    let arrnames = ['paflex', 'raymond', 'ransom'];
   

//introduce map
let mapName = arrnames.map(newone => 'cum');///the newone there can be anything buddy
////so what this does is that create a new array with the word 'cum' 3times since the number of array in the arrnames is three

//console.log(mapName);

function alleven(evenarr){
    let onlyEven = [];
    for(let i = 0; i<= evenarr.length; i++){
        
        if (evenarr[i] % 2 === 0) {
            onlyEven.push(evenarr[i])
        }
    }
   // return onlyEven;
    console.log(onlyEven);
    
}
//console.log(alleven([2, 6, 2, 7, 9, 8, 20]))
alleven([2, 6, 2, 7, 9, 8, 20])
