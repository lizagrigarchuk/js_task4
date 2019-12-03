'use strict';
window.onload = function () {
    var array = [1,2,3,[1,2,[1,2,3,[1,2,3]]]];
    var array2 = [1,2,3,[1,2,[1,2,3]]];
    var array3 = [1,2,3,[5,6]];
    var array4 = [1,2,3,[5,6,[1,2,3,[5,6,[1,2,3,[5,6]]]]]];
    
    var sum=0;
    var level=0;

    function sumArray(arr){
        var arrayS = arr.join(',').split(",");
        for(var i =0; i<arrayS.length;i++){
            sum += Number(arrayS[i]);
        }
    }

    function lev(arr){
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]))  {
                level++;        
                lev(arr[i]);      
            }
        }
    }

    lev(array);sumArray(array);console.log(`Максимальная вложенность ${level}, сумма = ${sum}`);level=0;sum=0;   
    lev(array2);sumArray(array2);console.log(`Максимальная вложенность ${level}, сумма = ${sum}`);level=0;sum=0;
    lev(array3);sumArray(array3);console.log(`Максимальная вложенность ${level}, сумма = ${sum}`);level=0;sum=0;
    lev(array4);sumArray(array4);console.log(`Максимальная вложенность ${level}, сумма = ${sum}`);level=0;sum=0;
    
}
