
// let persona = {
//     nombre: 'juan',
//     edad: 30,
//     profesión: 'ingeniero'
// };
/*console.log (persona.nombre); // imprime 'juan'
console.log (persona.edad);
console.log (persona.profesión);

persona.edad = 31;
console.log(persona.edad);

persona.altura= 1.80;
console.log (persona.altura);*/

/*let curso={
    nombre:"sumergete en js"
}
 curso.precio= 0;
 curso.autor= "programee"
 console.log(curso.autor);
 delete curso.nombre;


 console.table.nombre;


*/
/*let screamingMonkey = «🙉»;
console.log(screamingMonkey);*/

/*var totalPizza = 8;
var eatenPizza = 2;
var remainingPizza = totalPizza -eatenPizza;
console.log(remainingPizza);*/

/*let shoppingList = [manzanas, leche, huevos, pan, queso];
console.log(shoppingList[2]);*/

/*let shadow;
console.log(shadow); //undefined
console.log(typeof shadow); //undefined*/

/*let x=5;
let y=10;
let resultadosSuma= x+y;
console.log(resultadosSuma);

let resultadoResta=x-y;
console.log(resultadoResta)

let resultadoMultiplicacion= x**y;
console.log(resultadoMultiplicacion)

let resultadoDivision=x/y;
console.log(resultadoDivision)
*/

/*
let nota = 8;

if(nota >= 7 && nota< 9){
    console.log("notable");
}else if(nota >5 && nota <=6){
    console.log("suficiente");
}else if(nota >6 && nota <7){
    console.log("bien");
}else if(nota>=9 && nota <=10){
    console.log("excelente")
}else{
    console.log("insuficiente");

}
*/

// let colorSemaforo= 'amarillo';

// if (colorSemaforo=="verde"){
//     console.log("puedes continuar");
// }else if (colorSemaforo=='rojo'|| colorSemaforo=='amarillo'){    
//     console.log('debes detenerte');
// }else{
//     console.log('para');
// }


// let colorSemaforo = 'rojo';
// if (colorSemaforo == 'rojo') {
// console.log('Los coches deben detenerse');
// } else {
// console.log('Los coches pueden continuar');
// }

// const dia_semana_lunes= 'lunes'
// const dia_semana_martes= 'martes'

// let diaDeLaSemana=dia_semana_lunes;

// if (diaDeLaSemana==dia_semana_lunes){
//     console.log('¡que tengas un gran lunes!');

// }else if(diaDeLaSemana==dia_semana_martes){
//     console.log('¡que tengas un gran martes!');
// }
// else{
//     console.log('seleciona un dia de la semana');
// }

// let contador = 10;
// let i= 0;

// while (contador > 0) {
//     contador--;
//     i++;
//     console.log(i+" estes es el numero "+contador);

// }
// console.log("fin")



// for (let contador = 1; contador <= 10; contador++) {
//     console.log(`7 * ${contador} = ${7 * contador}`);
//     }

// for (let i=1; i<=10; i++){
  
//     console.log('7*'+i+'=' + 7*i);
// }

// let repetirMensaje = false;
// do {
// console.log('¡Esto es JavaScript!');
// } while (repetirMensaje);

// let edad=18;
// if( edad>=18){
// console.log('eres mayor de edad')}
// else
// {console.log('eres menor de edad')}

// let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// for (let i = 4; i < alfabeto.length; i++) {
//     console.log(i );

//     console.log(alfabeto[i])
// }


// let vehiculos =['coche','bus','bicicletas','moto']

// for (let i=0; i<vehiculos.length; i++){
  
//     if (vehiculos[i] == 'coche' || vehiculos[i]=='bicicletas' || vehiculos[i]=='moto'){//si es distino de bus imprime 
//         console.log(vehiculos[i])
//     }
// }

// function añosDePerro(añosHumanos) {
//     return añosHumanos * 7;
//     }
//     console.log(añosDePerro(5));

//     const esFinDeSemana = (dia) => dia === 'sábado' || dia === 'domingo';
// console.log(esFinDeSemana('lunes'));
// console.log(esFinDeSemana('sábado'));

//  const esFinDeSemana= (dia) => dia === 'sabado' || dia==='domingo';
//   console.log(esFinDeSemana('lunes'));
//   console.log(esFinDeSemana('sabado'));


// const familia =(nombreFamiliar )=> nombreFamiliar ==='jeff'|| nombreFamiliar ==='max' ||nombreFamiliar==='adriana';
// console.log(familia('adriana'));


// function saludo(nombre) {
//     return `¡Hola, ${nombre}!`;
//     }
//     console.log(saludo('Pedro'));

// function saludo(nombre) {
// return `¡buenas tardes, ${nombre}!`;
// }
// console.log (saludo('max'));

// const multiplicar = (numero1, numero2) => numero1 * numero2;
// console.log(multiplicar(5, 6));


// function saludo (nombre) {
//     return `¡buenos dias, ${nombre}!`
// }
//     console.log(saludo('dennys'));

// let frutas= ['kiwi','sandia','melon','naranja','pera']
// console.log(frutas[2]);

// let listaDeCompra=['leche','pan','huevos','harina']
// listaDeCompra[listaDeCompra.length]='yogur'

// listaDeCompra[3]='yogur'

// // listaDeCompra.push ('patatas');
// // listaDeCompra.unshift ('manzanas');
// console.log(listaDeCompra.length);
// console.log(listaDeCompra);


// let planetas = ['Mercurio', 'Venus', 'Tierra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Neptuno'];
// for (let i = 0; i < planetas.length; i++) {
// console.log(planetas[i]);
// }

// class Coche{
// constructor (marcaCoche,modeloCoche,matriculaCoche){
// this.marca=marcaCoche;
// this.modelo=modeloCoche;
// this.matricula=matriculaCoche;
// this.estado='nuevo';
// }
// arrancar(){
//     console.log('brum bruum');
//     }
// }
// let ferrari = new Coche('ferrari','v12','1234jkj');

// console.log(ferrari.matricula)

// let grito="¡Vamos a la batalla";
// console.log(grito.toLowerCase());

// let tesoro="El tesoro está enterrado en el jardín";
// console.log(tesoro.indexOf("en"));

// let pastel = "pastel de fresa";
// console.log(pastel.slice(7, 13));

// let correo = "miCorreo@gmailcom";
// console.log(correo.includes("@"));

// let saludo = " Hola, mundo! ";
// console.log(saludo.trim());

// let variable1 = "mario"; 
// let variable2 = 22; 
// variable1="max" 
// document.write("hola "+ variable1 +" tu edad es "+ variable2 +" años");
// console.log( variable1);

// function suma(){
// º
// let operacion=1+2;
// console.log(operacion);
// }
// // suma();

