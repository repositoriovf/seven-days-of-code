window.alert('Para começar responda algumas perguntas...');

const nome = prompt("Qual seu nome:");
const idade = prompt("Qual sua idade:");
const linguagem = prompt("Qual linguagem de programação está estudanto:")

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!
Seja muito bem vindis!`;

alert(msg);

document.getElementById('boasvindas').innerText = `${nome}, ${idade}.
[estudando, ${linguagem}]`;

document.getElementById('frase').innerText = `Você gosta de estudar ${linguagem}? 
Responda com o número 1 para SIM ou 2 para NÃO.`;

var segundobotao = document.getElementById('segundobotao');

segundobotao.onclick = function() {
      
    var opcao = document.getElementById('resposta2').value;
    if (opcao == 1){
      document.getElementById('imagem').src="images/ReadingDoodle.png";  
      document.getElementById('simounao').innerText = 'Muito bom! Continue estudando e você terá muito sucesso.';
      document.getElementById("latente").className = "hidden";
      setTimeout(function(){
        document.getElementById("latente").className = "resultados";
      }, 1500);
    } else if (opcao == 2){
      document.getElementById('imagem').src="images/BalletDoodle.png";  
      document.getElementById('simounao').innerText = 'Ahh que pena... Já tentou aprender outras linguagens?';
      document.getElementById("latente").className = "hidden";
      setTimeout(function(){
       document.getElementById("latente").className = "resultados";
      }, 1500);
    }else{
      document.getElementById('imagem').src="images/ZDoodle.png";  
      document.getElementById('simounao').innerText = 'Opção inexistente';
      document.getElementById("latente").className = "hidden";
    }

}  