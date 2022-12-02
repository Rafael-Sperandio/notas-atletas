let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
function print(atleta){
	let newnotas =atleta.notas.sort()
	let notasComputadas = newnotas.slice(1,4)
	let soma=0
	notasComputadas.forEach(function(n){
		soma+=n
	})
	let media=soma/notasComputadas.length
    console.log("Atleta: "+atleta.nome)
    console.log("Notas Obtidas:"+atleta.notas)
    console.log("Média Válida:"+media)
}
for (let i = 0; i < atletas.length; i++) {
    // O código que vai aqui será executado
    // uma vez para cada item da matriz
    print(atletas[i]);
}

/*
saida esperada:

Atleta: Cesar Abascal
Notas Obtidas: 10,10,7.88,8.42,9.34
Média Válida: 8.766666666666666

Atleta: Fernando Puntel
Notas Obtidas: 10,10,7,8,9.33
Média Válida: 8.333333333333334

Atleta: Daiane Jelinsky
Notas Obtidas: 10,7,8,9.5,9.5
Média Válida: 8.166666666666666

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.666666666666666
*/
