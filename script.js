
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

    let strHora = new String(hora);
    let strMinuto = new String(minuto);
    let strSegundo = new String(segundo);
    let diaDaSemana = dataHora.getDay();
    let img = document.getElementById('imagem');
    let msg = document.getElementById('mensagem');
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
        msg.textContent = ' " DEUS,se algum dia eu perder a esperança, por favor , me ajuda a lembrar que os teus planos são melhores que os meus !" '
        
    }
        else if (diaDaSemana === 'TER'){
        img.src = 'imagens/ponte.jpg'
        msg.textContent = ' "E quando perguntarem onde está o teu DEUS , responde aonde ele está, NO CONTROLE DE TUDO !" '

    }
        else if (diaDaSemana === 'QUA'){
        img.src = 'imagens/ceu-azul.jpg'
        msg.textContent = ' "Muitos dizem , Onde estás SENHOR ? E poucos  dizem , SENHOR , eis me aqui" '
    }
        else if (diaDaSemana === 'QUI'){
        img.src = 'imagens/aurora.jpg'
        msg.textContent = ' "Nunca questione as decisões de DEUS,  porque tudo que ele faz , é perfeito! " '
    }
        else if (diaDaSemana === 'SEX'){
        img.src = 'imagens/grama.jpg'
        msg.textContent = ' "Faça o bem sempre, pois lembre-se que tudo que você faz, é entre você e DEUS, e nunca é entre você e os outros!" '
    }
       else if (diaDaSemana === 'SAB'){
        img.src = 'imagens/coqueiro.jpg'
        msg.textContent = ' "Quando tudo parecer difícil, lembre-se que temos um DEUS , que do nada , faz TUDO! " '
    }
        else if(diaDaSemana === 'DOM') {
        img.src = 'imagens/caminho.jpg'
        msg.textContent = ' " Deus diz: tenha bom ânimo, pois estou no controle de tudo! " '
    }
         

        if ((dia == 19)&&(mes == 01)){
            img.src = 'imagens/flavia.jpg'
            msg.textContent = 'Fávia, hoje celebramos mais um dia da sua vida com muita alegria e gratidão a DEUS. Parabéns ! '
        } else('diaDaSemana')

        if ((dia == 11)&&(mes == 02)){
            img.src = 'imagens/israel.jpg'
            msg.textContent = 'Israel, hoje se completa mais um ano de sua vida, por isso curta cada instante deste dia com muita alegria. Parabéns ! '
        } else('diaDaSemana')

       if ((dia == 11)&&(mes == 03)){
        img.src = 'imagens/fabiola.jpg'
        msg.textContent = 'Fabíola, Parabéns a você ! Celebre este dia especial com muita alegria no coração e junto dos que mais Ama !'
       } else ('diaDaSemana')

       if ((dia == 12)&&(mes == 03)){
        img.src = 'imagens/elisa.jpg'
        msg.textContent = 'Elisa parabéns ! E que você ilumine o mundo com seu jeito ! seja feliz e curta muito seu aniversário.'
       } else ('diaDaSemana')
       if ((dia == 25)&&(mes == 03)){
        img.src = 'imagens/tati.jpg'
        msg.textContent = 'Tatiana, hoje celebramos mais um dia da sua vida com muita alegria e gratidão a DEUS. Parabéns ! '
       } else ('diaDaSemana')

       if ((dia == 28)&&(mes == 03)) {
        img.src = 'imagens/sandro.jpg'
        msg.textContent = 'Sandro, que falta você faz para nós, um abraço de todos os teus familiares ! Amor eterno.  '
       } else ('diaDaSemana')

       if ((dia == 07)&&(mes == 04)){
        img.src = 'imagens/bel.jpg'
        msg.textContent = 'Isabel, Parabéns a você ! Celebre este dia especial com muita alegria no coração e junto dos que mais Ama !'
       } else ('diaDaSemana')

       if ((dia == 14)&&(mes == 04)){
        img.src = 'imagens/vitoria.jpg'
        msg.textContent = 'Vitória, Tudo de bom a você ! celebre este dia com muita alegria e gratidão a DEUS ! Parabéns'
       } else ('diaDaSemana')

       if ((dia == 18)&&(mes == 05)){
        img.src = 'imagens/ivo.jpg'
        msg.textContent = ' Ivo, hoje celebramos mais um dia da sua vida com muita alegria e gratidão a DEUS. Parabéns ! '
       } else ('diaDaSemana')

       if ((dia == 29)&&(mes == 05)){
        img.src = 'imagens/joel.jpg'
        msg.textContent = ' Joel, hoje se completa mais um ano de sua vida, por isso curta cada instante deste dia com muita alegria. parabéns a você !'
       } else ('diaDaSemana')

       if ((dia == 25)&&(mes == 06)){
        img.src = 'imagens/dani.jpg'
        msg.textContent = 'Daniela, hoje é seu dia  minha parceira! e só tenho a agradecer por ser minha companheira por todos os momentos da minha vida, parabéns , te AMO !'
       } else ('diaDaSemana')

       if ((dia == 02)&&(mes == 08)){
        img.src = 'imagens/pai.jpg'
        msg.textContent = 'Pai, neste dia, quero agradecer por tudo e lembrar que, para todos nós, você é motivo de orgulho! muita paz, saúde e felicidades !'
       } else ('diaDaSemana')

       if ((dia == 25)&&(mes ==08)){
        img.src = 'imagens/camila.jpg'
        msg.textContent = 'Camila,  Parabéns a você ! Celebre este dia especial com muita alegria no coração e junto dos que mais Ama !'
       }else ('diaDaSemana')

       if ((dia == 16)&&(mes == 09)){
        img.src = 'imagens/charles.jpg'
        msg.textContent = ' Hoje é o meu dia ! Parabéns pra mim e muita saúde, paz e muito DEUS no coração'
       }else ('diaDaSemana')
       
       if ((dia == 17)&&(mes == 09)){
        img.src = 'imagens/bianca.jpg'
        msg.textContent = ' Bianca, hoje se completa mais um ano de sua vida, por isso curta cada instante deste dia com muita alegria. parabéns a você !'
      } else ('diaDaSemana')

      if ((dia == 25)&&(mes == 09)){
        img.src = 'imagens/rafael.jpg'
        msg.textContent = ' Rafael, Tudo de bom a você ! celebre este dia com muita alegria e gratidão a DEUS ! Parabéns'
      } else ('diaDaSemana')

      if ((dia == 26)&&(mes == 09)){
        img.src = 'imagens/felipe.jpg'
        msg.textContent = ' Felipe, hoje se completa mais um ano de sua vida, por isso curta cada instante deste dia com muita alegria. parabéns a você !'
       } else ('diaDaSemana')

       if ((dia == 01)&&(mes == 10)){
        img.src = 'imagens/ceia.jpg'
        msg.textContent = ' Céia, hoje se completa mais um ano de sua vida, por isso curta cada instante deste dia com muita alegria. parabéns a você !'
       } else ('diaDaSemana')

       if ((dia == 31)&&(mes == 10)){
        img.src = 'imagens/dupla.jpg'
        msg.textContent = ' Tiago, Wendell, Parabéns a vocês !! E que cada um, ilumine o mundo com seu jeito ! seja feliz e curta muito seu aniversário.'
      }else ('diaDaSemana')

      if ((dia == 16)&&(mes == 11)){
        img.src = 'imagens/bia.jpg'
        msg.textContent = 'Bia, Parabéns a você ! Celebre este dia especial com muita alegria no coração e junto dos que mais Ama !'
       }else ('diaDaSemana')

     if ((dia == 23)&&(mes == 11)){
        img.src = 'imagens/duplam.jpg'
        msg.textContent = ' Anna , Laura : Parabéns a vocês duas, que DEUS ilumine a cada uma de vocês, e que vocês continuem iluminando por onde passam ! '
       }else ('diaDaSemana')
      


       
      
      
       


    
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
