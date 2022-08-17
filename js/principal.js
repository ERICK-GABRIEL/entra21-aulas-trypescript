let nome = "Erick Gabriel";
let idade = 16;
console.log(nome, idade);
$("<p>", {
    text: `Oi $(nome) vc tem $(idade) anos`
}).appendTo("body");
