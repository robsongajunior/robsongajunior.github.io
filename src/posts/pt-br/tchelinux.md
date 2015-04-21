<!--
layout: post
title: TcheLinux
date: 2014-12-10T15:12:30.265Z
comments: true
published: true
keywords:
description:  __TchêLinux__ caiu exatamente uma semana depois da __#JSCONFAR__, fui em um clima de um evento mais light para oficialmente fechar o ano.
categories: Linux, Unix, TcheLinux, TcheLinux2014, 2014
cover: /images/tchelinux-2014/tchelinux-cover.jpg
coverAlt: Tche Linux 2014
-->

O __TchêLinux__ caiu exatamente uma semana depois da __#JSCONFAR__, fui em um clima de um evento mais light para oficialmente fechar o ano. Hoje posso falar que esse evento teve um gostinho <!--more-->especial, não por ele em sí, mas pelo fato de ter levado um amigo, onde foi seu primeiro contato com a comunidade e eventos.

Sendo bem sincero nosso __TchêLinux__ do dia 06/12 começou no dia 05/12 as 23h, quando o [Gabi](https://www.facebook.com/umgab) chegou lá em casa e começamos ter um papo alto nível sobre: Futuro, tecnologia, empresas e coisas afins.

![Inciando os trabalhos TcheLinux](/images/tchelinux-2014/tchelinux-presabado.jpg)

Isso me deu um gás pra ir no evento, afinal nunca botei fé em eventos ou qualquer coisa que fosse gratuita, afinal __Open Source/Free__ tem uma _diferença_ enorme para a palavra __grátis__.

##Checkin
Bom, sabadão 8:30h da manhã lá estávamos nós na [Faculdade de Tecnologia Senac](http://www.senacrs.com.br/).

De início tudo pareceu desorganizado, não tinha ninguém realizando os checkins e muito menos, recebendo os 2kg de alimentos que os participantes estavam levando. Uma galera perdida, e até então foi o único evento que participei onde se encontrava aquela desordem toda, senti falta na hora do [Guilherme Mar](https://www.facebook.com/guilhermemar), tenho certeza que ele teria dado um carinho maior.

Beleza, não iriámos embora por isso, afinal não estávamos ali pra prestigiar ninguém além de ver o que as féras tinham pra nos passar.

Bom, deixando esses pequenos detalhes de lado e indo para o que realmente interessa, vou falar um pouco do que anotei nas talks que participei.

##Talks - Manhã

###Git, O Universo e tudo mais
* Palestrante: [Matheus Pereira](https://www.facebook.com/matheper)

Inicia falando da importância do controle de versão, nesse caso citando serviços como [GitHub](https://github.com) e [Bitbucket](https://bitbucket.org/).

Muitas vezes mudamos o código, depois de uma semana queremos saber o que fizemos e se o nosso código não estiver versionado, não saberemos indentificar o que atualizamos ou depreciamos.

Git tem uma super vantagem perante outras tecnologias, uma das principais vantagens está o fato de podermos trabalhar com ramificacoes(branch), nos permite pegar um código fazer o espelhamento dele, a partir dai começamos a trabalhar nele.

Outra vantagem da tenologia Git, é o fato de porder commitar suas alterações offline, assim que tivermos conexão com a internet podemos fazer o push para subir as modificações.

Após explicar sobre a tecnologia Git, começa nos mostrar e falar sobre alguns poderes que ele também nos fornece, como integração com [Heroku](https://www.heroku.com/), mostrando que podemos fazer uma integração contínua, assim termos um robosinho trabalhando no nosso processo de compilação e deploy.

Agora é a parte que ele abre o terminal e mostra a melhor parte, o código mostrando alguns processos como.

* git clone
* git branch/git checkout
* git remote
* git status
* git add
* git commit
* git push

#Melhorando sua vida com Shell script e Expect
* Palestrante: __Carlos Alberto Parisotto__

Fala de como podemos customizar nosso dia a dia com _shell script_,
usa de exemplos rotinas que executamos toda mês, semana ou até dia.

Usou o exemplo de assim que instalamos um Linux em nosso computador, a partir disso por simples comandos podemos definir o que queremos, se _ubuntu-desktop_ ou um _server_, como tambem coisas que usamos.

A partir do que explicou a cima mostrou alguns comandos como:

* ls
* cd
* mkdir
* grep
* sed
* top
* kill/killall

Entre outros.

Agora mostrando na prática ele mostra como criar variáveis e disparar comandos a partir delas.

``` bash
var1=50
echo "Digite um valor para a variavel 2"
read var2
var3=`ls`
```

Após uma sequência de exemplos de customizações o assunto muda para como fazer condições e laços de repeticção, mas nunca deixando passar o fato de que o shell lê linha a linha, se referindo a uma programação que não está usando funções para direcionar sua rotina. Alertando que não adianta chamar uma função caso ela não foi já lida anteriormente.

Um pouco mais a frente fala sobre expects e em que casos de uso se usa esse conceito.

Um passo a frente da uma pequena amostra de como podemos sacanear as pessoas através de simples scripts. (brincadeiras a parte)

Após um código _shell_ ser executado poderia tranaquilamente fazer a tecla _print_ desligar seu computador.

#### Almoço
Um fato muito interessante foi que no final dessa palestra um dos que estavam assistindo a palestra perguntou para o [Rafael Jeffman](https://twitter.com/rafasgj) se ele ela um dos organizadores e simplesmente tomou como resposta.

__"Não sou um dos, eu sou O organizador".__

Logo a mais perguntei:
- Onde que os palestrantes e a organização irão almoçar? Assim poderiamos trocar uma idéia.

Como resposta:
__Escuto resmungos e costas virada caminhando rumo a saida__.

Isso incomodou a mim e também quem estava ali ao redor que presenciou tal cena.
Bom, fui almoçar com o amigo [Gabi](https://www.facebook.com/umgab) e o brother [Atziel](https://twitter.com/atzieldelavi) que trabalha na mesma empresa que eu, ignorando tamanha arrôgancia.


##Talks - Tarde

###TDD - Desenvolva com confiança
* Palestrante: [Marcelo Guilherme Jacobus Jr](https://www.facebook.com/profile.php?id=100003494649270&fref=ts)

Nos explica sobre a importância de testar, começa usando exemplo
de envio de e-mail e tambem uso do variados browsers.

Todo mundo odeia testar, mas é um mau necessário, evita retrabalho, assegura qualidade no projeto e consistência.

O TDD possui três estágios.
Red - Green - Refactor

* __Red:__ momento em nosso código não está funcionando, precisamos que nosso codigo saia falhando do teste, isso não é errado e muito pelo contrário, é o que deve realmente acontecer;
* __Green:__ - Escrever o código mais simples possivel pra fazer aquele teste passar;
* __Refactor:__ - Simplifique se possível, rodar o teste a cada pequena alteração, assim tendo certeza que os testes continuem passando.

Começa mostrar um start de um projeto MVC com um helper, esse helper serve pra construir uma rota.

__[LIVE CODE]__

# XSS - Da Exploração ao Ataque
* Palestrante: [Matheus Carvalho](https://www.facebook.com/go.matheus)

Começa explicando principais falhas de XSS.

Um caso muito comum é quando se dispara um POST, ou até mesmo um sistema de comentários.

XSS é injeção de script pelo lado cliente. Podendo um pequeno script virar em um enorme potêncial de destruição.

Algumas principais características:
* Sempre executado Cliente Side
* Detecçao - analise de código
    * Ferramentas de auditoria
* Principais casos de XSS
    * Stored
    * Reflected

##Stored
Também chamado como persistente, envolve manipulação de dados no Servidor, pois o codigo malicioso vai ficar "hospedado" na aplicaçao, todos que entrarem na aplicacao irao sofrer XSS.

##DOM_Based XSS
Já foi bastante relevante mas hoje não é muito.
Basicamente cliente side, manipulaçcao no ambiente do Browser, para que um JS ou um código cliente-side legitimo, rode de maneira legitima.

###Formas de detecçcao
* Analise de codigo
* Ferramentas de auditoria
    * w3af
    * acunetix (so roda em Windows)
    * Vega "complemento"
    * Nikto "complemento"
* set - social enginner

###Mesa Redonda - O que o Open Source fez para minha carreira?
![TcheLinux - Mesa redonda](/images/tchelinux-2014/tchelinux-mesaredonda.jpg)

Foi a melhor parte do evento, pra mim e muitos que conversei logo após.
Ver a galera old school e ouvir seus concelhos e como era nas antigas faz nos pensar cada vez que o Open Source  é o futuro.

Lá me indentifiquei com várias etapas que passei, alguma até dentro da própria família, como:

* Se trabalha por dinheiro, você é burro por não fazer freela;
* Recusar empresa que ofereceu 1.000 a mais? Você é burro? ;
* Se trabalha em empresa que pagar mais;
* Você não entende de mercado;
* O Alan(primeiro chefe, onde iniciei carreira) te suga, você é burro por trabalhar de graça;

Lá ouvi frases como:

* Você deseja mesmo ser destacado na área? Então bata na porta de uma empresa que apoia a causa e pede para varrer o chão;
* Pude ver o horizonte pq subi nos ombros de gente grande.
* Se não fosse o Open Source, metade do que existe hoje não existiria;
* Quem não apoia é limitado ou estão tentando crescer em cima de roubo ntelectual;
* Pessoas como nós, sentem necessidade de aprender algo novo todos os dias.
* Todo mundo aqui usa e ninguem morreu por isso!
* Sou usuário de software livre e não consigo largar. [#getup](https://getupcloud.com/index.html)

## Resumo
Apesar de grosserias do organizador foi um dia muito feliz pois fui pra casa com a missão cumprida, consegui mostrar pra uma pessoa de fora da comunidade o que isso é de verdade e ela não irá mais sair. Isso me faz arrepiar quando lembro.

Ouvir a old school mostrou que, mesmo nas antigas tem loucos como nós, que realmente acreditaram nas coisas, que isso ninguém pode nos tirar mesmo sendo, amigos, parentes ou chefes.

Venha para comunidade, você realmente só sabe o que é depois que entra, e quando entrar nunca mais vai querer sair.

Seja humilde, você não precisa está no foco para que as pessoas te respeitem e te admirem.

E claro, pra finalizar o dia de palestras, eu e o brother [Gabi](https://www.facebook.com/umgab), partimos pra aquele chopp com a sensação... __Que venha 2015!__


![Fechando os trabalhos TcheLinux](/images/tchelinux-2014/tchelinux-cerveja.jpg)

