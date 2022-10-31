const nome = "Gustavo Sampaio";
let nome2 = "";
let pessoaDefault = {
  nome:  "Gustavo Sampaio",
  idade: "34",
  trabalho: "psicologo"
}

let nomes = ["JonasGustavo Sampaio", "João das Couves", "Maria Silva"];

let pessoasListaVazia = [];

let pessoas = [
    {  
     nome:  "Gustavo Sampaio",
     idade: "34",
     trabalho: "psicologo"
    },
    {
     nome:  "João das Couves",
     idade: "20",
     trabalho: "designer"
    }
]

function alterarNome() {
    nome2 = "João das couves";
    console.log("valor alterado:");
    console.log(nome2);
}

function recebaEaltereNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("nome:");
    console.log(pessoa.nome);
    
    console.log("idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);
}


function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("--------IMPRIMIR PESSOAS-------");
    pessoas.forEach((item) => {
        console.log("Nome:")
        console.log(item.nome)

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho);

    })
}

imprimirPessoas();

adicionarPessoa({
    nome:  "JoséMaria",
     idade: "35",
     trabalho: "Teólogo"
});

imprimirPessoas();



//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
  //nome:  "João da Couves",
  //idade: "20",
  //trabalho: "Designer"
//})








//recebaEaltereNome("João Silva Pereira")
//recebaEaltereNome("Maria Silva")






//lterarNome(); 