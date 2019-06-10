
/*====================== LISTA 1 ======================*/

function exer1_1() {
    var d = parseInt(prompt("digite a distancia que o carro irá percorrer!"));
    var l = parseInt(prompt("Digite a quantidade de litros que você usará"));

    var sm = d / l;

    alert("A quantidade de media de litros é de: " + sm);
}

function exer1_2() {
    var qt_h = parseInt(prompt("Digite a quantidade de homens"));
    var vl_h = qt_h * 20;

    var qt_m = parseInt(prompt("Digite a quantidade de mulheres"));
    var vl_m = qt_m * 17;

    var vl_t = vl_m + vl_h;

    alert("O total de em dinheiro ganho é de: " + vl_t);
}

function exer1_3() {
    var p1 = parseInt(prompt("digite a nota da primeira prova"));
    var p2 = parseInt(prompt("digite a nota da segunda prova"));

    var m = (p1 + p2) / 2;

    alert("A sua media será de: " + m);
}

function exer1_4() {
    var a = parseInt(prompt("Digite o valor de A"));
    var b = parseInt(prompt("Digite o valor de B"));
    var c = parseInt(prompt("Digite o valor de C"));

    var d = (b ** 2) - 4 * a * c;

    alert("O valor de delta é de: " + d);
}

function exer1_5() {
    var alim1 = prompt("digite o nome da 1º fruta: ");
    var alim2 = prompt("digite o nome da 2º fruta: ");
    var alim3 = prompt("digite o nome da 3º fruta: ");

    alert("essas sao as frutas que você digitou: " + alim1 + ", " + alim2 + ", " + alim3 + ".");
}

/*====================== LISTA 2 ======================*/

function exer2_1() {
    var n = parseInt(prompt("Digite um numero: "));

    if (n > 10) {
        alert("O numero é maior que 10");
    }
}

function exer2_2() {
    var n1 = parseInt(prompt("Digite o 1º numero: "));
    var n2 = parseInt(prompt("Digite o 2º numero: "));

    if (n1 > n2) {
        alert("O 1º numero é maior que o 2º");
    } else if (n2 > n1) {
        alert("O 2º numero é maior que o 1º");
    }
}

function exer2_3() {
    var n1 = parseInt(prompt("Digite o 1º numero: "));
    var n2 = parseInt(prompt("Digite o 2º numero: "));

    if (n1 > n2) {
        alert("O 1º numero é maior que o 2º");
    } else if (n2 > n1) {
        alert("O 2º numero é maior que o 1º");
    } else if (n1 == n2) {
        alert("Os numeros são iguais");
    }
}

function exer2_4() {
    var n = parseInt(prompt("Digite um numero"));

    if (n % 2 == 0) {
        alert("O numero Digitado é par");
    } else {
        alert("O numero digitado nao é par");
    }
}

function exer2_5() {
    var n = parseInt(prompt("Digite um numero"));

    if (n % 10 == 0) {
        alert("O numero é multiplo de 10");
    } else {
        alert("O numero nao é multiplo de 10");
    }
}

/*====================== LISTA 3 ======================*/

function exer3_1() {
    var n = parseInt(prompt("Digite um numero"));

    if (n >= 15 && n <= 25 || n >= 45 && n <= 50) {
        alert("ERRO 404 (numero nao encontrado)");
    }
}

function exer3_2() {
    var n = parseInt(prompt("Digite um numero"));

    if (n < 25 || n > 80 || n == 40) {
        alert("o numero entrou");
    }

}

function exer3_3() {
    var n1 = parseInt(prompt("Digite o 1º numero: "));
    var n2 = parseInt(prompt("Digite o 2º numero: "));
    var n3 = parseInt(prompt("Digite o 3º numero: "));

    if (n1 + n2 > n3) {
        alert("o pode ser um triangulo");
    } else if (n3 + n1 > n2) {
        alert("o pode ser um triangulo");
    } else if (n3 + n2 > n1) {
        alert("o pode ser um triangulo");
    } else {
        alert("nao é triangulo");
    }
}

function exer3_4() { }

function exer3_5() { }

function exer3_6() {
    var nome = prompt("digite seu nome: ");

    if (nome == "Cicero" || nome == "Prático" || nome == "Heitor") {
        alert("ohh parabens hein belo nome, seja bem vindo ");
    } else {
        alert("Bem vindo");
    }
}

/*====================== LISTA 4 ======================*/

