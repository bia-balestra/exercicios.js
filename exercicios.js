// let info = {
// personagem: 'Margarida',
// origem: 'Pato Donald',
// nota: 'namorada do personagem principal',
// recorrente: 'não',
// } 


// console.log(`Bem-vinda, ${info.personagem}`)


// for (let prop in info ){
//     console.log(prop + ':' + info[prop])
// }


// for (let prop in info ){
//     console.log(prop )
// }


// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain',
//     nota: 'Último McPatinhas',
//     recorrente: 'sim'
// }


// for (let prop  in info2) {
//     if (prop !== 'recorrente') {
//         console.log(`${prop} : ${info2[prop]} e ${info[prop]}`)
//     } else {
//         if (info[prop] === 'sim'&& info2[prop] === 'sim'){
//             console.log('recorrente: ambos recorrentes')
//         }
//         else if (info[prop] === 'sim' && info2[prop] === 'não'){
//             console.log('Margarida recorrente e Tio Patinhas não recorrente');
//         }
//         else if (info[prop] === 'não' && info2[prop] === 'sim'){
//             console.log('Margarida não recorrente e Tio Patinhas recorrente');
//         }else{
//             console.log('ambos não recorrentes');
//         }

//     }
    
// }





//  let  leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos:[
//         {
//         titulo: 'O Pior Dia De Todos',
//         autor: 'Daniela Kopsch',
//         editora:'Tordesilhas',
//         },
//         {
//             titulo:'O Amor Não é Obvio',
//             autor:'Elayne Baeta',
//             editora:'Galera',
//         }
//     ]
    
// }
 

// console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`)


//  console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`)


 


// let order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order:{
//         pizza:{
//             marguerita: {
//                 amount: 1,
//                 price: 25,
//             },
//             peperoni:{
//                 amount:1,
//                 price:20,
//             }
//         },
//         drinks:{
//             coke:{
//                 type:'Coca-Cola Zero',
//                 price: 10,
//                 amount: 1,
//             }
//         },
//         delivery:{
//             deliveryPerson: 'Ana Silveira',
//             price: 5,
//         },
//         payment:{
//             total:60
//         }
//     }
// }


// function custumerInfo(funcionario, cliente, telefone, rua, numero, apartamento)  {
//  console.log(
//     ` olá, ${funcionario}
//     entrega para: ${cliente},
//     telefone: ${telefone},
//     rua: ${rua},
//     numero do prédio: ${numero}
//     número do apartamento: ${apartamento}
//     `
//  )
// }

// custumerInfo(order.order.delivery.deliveryPerson, order.name, order.phoneNumber, order.address.street, order.address.number, order.address.apartment);

// function orderModifier(cliente, pizzas, bebidas, valor) {
//    console.log( `
//      Olá, ${cliente}, o valor do seu pedido de ${pizzas} e ${bebidas} é ${valor} reais
//     `)
// }

// orderModifier(order.name, Object.keys(order.order.pizza), order.order.drinks.coke.type ,order.order.payment.total);

// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`

// let pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }
//   pessoa = {
//     nome: 'Luna',
//     idade: 19
//   } // Altere essa estrutura para corrigir o erro.
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);


// const name = 'Adriana';
//   const lastName = 'Soares';
//   console.log(`Olá, ${name} ${lastName}`);
//   function soma(a,b) {
//     let resultado = a + b;
//     return resultado;
//   }
//   let a = 3;
//   let b = 5;
//   console.log(`O resultado da soma ${a} + ${b} é = ${soma(a,b)}`);



// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
//   }
//   imprimeIdade()



// let favoriteFood = 'Lasanha';
//   favoriteFood = 'Hambúrguer';
//   console.log(favoriteFood);



//const numeroAleatorio = () => Math.random()
//console.log(numeroAleatorio())



// let hello = (nome) =>`Olá, ${nome}!`
//   let nome = 'Ivan';
//   console.log(hello(nome));



// let nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
     
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));



// let speed = 90;
// let speedCar = (speed >= 120) ? "Você ultrapassou o limite de velocidade" : "Você está na velocidade permitida";
// console.log(speedCar);


