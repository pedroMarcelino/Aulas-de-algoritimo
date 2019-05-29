
/*====================== LISTA 1 ======================*/

function exer1_1(){
    var d = parseInt(prompt("digite a distancia que o carro irá percorrer!")); 
    var l = parseInt(prompt("Digite a quantidade de litros que você usará"));

    var sm = d/l;

    alert("A quantidade de media de litros é de: " + sm);
}

function exer1_2(){
    var qt_h = parseInt(prompt("Digite a quantidade de homens"));
    var vl_h = qt_h * 20;

    var qt_m = parseInt(prompt("Digite a quantidade de mulheres"));
    var vl_m = qt_m * 17;

    var vl_t = vl_m + vl_h;

    alert("O total de em dinheiro ganho é de: " + vl_t);
}

function exer1_3(){
    var p1 = parseInt(prompt("digite a nota da primeira prova"));
    var p2 = parseInt(prompt("digite a nota da segunda prova"));

    var m = (p1 + p2) / 2;

    alert("A sua media será de: " + m);
}

function exer1_4(){
    var a = parseInt(prompt("Digite o valor de A"));
    var b = parseInt(prompt("Digite o valor de B"));
    var c = parseInt(prompt("Digite o valor de C"));

    var d = (b**2) - 4 * a * c;  

    alert("O valor de delta é de: " + d);
}

function exer1_5(){
    var alim1 = prompt("digite o nome da 1º fruta: ");
    var alim2 = prompt("digite o nome da 2º fruta: ");
    var alim3 = prompt("digite o nome da 3º fruta: ");

    alert("essas sao as frutas que você digitou: " + alim1 + ", " + alim2 + ", " + alim3 + ".");
}

/*====================== LISTA 2 ======================*/

function exer2_1(){
    var n = parseInt(prompt("Digite um numero: "));

    if (n > 10){
        alert("O numero é maior que 10");
    }
}

function exer2_2(){
    var n1 = parseInt(prompt("Digite o 1º numero: "));
    var n2 = parseInt(prompt("Digite o 2º numero: "));

    if(n1 > n2){
        alert("O 1º numero é maior que o 2º");
    }else if(n2 > n1){
        alert("O 2º numero é maior que o 1º");
    }
}

function exer2_3(){
    var n1 = parseInt(prompt("Digite o 1º numero: "));
    var n2 = parseInt(prompt("Digite o 2º numero: "));

    if(n1 > n2){
        alert("O 1º numero é maior que o 2º");
    }else if(n2 > n1){
        alert("O 2º numero é maior que o 1º");
    }else if(n1 == n2){
        alert("Os numeros são iguais");
    }
}

function exer2_4(){
    var n = parseInt(prompt("Digite um numero"));

    if (n%2 == 0){
        alert("O numero Digitado é par");
    }else{
        alert("O numero digitado nao é par");
    }
}

function exer2_5(){
    var n = parseInt(prompt("Digite um numero"));

    if(n%10 == 0){
        alert("O numero é multiplo de 10");
    }else{
        alert("O numero nao é multiplo de 10");
    }
}

/*====================== LISTA 3 ======================*/

function exer3_1(){
    var n = parseInt(prompt("Digite um numero"));

    if(n >= 15 && n <= 25 || n >= 45 && n <= 50){
        alert("ERRO 404 (numero nao encontrado)");
    }
}

function exer3_2(){
    var n = parseInt(prompt("Digite um numero"));

    if(n < 25 || n > 80 || n == 40){
        alert("o numero entrou");
    }

}