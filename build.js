// const fs = require("fs")

const fs = require('fs');
// Aqui eu sei que tá importando a bibliotca fs

const path = require('path');
//Ta importando o que?
const { marked } = require('marked');
// Tá filtrando a propriedade marked chamando somente a função necessaria.
// Isso evita escritas como marked.marked()

const template = fs.readFileSync('templates/base.html', 'utf-8');
//Essa função vai ler o arquivo que está na pasta template com a codificação desejada

const arquivos = fs.readdirSync('content'); // pega pwsh.md, cmd.md, git.md automaticamente
// aqui vai ler tudo o que estiver dentro da pasta
// diferente de readFile que le um arquivo especifico
// readdir le o diretorio todo e "absorve" o conteudo
//Sync é o que ? que é uma função que vem de fs?



for (const arquivo of arquivos) {
  const nome = path.basename(arquivo, '.md'); // "pwsh", "cmd", "git"
  // não entendi essa função  path.basename()
  const md = fs.readFileSync(`content/${arquivo}`, 'utf-8');

  const html = marked.parse(md);
  // Aqui tbm não entendo, como funciona essa função? parse seria analisar?
  // como read(ler) e parse (analisar) sao diferentes?
  const pagina = template.replace('{{content}}', html);
  // aqui de alguma forma ta pegando o que está na pasta template e reescrevendo (replace)
  // no lugar exato {{content}}, mas pq o 2° parametro é html?
  // pq precisa de 2 chaves {{}}?
  // como funciona essa função que rapidamente entra na pasta e mexe no arquivo? como diferencia?


  fs.mkdirSync(`public/${nome}`, { recursive: true });
  //Aqui ta criando a pasta,não preciso disso, a pasta ja ta criada
  //O que seria {recursive:true}?
  fs.writeFileSync(`public/${nome}/index.html`, pagina);
  //Aqui ta criando o arquivo na pasta desejada, mas o que é esse parametro "pagina"
}