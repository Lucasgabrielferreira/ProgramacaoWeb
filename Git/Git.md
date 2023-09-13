
<!-- Lucas Gabriel -->
Configurações iniciais
Antes de iniciarmos um repositório local é necessário definir seu nome e endereço de e-mail, essa configuração inicial é importante porque todos os commits do git utilizará essas informações, para isso use os comandos abaixo no terminal.

    $ git config --global user.name "<nome>"
    $ git config --global user.email "<email>"

Caso você queira verificar as configurações é só utilizar o comando:

    $ git config user.name

Para iniciarmos um repositório git, no terminal execute o comando abaixo (certifique-se que você está dentro do seu repositório utilizando o comando cd) ou com o botão direito do mouse dentro da pasta onde ficará o seu projeto clique em Git Bash Here:

Abra Git Bash.

E execute o comando:

    $ git init

Git status

O Git utiliza estados para monitorar seus arquivos, com o “git status” é possível ter um controle do que está se passando em seu repositório, para entendermos melhor como funciona, temos o exemplo abaixo que criará um arquivo Hello World.txt contendo dentro dele um simples texto “hello world” e mostrará o estado do arquivo.

    $ echo Hello World > helloWorld.txt
    $ git status

    on branch master
    No commits yet
    Untracket files:
      (use “git add <file>...” to include in what will be commited)
            hellowWorld.txt
    nothing add to commit but untracked files present (use “git add” to track);

Podemos observar que o arquivo helloWorld.txt está com o estado de untracked file, isso quer dizer que o arquivo não está sendo monitorado pelo git, então qualquer coisa que acontecer com ele o git não será “responsável”.

Git add

O comando “git add ” ou “git add .” (para todos os arquivos no repositório) monitora os arquivos e adiciona uma alteração dele no diretório à staging area, que é o local onde prepara os arquivos para o próximo commit.

    $ git add .

 Adiciona o arquivo ao seu repositório local e o prepara para confirmação. Para cancelar o preparo de um arquivo, use 'git reset HEAD ARQUIVO'.

Git commit

Faça commit do arquivo que você preparou no repositório local.

    $ git commit -m "Add comentários"

 Confirma as alterações controladas e as prepara para serem enviadas para um repositório remoto. Para remover esse commit e modificar o arquivo, use "git reset --soft HEAD~1", faça o commit e adicione o arquivo novamente.

 Git remote

    $ git remote add origin https://github.com/Lucasgabrielferreira/ProgramacaoWeb.git

O “git remote” é utilizado para gerenciar os repositórios monitorados, o exemplo abaixo registra o repositório remoto e adiciona o endereço em “origin” onde passaremos o link que pode ser encontrado na aba code do nosso repositório no GitHub.

Git Push

Com o “git push –u origin ” podemos encaminhar as mudanças commitadas para o GitHub, nesse exemplo utilizaremos o branch padrão master.

    $ git push -u origin master

Envia as alterações em seu repositório local até o repositório remoto que você especificou como origem.

referencia: https://www.youtube.com/watch?v=O2DFKHla80A&embeds_referring_euri=https%3A%2F%2Fcodamos.com.br%2F&feature=emb_imp_woyt


https://codamos.com.br/subindo-arquivos-no-github/