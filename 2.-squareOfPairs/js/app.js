// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5

// declara las variables ES5

//var array = [2, 4, 6];
 //var array = [-3, 2, -8, 12, 5];
 //var array = [1, 2, 3, 4, 5];


// declaración de la funcion 

/*function square (number) {
 var evenNumber=array.map(function(num){
   if(num %2== 0){
    return num*num;
   }else{
     return num
   }
 });
 return evenNumber;
};

console.log(square(array));*/



                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6


// declara variables (let-const)
//const array = [2, 4, 6];
 //const array = [-3, 2, -8, 12, 5];
 const array = [1, 2, 3, 4, 5];

// declara la funcion y ejecuta el código

const square = number => {
  let evenNumber = array.map(num =>{
    if(num%2==0){
      return num * num;
    }else{
      return num
    }
  }); return evenNumber;
}
 console.log(square(array));






// ejecuta la funcion 

