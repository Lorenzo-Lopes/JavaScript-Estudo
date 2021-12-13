console.log(`trabalhando com condicionais (loops)`)

const listaDeDestinos = new Array(
    `Salvador`, 
    `Sao Paulo`, 
    `Rio de janeiro`
)
const idadeComprador = 17
const estaAconpanhada =false
let temPassagemComprada = false
const destino ="Salvador"

console.log('Destinos possiveis')
console.log(listaDeDestinos)

const podeComprar = (idadeComprador >= 18 || estaAconpanhada == true)

let contador =0
let destinoExiste =false
// while (contador<3){
    
//     if(listaDeDestinos[contador] == destino){
//         console.log(listaDeDestinos[contador])
//         destinoExiste =true
//        break
//     }
//     contador+=1

// }
for(let cont = 0 ; cont <3 ; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}

console.log(`Destino existe: ${destino}`)