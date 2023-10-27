
//PEGAR OS BOTÕES

const btnGenerate = document.getElementById("btnGerar");
const btnCopy = document.getElementById("btnCopiar");

// PEGAR OS INPUTS

const passLength = document.getElementById("passLength");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const number = document.getElementById("numbers");
const symbol = document.getElementById("special");
const result = document.getElementById("result");




function getRandomLower() {

    const charLower = "abcdefghijklmnopqrstuvwxyz"
    //ARREDONDAR PARA O MENOR NUMERO INTEIRO

    //CHARLOWER.LENGTH  VAI DAR O TAMANHAO DA STRING, 

    //MULTIPLICAMOS O RANDOM , PARA ELE PODER TRAZER UMA POSICAO DE UM CARACTER MINUSCULO
    return charLower[Math.floor(Math.random() * charLower.length)]
}

function getRandomUpperCase() {

    const charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //ARREDONDAR PARA O MENOR NUMERO INTEIRO

    //CHARUPPER.LENGTH  VAI DAR O TAMANHAO DA STRING, 

    //MULTIPLICAMOS O RANDOM , PARA ELE PODER TRAZER UMA POSICAO DE UM CARACTER MAIUSCULO
    return charUpper[Math.floor(Math.random() * charUpper.length)]
}

function getRandomNumber() {

    const num = "0123456789"
    //ARREDONDAR PARA O MENOR NUMERO INTEIRO

    //NUM.LENGTH  VAI DAR O TAMANHAO DA STRING, 

    //MULTIPLICAMOS O RANDOM , PARA ELE PODER TRAZER UMA POSICAO DE UM NUMERO
    return num[Math.floor(Math.random() * num.length)]
}

function getRandomSymbol() {

    const symbol = "!@#$%&*"
    //ARREDONDAR PARA O MENOR NUMERO INTEIRO

    //SYMBOL.LENGTH  VAI DAR O TAMANHAO DA STRING, 

    //MULTIPLICAMOS O RANDOM , PARA ELE PODER TRAZER UMA POSICAO DE UM SIMBOLO
    return symbol[Math.floor(Math.random() * symbol.length)]
}

const randomChar = {
    lower: getRandomLower,
    upper: getRandomUpperCase,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

//ADICIONANDO O EVENTO AO BOTÃO

btnGenerate.addEventListener("click", () => {
    const length = passLength.value;
    const hasLower = lowerCase.checked;
    const hasUpper = upperCase.checked;
    const hasNumber = number.checked;
    const hasSymbol = symbol.checked;

    result.innerText = generatePasswd(
        hasLower,
        hasUpper ,
        hasNumber,
        hasSymbol,
        length

    );
})

//FUNÇÃO PARA GERAR A SENHA , (OS PARÂMETROS PASSADOS SÃO OS QUE COLOCAMOS EM CIMA NO INNERTEXT)
function generatePasswd(lower,upper,number,symbol,length){

    //VARIAVEL VAZIA PRA POR A SENHA GERADA 
    let gPasswd = ""

    const typesCount = lower + upper + number + symbol;

    //ARRAY COM OS OBJETOS, O FILTER VAI SER APLICADO PARA CADA ELEMENTO DO ARRAY, PARA CADA ITEM ELE VAI PERCORRER O VALOR NO INDICE ZERO
    const typeArr = [{lower}, {upper}, {number}, {symbol}].filter((item) => { return Object.values  (item)[0]
    }
    );

    //LOOP PARA CONCATENAR TUDO
    //O i<length É O TAMANHO DA SENHA QUE O USUARIO ESCOLHER 
    for(let i = 0; i<length; i++){

        //PERCORRER O ARRAY

        //O FOREACH VAI PECORRER TUDO QUE TIVER DENTRO DE TYPEARR, NA PRIMEIRA ELE PERCORRE E ACUMULA NO "GPASSWD" NA SEGUNDA VEZ QUE O FOR DISPARAR ELE PERCORRE E GUARDA JUNTO DENTRO DA "GPASSWD"
        
        typeArr.forEach((type)=>{
            const funcName = Object.keys(type) [0];

            //FUNCNAME VAI TRAZER A CHAVE DO ARRAY E CHAMANDO AS FUNÇOES 
            
            gPasswd += randomChar[funcName] ();
        })

    }

    const finalyPasswd = gPasswd.slice(0,length)

    return finalyPasswd;

}

//FAZENDO BOTÃO DE COPIAR
btnCopy.addEventListener("click", ()=>{
  navigator.clipboard.writeText(result.value);
  alert("Senha copiado com sucesso " + result.value)
})
