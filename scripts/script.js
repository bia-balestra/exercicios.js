
function Calcular(n1, n2) {
    n1 = parseFloat (document.getElementById('n1').value)
    n2 = parseFloat (document.getElementById('n2').value)
    console.log(n1 + n2)

    selector = document.getElementById('selector').value

    switch (selector) {
        case '+':
            calculo = (n1 + n2)
            document.getElementById('resultado').innerHTML = `O resultado de ${n1} + ${n2} é = ${calculo}`
            break;

            case '-':
            calculo = (n1 - n2)
            document.getElementById('resultado').innerHTML = `O resultado de ${n1} - ${n2} é = ${calculo}`
            break;
    
            case '*':
                calculo = (n1 * n2)
                document.getElementById('resultado').innerHTML = `O resultado de ${n1} * ${n2} é = ${calculo}`
                break;

            case '/':
                calculo = (n1 / n2)
                document.getElementById('resultado').innerHTML = `O resultado de ${n1} / ${n2} é = ${calculo}`
                break;
    }
    
}