function exer4_1_1() {
    var num_r = Math.floor(Math.random() * 10 + 1);

    var chan1 = parseInt(prompt("EU JA SORTIEI UM NUMERO...\nAgora me fale qual é:"));

    if (chan1 == num_r) {
        alert("Parabens você acertou !!");
    } else {

        var chan2 = parseInt(prompt("Uhm nao foi dessa vez\nmas vou de dar outra chance :)"));

        if (chan2 == num_r) {
            alert("Parabens você acertou !!");
        } else {
            alert("Poxa você nao conseguiu o numero sortiado era: " + num_r)
        }
    }

}

function exer4_1_2() {
    var num_r = Math.floor(Math.random() * 10 + 1);

    var chan1 = parseInt(prompt("EU JA SORTIEI UM NUMERO...\nAgora me fale qual é:"));

    if (chan1 == num_r) {
        alert("Parabens você acertou !!");
    } else {
        if (chan1 < num_r) {
            var msg = "o numero é maior";
        } else {
            var msg = "o numero é menor";
        }

        var chan2 = parseInt(prompt("Uhm nao foi dessa vez\nmas vou de dar outra chance, e só uma dica " + msg));

        if (chan2 == num_r) {
            alert("Parabens você acertou !!");
        } else {
            alert("Poxa você nao conseguiu o numero sortiado era: " + num_r)
        }
    }

}


function exer4_1_3() {
    var num_r = Math.floor(Math.random() * 10 + 1);

    var chan1 = parseInt(prompt("EU JA SORTIEI UM NUMERO...\nAgora me fale qual é:"));

    if (chan1 == num_r) {
        alert("Parabens você acertou !!");
    } else {
        if (chan1 < num_r) {
            var msg = "o numero é maior";
        } else {
            var msg = "o numero é menor";
        }

        var chan2 = parseInt(prompt("Uhm nao foi dessa vez\nmas vou de dar outra chance, e só uma dica " + msg));

        if (chan2 == num_r) {
            alert("Parabens você acertou !!");
        } else {
            if (chan2 < num_r) {
                var msg = "o numero é maior";
            } else {
                var msg = "o numero é menor";
            }

            var chan3 = parseInt(prompt("Uhm nao foi dessa vez\nmas vou de dar outra chance, e só uma dica " + msg));

            if (chan3 == num_r) {
                alert("Parabens você acertou !!");
            } else {
                alert("Poxa você nao conseguiu o numero sortiado era: " + num_r);
            }
        }

    }
}

function exer4_2() {
    var num_r1 = Math.floor(Math.random() * 5 + 1);
    var num_r2 = Math.floor(Math.random() * 5 + 1);
    var n1 = parseInt(prompt("Digite o 1º numero : "));
    var n2 = parseInt(prompt("Digite o 1º numero : "));

    if (n1 == num_r1 || n1 == num_r2) {
        var msg1 = "você acertou o primeiro numero";
    } else {
        var msg1 = "você errou o primeiro numero";
    }
    if (n2 == num_r1 || n2 == num_r2) {
        var msg2 = "você acertou o segundo numero";
    } else {
        var msg2 = "você errou o primeiro numero";
    }

    alert(msg1 + "\n" + msg2 + "\n" + "os numeros eram : 1º numero sorteado = " + num_r1 + ", 2º numero sorteado = " + num_r2);
}

function exer4_3() {
    var num_r1 = Math.floor(Math.random() * 10 + 1);
    var num_r2 = Math.floor(Math.random() * 10 + 1);

    var i = 0;

    if (num_r1 >= 3 && num_r1 <= 7) {
        i++;
    } else if (num_r2 >= 3 && num_r2 <= 7) {
        i++;
    }

    alert("Existem " + i + " numeros entre 3 e 7, que são: " + num_r1 + ", " + num_r2);
}

function exer4_4() {
    var escolha = prompt("Escolha Impar ou par\n1 - Impar\n2-par");

    var num_r = Math.floor(Math.random() * 10 + 1);

    if (num_r % 2 == 0) {
        var resposta = "2";
    } else {
        var resposta = "1";
    }

    if (resposta == escolha) {
        var msg = "O JOGADOR";
    } else {
        var msg = "A MAQUINA";
    }

    alert("numero sorteado: " + num_r + "\nVENCEDOR É " + msg);
}

function exer4_5() {
    var ret = prompt("Digite alguma coisa ");

    if (ret.charAt(0) == "a" || ret.charAt(0) == "A") {
        alert("Sua primeria letra é A")
    } else {
        alert(" sua primeira letra não é A");
    }
}

/*====================== LISTA 5 ======================*/

function exer5_1() {
    var num = parseInt(prompt("Qual numero deseja multiplicar ?"));

    for (var i = 0; i <= 10; i++) {
        var total = num * i;

        alert(num + " x " + i + " = " + total);
    }

}

