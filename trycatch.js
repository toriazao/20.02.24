const variavel1 = "valor somente leitura";  //declaracao de variavel, nome somente leitura
var variavel2 = "valor editavel";           //var - declaracao de variavel, denominada variavel2 com valor editavel

try { //algoritimo, transformar a variavel em um valor nao permitido
    variavel1 = "valor nao permitido"; //acoes do aloritmo try (linha 5,6)
    console.log("A variavel foi alterada para: ", variavel1);
} catch (e) {  // e = variavel do erro, tudo q esta em parenteses e parametro
    console.error("Ops! Ocorreu um erro: ", e);
}

try {
    variavel2 = "valor permitido";
    console.log("A variavel2 foi alterada para: ", variavel2);
} catch (e) {
    console.error("Ops! Ocorreu um erro: ", e);
}