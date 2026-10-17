<main>
    <section class="about">
        <div class="titulo">
            <h1>CHEATSHEET</h1>
            <h2>para Git</h2>
        </div>
    </section>
    <section class="basico">
<!-- ! - Trocar para isso aqui <section class=repositório> -->
    <h2>Sicronização com o repositorio do GITHUB</h2>
        <p>
            Mesmo usando o Git com determinada frequência, é comum esquecer os comandos do setup inicial (especialmente os de conectar com a nuvem e o primeiro push). Este guia serve exatamente para não precisar reaprender o caminho toda vez.
        </p>
        <ul class="border-git">
            <li><alias>git </alias>init - inicia o repositorio local.</li>
            <li><alias>git </alias>status - Confere os arquivos detectados.</li>
            <li><alias>git </alias>add - Prepara os arquivos.</li>
            <li><alias>git </alias>commit -m "mensagem" - Salva a primeira foto oficial no histórico.</li>
            <li><alias>git </alias>remote add origin &lt;chave SSH&gt; - Vincula o repositório local ao link do GitHub.</li> 
            <li><alias>git </alias>branch -M main - Garante que a branch principal se chame `main`</li> 
            <li><alias>git </alias>push origin main - Sobe o código para a nuvem e conecta as branches.</li>
        </ul>
    </section>
    <section class="basico">
        <h2>Comandos básicos do git</h2>
        <ul class="border-git">
            <li><alias>git </alias>init - Transforma a pasta num repositório.</li>
            <li><alias>git </alias>status - O seu mapa. Mostre o que mudou.</li>
            <li><alias>git </alias>add - Prepara os arquivos.</li>
            <li><alias>git </alias>commit -m "mensagem" - Salva a versão.</li>
            <li><alias>git </alias>push</li>
        </ul>
    </section>
    <section class="basico">
        <h2>Histórico e Consulta</h2>
        <ul class="border-git">
            <li><alias>git </alias>status - O seu mapa. Mostre o que mudou.</li>
            <li><alias>git </alias>log : O histórico de viagens no tempo do seu projeto. É basicamente um registro de quem fez alteração e em que, com data e hora. É o "quem, quando e o quê" de tudo o que aconteceu no seu projeto.</li>
            <li><alias>git </alias>log --online :  a mesma função do comando anterior porem resumindo cada registro em uma unica linha. serve para **mostrar o histórico de commits de forma ultra resumida** (tudo em uma única linha por commit).</li>
        </ul>
    </section>
    <section class="basico">
        <h2>Baixar/Atualizar</h2>
        <ul class="border-git">
            <li><alias>git </alias>clone (chave SSH)</li>
            <li><alias>git </alias>pull  Puxa as alterações de um repositório remoto e as mescla (_merges_) no repositório local.</li>
            <li><alias>git </alias> fetch - Recupera os dados mais recentes de um repositório remoto — mas **não integra** nenhum desses novos dados aos seus arquivos de trabalho locais. Verificar e baixar as atualizações da nuvem de forma isolada (sem alterar seus arquivos atuais).
            Efeito: Baixa todo o histórico e novas branches do repositório remoto para o seu computador, mas deixa sua branch atual exatamente como estava (guardando as novidades em uma "área separada").
            </li>
        </ul>
    </section>
    <section class="basico">
        <h2>Gerenciamento de Branches / Ramificações</h2>
        <ul class="border-git">
            <li><alias>git </alias>branch - Lista todas as branches (ramificações) e cria uma nova branch com um nome especificado.
            **Dica: A branch em que você está atualmente aparecerá com um asterisco (*) ao lado e destacada em cor diferente (normalmente verde).** </li>
            <li><alias>git </alias>branch nome-da-branch - cria uma ramificação do projeto atual.</li>
            <li><alias>git </alias>switch nome-da-branch  - Comando moderno para trocar de branch</li>
            <li><alias>git </alias>checkout - Comando antigo que tbm alterna para a branch especificada, ou seja, esse comando pula para outras ramificações</li>
            <li><alias>git </alias>merge - Junta (_merges_) a branch especificada na branch atual (neste caso, a `main`).</li>
        </ul>
    </section>
    <section class="basico">
        <h2>Outros comandos git que preciso organizar</h2>
        <ul class="border-git">
            <li><alias>git </alias>push -u origin feature/exemplo_teste</li>
            <li><alias>git </alias>remote - configura a ponte entre o repositorio local (dispositivo) e o repositorio remoto na nuvem (GITHUB como forte exemplo)</li>
            <li><alias>git </alias>remote -v : verifica o nome do repositorio em que seu projeto está alocado, de forma bem detalhada (-v, sem ele apareceria só como padrao o "origin").</li>
            <li><alias>git </alias>remote rename origin upstr: Altera o apelido de um repositório remoto que já está cadastrado.</li>
            <!-- TODO - Organizar -->
            <!--<p>
            remote = controle entre o repositorio local e o da nuvem
            rename = renomeie
            origin = exemplo de antigo nome de repositorio em questão
            upstr = exemplo de novo nome do repositorio em questão
            </p>-->
            <li><alias>git </alias>reset - Redefine (_resets_) a branch atual para o commit especificado.</li>
        </ul>
    </section>

</main>