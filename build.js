const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const reset = "\x1b[0m";
const verde = "\x1b[32m";
const azul = "\x1b[34m";

const template = fs.readFileSync("template/base.html", "utf-8");
const arquivos = fs.readdirSync("content");

// Assíncrona (sem Sync): o código não espera, continua executando o resto enquanto aquela
// operação roda "em paralelo" (na real, numa fila de eventos), e avisa quando terminar via callback/Promise.
// ? - callback/Promise, o que é isso?

// Pra um script de build que roda uma vez, do início ao fim, na sua máquina — Sync é adequado e 
// mais fácil de entender. A versão assíncrona só vale a pena quando você precisa que o 
// programa continue fazendo outras coisas enquanto espera (tipo um servidor web atendendo múltiplos 
// usuários ao mesmo tempo).


for (const arquivo of arquivos) {
  const nome = path.basename(arquivo, ".md"); 
  const md = fs.readFileSync(`content/${arquivo}`, 'utf-8');
  const html = marked.parse(md);
  const pagina = template.replace("${{content}}", html);


  fs.mkdirSync(`public/${nome}`, { recursive: true });
  // Considerei a criação de pastas uso futuro

  // ? O que seria {recursive:true}?
  // Sem isso, quando o JS procurar o caminho escrito e não encontra, causa erro
  // se o caminho ja existe, ele para e não reescreve

  // Com o uso de recursive:true, se não existir o caminho, ele criar
  // se ja existir, ele sobreescreve o arquivo, tendo vantagem de atualizar

  fs.writeFileSync(`public/${nome}/${nome}_index.html`, pagina);



  console.log(`${verde}Atualização de conteudo concluída!${reset}`);
}