function exer5_2() {
    for (var i = 1; i <= 20; i++) {
        var total = i ** 2;

        alert("potendia de " + i + " = " + total);
    }
}

function exer5_3() {
    for (var i = 1; i <= 5; i++) {
        var num = parseInt(prompt("Digite um numero"));

        if (num % 2 == 0) {
            alert("é Par");
        } else {
            alert("Não é par");
        }
    }
}

function exer5_4() {
    var total = 0;

    for (var i = 1; i <= 100; i++) {
        total += i;
    }

    alert(total);
}

function exer5_5() {
    var total = 0;

    for (var i = 1; i <= 10; i++) {
        var num = parseInt(prompt("Digite um numero"));

        total += num;
    }

    alert("valor total = " + total);
}
function exer5_6() {
    var num = parseInt(prompt("Digite um numero"));

    for (var i = num; i >= 0; i--) {
        if (num % i == 0) {
            alert(num + " é um numero divisivel por " + i);
        }
    }
}

function exer5_7() {
    do {

        x = 0;

        var nome = prompt("Digite uma palavra de 6 digitos");

        var ret = nome.length;

        // alert(ret);

        if (ret == 6) {
            x = 1;
        }

    } while (x == 0);
}

/*====================== LISTA 6 ======================*/exer7_1

function exer6_1() {
    var num = parseInt(prompt("Digite um numero: "));
    var total = 0;

    for (var i = (num - 1); i > 0; i--) {
        if (num % i == 0) {
            total += i;
        }
    }

    if (total == num) {
        alert("O numero é perfeito")
    } else {
        alert("O numero não é perfeito");
    }
}

function exer6_2_1() {
    var num_r = Math.floor(Math.random() * 10 + 1);

    do {
        var num = parseInt(prompt("digite um numero"));
        var x = false;

        if (num == num_r) {
            x = true;
        }



    } while (x == false);
}

function exer6_2_2() {
    var num_r = Math.floor(Math.random() * 10 + 1);
    var cont = 0;

    do {
        var num = parseInt(prompt("digite um numero"));
        cont++;
        var x = false;

        if (num == num_r) {
            x = true;
        }



    } while (x == false);

    alert("você tentou " + cont + " vezes")
}

function exer6_3() {
    var total = 0;

    for (var i = 25; i <= 200; i++) {
        total += i;
    }

    alert("a soma de tudo é :" + total);
}

function exer6_4() {
    var nome = prompt("Digite o nome do mais alto: ");
    var altura = parseInt(prompt("Digite a altura: "));
    var maior = altura;

    for (var i = 1; i <= 4; i++) {
        var nome2 = prompt("Digite o nome do mais alto: ");
        var altura2 = parseInt(prompt("Digite a altura: "));

        if (altura2 > maior) {
            maior = altura2;
        }
    }

    alert("O que tem a aultura maior é o: " + maior);
}


function exer6_5_1() {
    var nome = prompt("Digite o nome do mais alto: ");
    var altura = parseInt(prompt("Digite a altura: "));
    var maior = altura;
    var nomemaior = nome;

    for (var i = 1; i <= 4; i++) {
        var nome2 = prompt("Digite o nome do mais alto: ");
        var altura2 = parseInt(prompt("Digite a altura: "));

        if (altura2 > maior) {
            maior = altura2;
            nomemaior = nome2
        }
    }

    alert("O nome do maior é: " + nomemaior);
}

function exer6_5_2() {
    var nome = prompt("Digite o nome do mais alto: ");
    var altura = parseInt(prompt("Digite a altura: "));
    var maior = altura;
    var nomemaior = nome;
    var media = altura;

    for (var i = 1; i <= 4; i++) {
        var nome2 = prompt("Digite o nome do mais alto: ");
        var altura2 = parseInt(prompt("Digite a altura: "));

        if (altura2 > maior) {
            maior = altura2;
            nomemaior = nome2
        }

        media += altura2;

        media = media / 5;
    }

    alert("a media de todos é  " + media);
}

function exer6_5_3() {
    var nome = prompt("Digite o nome do mais alto: ");
    var altura = parseInt(prompt("Digite a altura: "));
    var maior = altura;
    var nomemaior = nome;
    var media = altura;
    var i = 1;
    do {
        var x = false;
        var resp = prompt("Deseja cadastrar mais um ? (S/N)");

        resp.toLowerCase();

        if (resp == "n") {
            x = true;
        } else if (resp == "s") {
            i++;
            var nome2 = prompt("Digite o nome do mais alto: ");
            var altura2 = parseInt(prompt("Digite a altura: "));

            if (altura2 > maior) {
                maior = altura2;
                nomemaior = nome2
            }

            media += altura2;

            media = media / i;

        }

    } while (x == false);

    alert("A media é: " + media + "\nO mais alto é: " + nomemaior + "\na altura do mais alto é: " + maior);
}

