// const fs = require("fs")

const fs = require('fs');
// Aqui eu sei que tá importando a bibliotca fs

const path = require('path');
//Ta importando o que?

// path é um módulo nativo do Node especializado em manipular strings 
// de caminho de arquivo de forma segura, sem você ter que ficar cortando 
// strings na mão com

const { marked } = require('marked');
// Tá filtrando a propriedade marked chamando somente a função necessaria.
// Isso evita escritas como marked.marked()

const template = fs.readFileSync('template/base.html', 'utf-8');
//Essa função vai ler o arquivo que está na pasta template com a codificação desejada

const arquivos = fs.readdirSync('content'); // pega pwsh.md, cmd.md, git.md automaticamente
// aqui vai ler tudo o que estiver dentro da pasta
// diferente de readFile que le um arquivo especifico
// readdir le o diretorio todo e "absorve" o conteudo


// Sync é o que ? que é uma função que vem de fs? Quase toda função do fs existe em duas versões:
// Síncrona (Sync): o código para e espera aquela linha terminar antes de ir pra próxima. 
// Simples de ler, mas trava o programa enquanto executa.

// Assíncrona (sem Sync): o código não espera, continua executando o resto enquanto aquela
// operação roda "em paralelo" (na real, numa fila de eventos), e avisa quando terminar via callback/Promise.

// Pra um script de build que roda uma vez, do início ao fim, na sua máquina — Sync é perfeitamente 
// adequado e mais fácil de entender. A versão assíncrona só vale a pena quando você precisa que o 
// programa continue fazendo outras coisas enquanto espera (tipo um servidor web atendendo múltiplos 
// usuários ao mesmo tempo).



for (const arquivo of arquivos) {
  const nome = path.basename(arquivo, '.md'); // "pwsh", "cmd", "git"
  // não entendi essa função  path.basename()
  // basename pega só o nome do arquivo, sem o caminho da pasta na frente, e o segundo parâmetro (opcional) 
  // remove uma extensão específica do final:



  
  const md = fs.readFileSync(`content/${arquivo}`, 'utf-8');

  const html = marked.parse(md);
  // Aqui tbm não entendo, como funciona essa função? parse seria analisar?
  // como read(ler) e parse (analisar) sao diferentes?


  // São coisas totalmente diferentes:

// readFileSync (do fs) → lê o arquivo do disco e devolve o conteúdo como texto puro (uma string). 
// Nesse ponto, md é literalmente o texto do markdown, tipo "# Título\n\nTexto aqui" — o computador 
// não sabe que isso "significa" um título, é só caracteres.
// marked.parse(md) (do marked) → pega essa string de markdown e interpreta a sintaxe 
// (# vira <h1>, **negrito** vira <strong>, etc.), devolvendo uma nova string, agora em HTML.

// marked - a função que literalmente extrai/copia o arquivo bruto para o parse - interpretar de md para html


  const pagina = template.replace('{{content}}', html);
  // aqui de alguma forma ta pegando o que está na pasta template e reescrevendo (replace)
  // no lugar exato {{content}}, mas pq o 2° parametro é html?
  // pq precisa de 2 chaves {{}}?
  // como funciona essa função que rapidamente entra na pasta e mexe no arquivo? como diferencia?


// Função nativa do JS.


  fs.mkdirSync(`public/${nome}`, { recursive: true });
  //Aqui ta criando a pasta,não preciso disso, a pasta ja ta criada

  // Mesmo assim acabou criando pasta dentro de pasta

  //O que seria {recursive:true}?

  // Aqui está criando as pastas indesejadas


  fs.writeFileSync(`public/${nome}/${nome}_index.html`, pagina);
  //Aqui ta criando o arquivo na pasta desejada, mas o que é esse parametro "pagina"

  // Aqui eu consigo trocar o nome do arquivo (file) mas não é o que eu queria, preciso tirar
  // O que ta criando as pastas
}