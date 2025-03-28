/*
// Funções
function soma(soma1,soma2){
    console.log(soma1+soma2);
  }
  //soma(2,5)
  
  const multiplica = (multi1,multi2)=> {
    console.log(multi1*multi2);
  }
  //multiplica(2,5)
  
  const calculaResto = (calc1,calc2)=> {
    console.log(calc1%calc2);
  }
  //calculaResto(2,10)
  
  const verificarImparPar = (ipa1)=> {
    const resto = ipa1 % 2 ;
    if(resto==0)  {
      console.log("É par");
    }
    else{
      console.log("É impar");
    }
  }
  //verificarImparPar(2)
  
  const contarLetras = (letras)=> {
   console.log("o valor "+letras +" "+ letras.length + " unidades") ;}
  //contarLetras("atum")
  
  const retornarPNome = (nome) => {
    return nome.split(" ")[0]
  }
  //retornarPNome("joao silva da bata")
  
  const verificarIdade = (idade)=> {
    const entrada = idade >18 ? "Sim" : "Nao" ;
   console.log("Ele(a) "  +entrada+ " pode entrar") 
  }
  //verificarIdade(20)
  
  const verificarNumero = (numero)=> {
    const entrada = numero >0 ? "Positivo" : numero == 0 ? "Zero" : "Negativo" ;
   console.log("Ele(a) deu "  +entrada) 
  }
  //verificarNumero(2)
  
  
  //Objetos
  
  const pessoa1 ={
    nome:"Joao",
    idade:30,
    endereco:"Rua Silva Jardim",
    caminhar: () => {console.log("Caminhando")}
  };
  //pessoa1.caminhar()
  //console.log(pessoa1.endereco)
  
  //desafio
  const pessoa2={
     dadosPessoas:{
      nome:"Jota",
      idade:20
    },
     endereco:{
      rua:"Avenida 15",
      cidade:"Corumbé",
      CEP:78300100
    },
     hobbies:[ 
      "Jogar", "Dormir" ,"Assistir"
    ],
     familiares:{
     pai:["George",34],
     mae:["Maria",30],
     irmao:["Jorge",14],
     irma:["Marta",12],
   }
  }
  // console.log(pessoa2.endereco.rua)
  // console.log(pessoa2.hobbies[0])
  // console.log(pessoa2.familiares)
  
  const lerPessoa =() => {
    console.log(pessoa2.dadosPessoas.nome 
      +" mora em "
      +pessoa2.endereco.cidade
      +" e tem 2 irmãos "
      +pessoa2.familiares.irmao
      +" e "  
      +pessoa2.familiares.irma)
  }
  // lerPessoa()
  
  //destruturando objetos
  const usuario = {nome:"Carlos",idade:25};
  const {nome,idade} = usuario;
  // console.log("nome: " + nome +" ,Idade: "+idade)
  
  //desafio spread operator
  const pessoas ={nome:"Ana",idade:25};
  const copiaPessoa = {...pessoas}
  // copiaPessoa
  
  // destruturaçao em arrays
  const pessao=["Pedro","Tiago","Joao"];
  const[,,n3]=pessao;
  // console.log(n3)
  
  const array1 =["a","b"]
  const array2 = ["c","d"]
  const arrayJuncao = [...array1 ,...array2];
/*const arr = [1,2,3];

const novoArr = [0, ...arr, 4, 5, 6];

console.log(novoArr);
*/


//ESTOQUE PROBLEM
/*
let estoque = [
    {
        nome: "João",
        quanti: 12,
        preco: 12.73
    }
];

function adicionarProduto(produto){
    estoque = {
        ...estoque, produto
    };
}

const produtoNovo = {
    nome: 'Salgado',
    quantidade: 2,
    preco: 20
}

adicionarProduto(produtoNovo)
console.log(estoque)

const removerProduto = (nomeProduto) => {
    for(item of estoque){
        //verificar se o nmeProduto é igual ao nome do item
        if(nomeProduto == item.nome){
            //remover item do estoque
            estoque.indexOf(0)
        }
    }
}

removerProduto("João")
console.log(estoque)
*/

//FOGO!
/*
let i = 10;
while (i>0){
    console.log(i);
    i = i -1;
    if (i == 0){
        console.log("Fogo!")
    }
}
*/

/*let i = 1;

while (i>=10){
    i = i +1;

    console.log(i+ "x" +n+ "=" + i*5)
}
    */