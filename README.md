# Passos iniciais para desenvolvimento do Bot

> Esse é um projeto de fins educativos e todas as práticas também

**Programas necessários**

 - [Git](https://git-scm.com)
 - (Opcional) [Github Desktop](https://desktop.github.com)
 - [Node.js](https://nodejs.org/en/)
 - IDE do seu agrado (recomendável [VSCODE](https://code.visualstudio.com) ou [Sublime](https://www.sublimetext.com))

## **Configuração de um ambiente node.js**

Na pasta do projeto, use o terminal node para rodar o seguinte comando
	

    npm init -y
    
   Esse comando irá gerar um arquivo "*package.json*" completo na sua pasta, onde você pode alterar algumas informações como a versão do projeto, nome do autor, versão etc
   Este é o "principal" arquivo tem uma aplicação node, pois nele se manterão as informações de dependências instaladas e de controle de versão.
   Ao rodar o comando de instalação do **discord.js** por exemplo
   

    npm install discord.js --save
Seu *package.json* irá mudar, sendo acrescentado as seguintes linhas

    "dependencies": {
	    "discord.js": "^12.2.0"
	}
O objeto "*dependencies*" dentro do *package.json* é fundamental quando se trata de praticidade no desenvolvimento e no upload dos arquivos pro git

> É bom deixar claro que o --save usado no comando de install garante que o objeto dependencies seja adicionado ao package.json

Após isso, na sua pasta já teremos uma pasta *node_modules*, um *package.json* e um *package-lock.json*
Na pasta **node_modules** estão os arquivos que você baixou utilizando o comando `npm install`, que nesse caso foi o *discord.js*.

Por fim, para tornar o ambiente node pronto pro git, adicionaremos um arquivo chamado **.gitignore**

> O .gitignore serve pra não mandar certas coisas para o git, que nesse
> caso, seria a pasta node_modules.

Mais cedo usamos o comando **--save** pra salvar nossas dependências no *package.json*, por isso, não é necessário enviar os arquivos que baixamos em nosso computador, pois, qualquer pessoa com o *package.json* em alguma pasta pode rodar o comando `npm install` (apenas isso) e toda a pasta node_modules é baixada novamente por meio do gerenciador de pacotes npm, deixando o commit de alterações mais limpo e muito menos pesado.

No arquivo .gitignore, somente digitamos o nome da pasta que queremos adicionar, ou seja, apenas

    node_modules
Salve tudo e pronto, você já pode criar sua index.js e começar a usar discord.js!

Me avisem se qualquer erro ou problema aconteceu aqui, obrigado :D


## Continua...



