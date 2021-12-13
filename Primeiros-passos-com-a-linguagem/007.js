const listaDeDestinos = new Array(
    `Salvador`, 
    `Sao Paulo`, 
    `Rio de janeiro`
    
)
const idadeComprador = 17
console.log('Destinos provaveis')
console.log(listaDeDestinos)
if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //removendo item
}else{
    //a pessoa é menor de idade
    if(estaAcompanhada){
        console.log("Comprador está acompanhado");
        }else{
        console.log("Não é maior de Idade e não posso vender");

        }
    } 
console.log(listaDeDestinos)


