
let hSmart = document.querySelector('#hSmart');
let mSmart = document.querySelector('#mSmart');
let sSmart = document.querySelector('#sSmart');

let data = document.querySelector('#data');
let semana = document.querySelector('#semana');
let dataHora = new Date();


function moveRelogio() {
    
    let momentoAtual = new Date();
    let hora = momentoAtual.getHours();
    let minuto = momentoAtual.getMinutes();
    let segundo = momentoAtual.getSeconds();

    let strHora = new String(hora)
    let strMinuto = new String(minuto)
    let strSegundo = new String(segundo)
    let diaDaSemana = dataHora.getDay()
    let img = document.getElementById('imagem')
    let msg = document.getElementById('mensagem')
    let dia = dataHora.getDate();
    let mes = dataHora.getMonth()+1;
   

    let strDia = new String(dia);
    let strMes = new String(mes);
    
    

    if (strDia.length == 1) dia ='0' + dia;
    if(strMes.length == 1) mes = '0' + mes;


    
    

    if (strSegundo.length == 1)segundo = "0" + segundo
    if (strMinuto.length == 1) minuto = "0" + minuto
    if (strHora.length == 1) hora = "0" + hora
   
    hSmart.textContent = hora
    mSmart.textContent = minuto
    sSmart.textContent = segundo

   


    switch(diaDaSemana) {
        case 0:
            diaDaSemana = 'DOM'
            break;
        case 1:
            diaDaSemana = 'SEG'
            break;
         case 2:
            diaDaSemana = 'TER'
            break;
         case 3:
            diaDaSemana = 'QUA'
            break;
         case 4:
            diaDaSemana = 'QUI'   
            break;
         case 5:
            diaDaSemana = 'SEX'   
            break; 
         case 6:
            diaDaSemana = 'SAB'      
            break;      
    }
    setTimeout("moveRelogio()",1000);

  
    if (diaDaSemana === 'SEG'){
        img.src = 'imagens/represa.jpg'
        msg.textContent = ' " procure ao SENHOR, da mesma 
        forma que vc procurou o carregador  quando a bateria estava  com 1% " '
        
    }
        else if (diaDaSemana === 'TER'){
        img.src = 'imagens/ponte.jpg'
        msg.textContent = ' "bom dia " '
    }
        else if (diaDaSemana === 'QUA'){
        img.src = 'imagens/ceu-azul.jpg'
        msg.textContent = ' " bom dia" '
    }
        else if (diaDaSemana === 'QUI'){
        img.src = 'imagens/aurora.jpg'
        msg.document.style.p = ' "bom dia" '
    }
        else if (diaDaSemana === 'SEX'){
        img.src = 'imagens/grama.jpg'
        msg.textContent = ' "Faça o bem sempre, pois lembre-se que tudo que você faz, é entre você e DEUS, e nunca é entre você e os outros!" '
    }
       else if (diaDaSemana === 'SAB'){
        img.src = 'imagens/coqueiro.jpg'
        msg.textContent = ' "quando tudo parecer difícil, lembre-se que temos um DEUS, que do nada, faz TUDO " '
    }
        else if(diaDaSemana === 'DOM') {
        img.src = 'imagens/deserto.jpg'
        msg.textContent = ' " Deus diz: tenha bom ânimo, estou no controle de tudo! " '
    }
}

function pegarData() {
    let diaDaSemana = dataHora.getDay();
    let dia = dataHora.getDate();
    let mes = dataHora.getMonth()+1;
    let ano = dataHora.getFullYear();
    
    let strDia = new String(dia);
    let strMes = new String(mes);
    
    

    if (strDia.length == 1) dia ='0' + dia;
    if(strMes.length == 1) mes = '0' + mes;
    

    switch(diaDaSemana) {
        case 0:
            diaDaSemana = 'DOM'
            break;
        case 1:
            diaDaSemana = 'SEG'
            break;
         case 2:
            diaDaSemana = 'TER'
            break;
         case 3:
            diaDaSemana = 'QUA'
            break;
         case 4:
            diaDaSemana = 'QUI'   
            break;
         case 5:
            diaDaSemana = 'SEX'   
            break; 
         case 6:
            diaDaSemana = 'SAB'      
            break;      
    }

    

    let dataAtual = dia +'/' + mes +'/' + ano
    semana.textContent = diaDaSemana
    data.textContent = dataAtual  

}
   
   
pegarData()

var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

function getUserPosition() {
    let url = ''
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude
      let long = pos.coords.longitude
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=f7beb48e5ddcfaa49760ec0218e9dbb8`
      fetchApi(url)
      
    })
}
function fetchApi(url) {
    let city = document.querySelector('.city')
    let temperatura = document.querySelector('#temp')
    let humidity = document.querySelector ('#umidad')

    fetch (url)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        let tempInCelsius = ((5/9)  * (data.main.temp-32)).toFixed(1);

        city.textContent = data.name
        temperatura.innerHTML = tempInCelsius
        humidity.innerHTML = data.main.humidity
    })
    .catch((err) => {
    city.innerHTML = 'Impossivel acessar o OpenWeatcher. Verifique a sua conexão.';
    temperatura.innerHTML = `-`;

 

    
})
}

getUserPosition();
