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



## Começando a configurar o bot discord.js
Após todos os processos, a sua pasta deve parecer um pouco com isso

 - node_modules
 - .gitignore
 - package.json
 - package-lock.json
 
 Se está dessa forma, já podemos iniciar o próximo passo, onde vamos ligar o bot.
Crie um arquivo chamado index.js (ou o nome do entry point que você definiu no package.json). 
*index.js* é o entry point padrão dos projetos de node.js, um entry point define onde o node deve agir primeiro, por isso, é o arquivo mais importante do projeto. Se você não mexeu em nada, provavelmente seu package.json apresenta a seguinte linha:

    "main": "index.js"
Caso queira mudar o entry point, para por exemplo "*bot.js*" ou *"iniciar.js*", é só mudar o atributo main, mostrado acima

    "main": "bot.js" || "main": "iniciar.js"

> Porém, é recomendado manter o padrão universal de index.js.

**Trazendo o módulo discord.js para o index.js**
Como estamos trabalhando com node, precisamos importar o módulo desejado para o nosso arquivo de trabalho, para isso, iremos usar a função *require*

    const Discord = require('discord.js') 
O require trabalha procurando uma pasta chamada 'discord.js' dentro da pasta node_modules, por isso não precisamos especificar o diretório de 'discord.js'

> A função de import foi uma facilidade trazida pela ES6, mas ainda não sei usar muito bem, então se quiserem podem tentar usar :S

Agora que temos as funcionalidades de discord.js no nosso arquivo, precisamos usar a principal delas, que cria uma instância de client discord que fará nosso bot ficar online, ler e enviar mensagens, entrar nos canais etc
Como padrão e demonstrado na [Documentação](https://discord.js.org/#/), usaremos a constante client para definir essa instância.

    const client = new Discord.Client()
Se dermos um *console.log(client)*, da pra ver que ele é um objeto lotado de funções e informações que vamos usar a partir de agora.

***A partir de agora, é necessário que você tenha criado uma aplicação de BOT no site oficial do discord e tenha seu token em mãos, caso ainda não tenha feito, acesse*** [aqui](https://discord.com/developers/applications)

Com o seu token em mãos, vamos fazer uma configuração inicial de segurança. Esse token não deve ser publicado no git ou em nenhuma outra parte da internet, pois compromete sua conta e seu bot. Publicar ele no git fará que o discord imediatamente resete seu token para um novo (experiência própria :S)

Nessa parte, você pode ter 2 opções:
**dotenv** --> recomendado em projetos grandes, então é importante saber como funciona
**config.json** --> recomendado por mim, já que estamos apenas num projeto de estudo

> Procurem saber como funciona o dotenv e tentem usar no projeto de
> vocês, mas a forma que eu vou usar no tutorial vai  ser a de
> config.json pela praticidade e por não precisar instalar mais um
> pacote de dependências, mas ainda vamos usar ele futuramente.

Na pasta do seu projeto, crie uma pasta *"config"* e dentro dessa pasta crie um arquivo **config.json**, que será usado para armazenar configurações e informações do bot que não devem ficar na index.js
Dentro da sua config.json, crie uma variável como essa

    {
    "token":"seu-token-aqui"
    }

É claro que você pode adicionar mais informações, como por exemplo

    {
    "token":"seu-token-aqui",
    "prefix":"!",
    "autor":"vr3lxrd"
    }

Mas por enquanto, apenas o token basta. Agora, faça o require do arquivo config.json dentro da sua index, usando um conceito parecido com o discord.js, mas para ele precisamos definir o caminho do diretório, pois não está dentro da pasta node_modules, por exemplo

    const config = require('./config/config.json')

Após isso, adicione a pasta config na sua .gitignore, desse jeito, seu token não será enviado para o git.

**Ligando o bot**

Se você fez tudo certo e convidou o seu bot para um servidor, agora passamos para ver ele online na lista do servidor.
Usaremos uma função do client que chamamos acima, que é a **client.login('token-aqui')**, ela é responsável por fazer a comunicação entre seu código e a API do discord.

    const  Discord = require('discord.js')
    const config = require('./config/config.json')
    const  client = new  Discord.Client()
    
  
    client.login(config.token)

Se tudo estiver certo, você verá seu bot online e já poderá a começar a trabalhar totalmente com as funções do discord.js

## Continua... fazendo comandos