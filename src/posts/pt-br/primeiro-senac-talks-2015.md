<!--
layout: post
title: Primeiro Senac Talks 2015
date: 2015-03-15T02:42:16.842Z
comments: true
published: true
keywords:
description: Encontro promovido pela Faculdade de Tecnologia SenacRS afim de discutir inovação, tecnologia e tendencias de mercado.
categories: senacTalks, senacRS, eventos
cover: /images/senac-talks-2015-1/cover.jpg
coverAlt: Primeir Senac Talks 2015
-->

Senac Talks é um evento promovido pela [Faculdade de Tecnologia Senac RS](https://www.senacrs.com.br/), ele vem com a intenção de promover discuções sobre tecnologia, mercado de trabalho e o que <!--more--> acontece nesse mundo.

Esse foi o primeiro encontro desse ano, e só para não fugir do caminho certo, rolou muita cafeína e ideia sobre tecnologia.

Bora dar um checkin no que rolou nessa parada.

![Iniciando primeiro Senac Talks 2015](/images/senac-talks-2015-1/senac-talks-1.jpg)


## TDD e Frameworks de Testes

* __Nome:__ Alexandre Rodrigues
* __facebook/tweeter:__ [alexandre.rodrigues.poa](https://www.facebook.com/alexandre.rodrigues.poa)

![TDD e Frameworks de Testes - Alexandre Rodrigues](/images/senac-talks-2015-1/senac-talks-2.jpg)


* Inicia falando que TDD não é sinônimo de teste unitário
* Não é codificar depois de testar
* Não é criar testes pra tudo
* Não é aumento de tempo no projeto

Então o que é TDD?

Test Driven Development (desenvolvimento guiado por testes)

* É ganho de produtividade
* É simplificação do projeto
* É facilidade de alteração
* É ganho de confiança
* É aumento de qualidade

TDD na verdade é uma forma de projetar software, explicou um pouco sua especificação, que é baseado em um ciclo de repetições.

* calcular média arítmétrica
* calcular média móvel

Fala sobre alguns frameworks de testes, mais voltado para o JAVA, dando exemplo do:

* JUnit
* PowerMock

Fala sobre um método que é STATIC e você pode dizer quando ele tem que ser executado.

* before - executa antes dos testes
* after - executa depois dos testes

### Passos do teste

#### RED
Quando criamos o teste, axecutamos e ele irá nos retornar um erro.

#### GREEN
É ter o feedback mais rápido possível de que nosso teste está validando nosso código

#### Passou os testes
Agora é hora de fazer isso tudo funcionar de forma correta.

Pra vermos isso na prática, nos mostrou Slides em JAVA mostrando como é o jeito errado e certo, nesse caso o errado eram testes que poderiam pensar que eram, mas não eram TDD.

Agora falando sobre __pós-condição__, que é uma declaração como o mundo deve parecer após a execução de uma operação.

__Pré-condição__, é uma declaração de como esperamos que o mundo seja antes de executarmos uma operação, no caso da média, é o conjunto de valores que deve conter pelo menos dois elementos.

__Inrivariante__, é uma condição que a classe deve respeitar para não se tornar inválida.

E no final de tudo, vamos pro código com seus exemplos e explicações sobre alguns frameworks.

## Resumo
TDD não é simplesmente testar código,ele é baseado em um conceito e processo diferenciado. Muito ao contrário do que a maioria pensa, TDD não é perda de tempo, prejuízo do projeto. Na verdade TDD não é um processo de 3 passos, é mais para 6 passos como

* Adicione um teste
* Execute todos os testes e veja se algum deles falha
* Escrever código
* Execute os testes automatizados e veja-os executarem com sucesso
* Refatorar código
* Repita tudo


## Histórias de Usuário - Por que e Como Escrever Requisitos de Forma Ágil?
* __Nome:__ Rafael Helm
* __facebook/tweeter:__ [rafael.helm](https://www.facebook.com/rafael.helm)

![Rafael Helm - Histórias de Usuário](/images/senac-talks-2015-1/senac-talks-3.jpg)

Começa iniciando falando sobre o porque de histórias de usuário.

* code1 -> teste1
* code2 -> teste1, teste2
* code3 -> teste1, teste2, teste3

Por isso que existe a importância de testes automatizados, já pensou a cada código escrito ter que criar a mão um novo teste?!

Frequencia de utilização de Funcionalidades.



* 7% - sempre
* 13% - frequentemente
* 16% - às vezes
* 19% - raramente
* 45% - nunca

Geralmente pro usuário final, apenas 36% do que foi desenvolvido é o que realmente importa.

Quem nunca teve que arrumar uma tela que todo mundo usa e quando vemos quebramos uma tela que ninguém usa, e por não termos tanta certeza acabamos indo lá arrumar.

Nessa palestra as anotações será um pouco menor, por ser uma talk com um espaço mais aberto para debates.

O foco essa talk é contar histórias e como devemos agir perante tais situções.

O projeto não se inicia no código, e sim em cima de uma análise complexa e dismiuçada do que realmente o nosso cliente precisa.

Uso clássico é o cliente pedir:

* Eu quero batatas fritas e uma coca-cola.

Nosso papel nessa hora é questioná-lo.

* Certeza que você deseja isso? Batata frita tem muita gordura, no lugar da coca-cola não acha melhor um suco?

Objetivo desse exemplo é mostrar que muitas vezes pegamos e desenvolvemos coisas que não é o que realmente o cliente precisa, isso já faz nascer falho o projeto juntamente com um dinheiro investido de forma errada.

#### Como deve funcionar nossas hitórias?!?!

* independente
* negociável
* deve agregar valor
* estimável
* pequena
* testável

## Resumo

Esta não foi uma palestra muito técnica, conversamos bastanta sobre os erros que cometemos já logo no início dos projetos mostrando que já na hora qual conversamos com cliente não descobrimos realmente o que ele precisa.

Também foi abordado maneiras de gerenciar os projetos, maneiras e técnicas para estimar o esforço.


## Smartcam: Construindo uma câmera que veja as pessoas
* __Nome:__ Rafael Jeffman
* __facebook/tweeter:__ [rafael.jeffman](https://www.facebook.com/rafael.jeffman)

![Rafael Helm - Histórias de Usuário](/images/senac-talks-2015-1/senac-talks-4.jpg)

Incia falando sobre o objetivo do projeto. Hoje as cameras tiram foto, sabem que é pessoa mas não nos dizem quem ela realmente é:

* qual sua etnia?
* qual a reação dela sobre o produto que está olhando?

isso entre outras perguntas...

### Objetivo


* Identificar características da pessoa a partir de uma imagem
* Criar um perfil do consumidor.

explica um pouco sobre as limitações do processo e do que gostariam como fosse, isso está entre.

* baixo custo
* pouco gasto de energia
* não precisar espalhar computadores por todos lados

Foi usado pra desenvolver um Raspberypy de 800MhZ, 512RAM e com isso tem um bom processamento e não dependemos e cooler pra refrigerar.

Essa foi uma talk que chamou bastante atenção, a partir desse momento o Rafael começou explicar e nos mostrar um pouco dessa tacnologia.

O programa escrito, teve como escolha Python como sua linguagem principal, apresentava uma sintaxe incrívelmente simples e legível, mas isso não foi o carro chefe pra sua escolha.

Foi feito testes como com C/C++ também, mas como em termos de performance não mostrou tamanha diferença e juntando a sintaxe mais complexa do C/C++, eleacabou perdendo na decisão.

Hoje a smart cam já sabe identificar o sexo da pessoa, mas ainda está sendo trabalho para conseguir cada vez mais nos trazer informações.


## Resumo

Foi apresentado um projeto com capacidade benéfica fora do comum, centro coméciais poderiam contabilizar comportamentos para cada estilo de pessoa, assim proporciando cada vez um ambiente melhor e produtos direcionados.

Em uma faculdade usar como sistema de chamada, nos daria acréscimo de tempo pelo fato de não precisar interromper a aula para realizar a chamada.

Isso seria um pedacinho em um mar de benefícios que teriamos.


-----

## Resumo Geral

Até então nunca tinha ido em um dia acadêmico, foi uma manhã bem massa e que valeu a pena ter acordado cedinho em um final de semana.

Era uma galera bastante focada e interessada no assunto que estava rolando.

Palestrantes com um alto nível de conhecimento, compartilhando seus conhecimentos é sempre demais, mesmo não sendo um evento que se auto declara Open Soure, aí está mais uma vez a prova, a cultura ao Open Source juntando cabeças pra continuar a evolução. 