function exer6_6() {
    var palavra = prompt("Digite uma palavra que tenha f ou começa com a letra p");

    var ret = false;

    for (var i = palavra.length; i >= 0; i--) {
        if (palavra.charAt(0) == "p" || palavra.charAt(i) == "f") {
            ret = true;
        }
    }

    if (ret == true) {
        alert("A palavras passou");
    } else {
        alert("A palavra não entrou");
    }
}

function exer6_7() {
    var num = parseInt(prompt("Digite um numero: "));
    var cont = 0;

    for (var i = num; i >= 0; i--) {
        if (num % i == 0) {
            cont++;
        }
    }

    if (cont == 2) {
        alert("o numero é primo");
    } else if (cont > 2) {
        alert("O numero não é primo");
    }
}

/*====================== LISTA 7 ======================*/

function exer7_1() {
    var num = parseInt(prompt("Digite um numero"));
    var menor = num;

    for (var i = 1; i <= 4; i++) {
        var num2 = parseInt(prompt("Digite um numero"));

        if (num2 < menor) {
            menor = num2;
        }
    }

    alert(menor);
}

function exer7_2() {
    var boll = false
    do {
        var num = parseInt(prompt("Digite um numero"));

        if (num == 0)
            boll = true;

    } while (boll == false);
}

function exer7_3() {
    var i = 0;
    var qt_laco = 0;
    do {
        var num_r = Math.floor(Math.random() * 100 + 1);

        if (num_r % 2 == 0) {
            alert(num_r);
            i++;
            console.log(i);
        }

        qt_laco++;
    } while (i != 10);

    alert("o laço rodou " + qt_laco + " vezes.");
}

function exer7_4() {
    var num = parseInt(prompt("Digite um numero"));
    var i = 0;

    for (i = num - 1; i >= 1; i--) {
        num = num * i;
    }

    alert(num);

}

function exer7_5() {
    var x = 0;
    var n1 = parseInt(prompt("Digite o 1º numero de 1 a 60"));
    var n2 = parseInt(prompt("Digite o 2º numero de 1 a 60"));
    var n3 = parseInt(prompt("Digite o 3º numero de 1 a 60"));




    do {
        var r1 = Math.floor(Math.random() * 60 + 1);
        var r2 = Math.floor(Math.random() * 60 + 1);
        var r3 = Math.floor(Math.random() * 60 + 1);


        x++;

    } while (n1 != r1 || n2 != r2 || n3 != r3);

    alert(x);

}

/*====================== LISTA 8 ======================*/

function exer8_1() {
    var v = [];

    for (var i = 0; i < 10; i++) {
        v[i] = "f";
    }

    alert(v);
}

function exer8_2() {
    var num = [];
    var maior_v = [];
    var total = 0;
    var media = 0;

    for (var i = 0; i < 5; i++) {
        total += num[i] = parseInt(prompt("Digite um numero"));
    }

    media = total / 5;

    for (var i = 0; i < 5; i++) {
        if (num[i] > media) {
            maior_v[i] = num[i];
        }
    }

    alert("A media foi : " + media + "\nE os numeros que estão acima é : " + maior_v);
}

function exer8_3() {
    var total = 0;
    for (var i = 0; i < 100; i++) {
        total += Math.floor(Math.random() * 100 + 1);
    }

    alert(total / 100);
}

function exer8_4() {
    var total = 0;
    var v = [];
    var menor_v = [];

    for (var i = 0; i < 100; i++) {
        v[i] = Math.floor(Math.random() * 100 + 1);
    }

    for (var i = 90; i < 100; i++) {
        total += v[i]
    }

    var media = total / 10;

    media = Math.floor(media);

    for (var i = 0; i < 100; i++) {
        if (v[i] < media) {
            menor_v[i] = v[i];
        }
    }

    alert("A media foi : " + media + "\nE os numeros que estão abaixo é : " + menor_v);
}

