
const fs = require("fs");
// fs = file system, um modulo nativo do node.js


const path = require("path");
// path, outro módulo nativo do Node especializado em manipular strings de caminho de arquivo 
// de forma segura, sem você ter que ficar cortando strings na mão

const { marked } = require("marked");
// Tá filtrando a propriedade marked chamando somente a função necessaria.
// Isso evita escritas como marked.marked()


const template = fs.readFileSync("template/base.html", "utf-8");
//Essa função vai ler o arquivo que está na pasta template com a codificação desejada

const arquivos = fs.readdirSync("content");
// Vai ler todos os arquivos na pasta content
// diferente de readFile que lê um arquivo específico
// "readdirSync()" le o diretório todo e "absorve" o conteudo


// Sync é o que? que é uma função que vem de fs? Quase toda função do fs existe em duas versões:
// Síncrona (Sync): o código para e espera aquela linha terminar antes de ir pra próxima. 
// Simples de ler, mas trava o programa enquanto executa.

// Assíncrona (sem Sync): o código não espera, continua executando o resto enquanto aquela
// operação roda "em paralelo" (na real, numa fila de eventos), e avisa quando terminar via callback/Promise.
// ? - callback/Promise, o que é isso?


// Pra um script de build que roda uma vez, do início ao fim, na sua máquina — Sync é adequado e 
// mais fácil de entender. A versão assíncrona só vale a pena quando você precisa que o 
// programa continue fazendo outras coisas enquanto espera (tipo um servidor web atendendo múltiplos 
// usuários ao mesmo tempo).



for (const arquivo of arquivos) {
  const nome = path.basename(arquivo, ".md"); 
  // não entendi essa função  path.basename()
  // basename pega só o nome do arquivo, sem o caminho da pasta na frente, e o segundo parâmetro (opcional) 
  // remove uma extensão específica do final

  
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


  const pagina = template.replace("${{content}}", html);
  // aqui de alguma forma ta pegando o que está na pasta template e reescrevendo (replace)
  // no lugar exato {{content}}, mas pq o 2° parametro é html?
  // pq precisa de 2 chaves {{}}?
  // como funciona essa função que rapidamente entra na pasta e mexe no arquivo? como diferencia?
  // Função nativa do JS.


  fs.mkdirSync(`public/${nome}`, { recursive: true });
  // Considerei a criação de pastas uso futuro

  // ? O que seria {recursive:true}?
  // Sem isso, quando o JS procurar o caminho escrito e não encontra, causa erro
  // se o caminho ja existe, ele para e não reescreve

  // Com o uso de recursive:true, se não existir o caminho, ele criar
  // se ja existir, ele sobreescreve o arquivo, tendo vantagem de atualizar



  fs.writeFileSync(`public/${nome}/${nome}_index.html`, pagina);
  //Aqui ta criando o arquivo na pasta desejada, mas o que é esse parametro "pagina"



  // Sobre o uso de parametros opicionais, acho que entendi. ele pega o conteudo que ta em md e guarda 
  // numa "caixinha" mas na vdd está de certa forma num slot da memoria RAM, um espaço guardando esse 
  // conteudo chamado md; dps é usado parse(md) para reescrever caracteres de md para html e guarda na 
  // caixinha html; em seguida pega o conteudo da caixinha html e reescreve onde estava escrito a 
  // palavra-chave "content" e guarda na caixinha "pagina", até aqui não foi criado um arquivo para 
  // escrever o conteudo de fato, somente quando vai criar o arquivo em writefileSync() que é criado o 
  // arquivo e é escrito o conteudo convertido e pronto, e facilitando com o uso da função, nomeando o 
  // arquivo para extensao desejada, o html


}