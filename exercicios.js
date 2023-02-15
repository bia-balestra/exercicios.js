let info = {
personagem: 'Margarida',
origem: 'Pato Donald',
nota: 'namorada do personagem principal',
recorrente: 'não',
} 


// console.log(`Bem-vinda, ${info.personagem}`)


// for (let prop in info ){
//     console.log(prop + ':' + info[prop])
// }


// for (let prop in info ){
//     console.log(prop )
// }


let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain',
    nota: 'Último McPatinhas',
    recorrente: 'sim'
}


for (let prop  in info2) {
    if (prop !== 'recorrente') {
        console.log(`${prop} : ${info2[prop]} e ${info[prop]}`)
    } else {
        if (info[prop] === 'sim'&& info2[prop] === 'sim'){
            console.log('recorrente: ambos recorrentes')
        }
        else if (info[prop] === 'sim' && info2[prop] === 'não'){
            console.log('Margarida recorrente e Tio Patinhas não recorrente');
        }
        else if (info[prop] === 'não' && info2[prop] === 'sim'){
            console.log('Margarida não recorrente e Tio Patinhas recorrente');
        }else{
            console.log('ambos não recorrentes');
        }

    }
    
}