function exer8_5() {
    var total = 0;
    var v = [];
    var menor_v = [];

    for (var i = 0; i < 100; i++) {
        v[i] = Math.floor(Math.random() * 100 + 1);
    }

    for (var i = 90; i < 100; i++) {
        total += v[i]
    }

    var media = total / 10;

    media = Math.floor(media);

    var count = 0;

    for (var i = 0; i < 100; i++) {
        if (v[i] < media) {
            if (v[i] % 10 == 0) {
                menor_v[count] = v[i] + "\n";
                count++;
            } else {
                menor_v[count] = v[i];
                count++;
            }
        }
    }

    alert("A media foi : " + media + "\nE os numeros que estão abaixo é : " + menor_v);
}

/*====================== LISTA 9 ======================*/

function exer9_1() {
    var v = [];

    for (var i = 0; i < 3; i++) {
        v[i] = [];
        for (var j = 0; j < 3; j++) {
            v[i][j] = " x ";
        }
    }

    v[1][1] = " 8 ";

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            document.write(v[i][j]);
        }
        document.write("<br>");
    }
}

function exer9_2() {
    var v = [];

    for (var i = 0; i < 10; i++) {
        v[i] = [];
        for (var j = 0; j < 10; j++) {
            v[i][j] = " X ";
        }
    }

    var num1 = Math.floor(Math.random() * 10 + 1);
    var num2 = Math.floor(Math.random() * 10 + 1);
    v[num1][num2] = " 8 ";

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            document.write(v[i][j]);
        }
        document.write("<br>");
    }
}

function exer9_3() {
    var v = [];
    var linha = [];
    var val = 0;
    var total = 0;
    var maior = 0;
    var l_maior = 0;

    for (var i = 0; i < 20; i++) {
        v[i] = [];
        for (var j = 0; j < 20; j++) {
            val = Math.floor(Math.random() * (99 - 10 + 1) + 10);
            v[i][j] = " " + val;
            linha[i] = val;
            total += linha[i];
            linha[i] = total;
            if (linha[i] > maior) {
                maior = linha[i];
                l_maior = i + 1;
            }
        }
        total = 0;
    }

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            document.write(v[i][j]);
        }
        document.write("<br>");
    }

    for (var i = 0; i < 20; i++) {
        document.write("<br>");
        document.write("A soma da linha " + (i + 1) + " é igual a :" + linha[i] + "<br>");
    }

    document.write("<br>O numero da maior linha é : " + l_maior + ". Com o valor de : " + maior);

}

function exer9_4() {
    var v = [];
    var val = 0;
    var soma = 0;


    for (var i = 0; i < 20; i++) {
        v[i] = [];
        for (var j = 0; j < 20; j++) {
            val = Math.floor(Math.random() * (99 - 10 + 1) + 10);
            v[i][j] = " " + val;

            if (i == j) {
                soma += val;
            }
        }
    }

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            document.write(v[i][j]);
        }
        document.write("<br>");
    }

    document.write("A soma da diagonal é : " + soma);

}

/*====================== LISTA 10 ======================*/

function exer10_1(){
    function max(x, y){
        if(x > y){
          return x;
        }else if(y > x ){
          return y;
        }
      }
    
    var num = parseInt(prompt("Digite o primeiro numero"));
    var num2 = parseInt(prompt("Digite o segundo numero"));

    alert(max(num,num2));
}

function exer10_2(){
    function par_ou_impar(x){
        if(x%2==0){
          return "par";
        }else{
          return "impar";
        }
      }

      var num = parseInt(prompt("Digite o um numero"));
      
      alert(par_ou_impar(num));
}

function exer10_3(){
    function eh_primo(x){
        var guarda_ret= 0;
      
        for(var cont = 1;cont <= x; cont++){
          if(x%cont==0){
            guarda_ret++;
          }
        }
      
        if(guarda_ret == 2){
          return "é primo";
        }else if(guarda_ret > 2){
          return "nao é primo ";
        }
      }

      var num = parseInt(prompt("Digite o um numero"));

      alert(eh_primo(num));
}

function exer10_4(){
    function temperatura(x, y){
        if(y == "C"){
          var f = x * 1.8 + 32;
          return f;
      
        }else if(y == "F"){
          var c = (x - 32) / 1.8;
          return c;
        }
      
      }

      var num = parseInt(prompt("Digite o um numero"));
      var letra = prompt("Digite o primeiro numero");
      
      alert(temperatura(num, letra.toUpperCase()))
}
function exer10_5(){
    function contarLetras(x, y){
        var get_return = 0;
      
        for (var cont=0 ;cont < x.length; cont++) {
           if(x.charAt(cont) == y){
              get_return++;
          }
        }
      
        return get_return;
      }

      var letra = prompt("Digite a palavra");
      var letra2 = prompt("Digite a letra");
      
      alert(contarLetras(letra.toLowerCase(), letra2.toLowerCase()));
}