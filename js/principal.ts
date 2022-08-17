let nome:string = "Erick Gabriel"

let idade:number = 16

console.log(nome,idade);

$("<p>", {
    text: `Oi $(nome) vc tem $(idade) anos` 
}).appendTo("body")
