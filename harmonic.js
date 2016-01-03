/* exported Harmonic */
/* global __HARMONIC */

// Note: `__HARMONIC` is not an actual identifer,
// it is the prefix of `harmonic build`'s substitution patterns.
// The substitution patterns look like a property access so that
// we can just whitelist `__HARMONIC` as a global identifier
// instead of having to whitelist every single substitution.

// TODO ESLint's `exported` directive seems to not be working correctly
// with the current version.
// We should probably `export` Harmonic using ES2015 module syntax and
// trash the `exported` directive.
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Harmonic = (function () {
    // eslint-disable-line no-unused-vars

    function Harmonic(name) {
        _classCallCheck(this, Harmonic);

        this.name = name;
    }

    _createClass(Harmonic, [{
        key: "getConfig",
        value: function getConfig() {
            return {"index_posts":999,"name":"Robson Júnior","title":"Robson Júnior","domain":"http://robsongajunior.github.io/","subtitle":"Orgulhosamente criado com Harmonic","author":"@robsongajunior","description":"Aqui conto o que acontece na minha carreira, o que estudo e tudo que venho aprontando no mundo developer.","bio":"Estudando de Análise e Desenvolvimento de Sistemas, Analísta e Developer na empresa Terra Networks e membro da organização JSRocks. Atualmente resido na imensidão da Weblandia","theme":"harmonic-theme-robsonjunior","preprocessor":"less","posts_permalink":":language/:year/:month/:title","pages_permalink":"pages/:title","header_tokens":["<!--","-->"],"i18n":{"default":"pt-br","languages":["pt-br"]}};
        }
    }, {
        key: "getPosts",
        value: function getPosts() {
            return {"pt-br":[{"layout":"post","title":"Retrospectiva 2015","date":"2015-12-30T23:26:27.029Z","comments":"true","published":"true","keywords":"","description":"2015 foi um ano incrível, e eu não poderia deixar de contar como foi tudo isso.","categories":["2015","retrospectiva"],"cover":"/images/retrospectiva-2015/cover.jpg","coverAlt":"Capa Retrospectiva 2015","content":"<p>Quando 2015 começou, eu já tinha uma leve sensação que seria um ano diferente. \nTinha planos para o trabalho, eventos fora do estado que gostaria de participar e \numa lista grande de coisas para estudar. </p>\n","file":"src/posts/retrospectiva-2015.md","filename":"retrospectiva-2015","link":"2015/12/retrospectiva-2015","lang":"pt-br"},{"layout":"post","title":"Sonho vs Mediocridade","date":"2015-09-02T05:36:34.148Z","comments":"true","published":"true","keywords":"","description":"","categories":["Motivação"],"cover":"/images/sonhos-vs-mediocridade/cover.jpg","coverAlt":"Sonhos vs Mediocridade","content":"<p>Resolvi escrever esse texto para poder descrever o que sinto em relação quando uma pessoa me pergunta algo sobre sucesso, carreira etc ...</p>\n<p>Sempre achei   isso uma pergunta idiota, afinal </p>\n","file":"src/posts/sonho-vs-mediocridade.md","filename":"sonho-vs-mediocridade","link":"2015/09/sonho-vs-mediocridade","lang":"pt-br"},{"layout":"post","title":"HackInPoa - 2015","date":"2015-04-22T02:07:17.842Z","comments":"true","published":"true","keywords":"","description":"Encontro promovido pela globo.com, com objetivo de Boas vindas ao seu novo escritórtio em Porto Alegre..","categories":["HackInPOA","Globo.com","Hackaton"],"cover":"/images/hackinpoa/cover.jpg","coverAlt":"HackInPoa - 2015","content":"<p><img src=\"/images/hackinpoa/hackinpoa.jpg\" alt=\"Banner HackInPOA\"></p>\n<p>Como <strong>boas vindas</strong> em Porto Alegre, nos dias 11 e 12 de abril, a <a href=\"http://www.globo.com/\">Globo.com</a> organizou um hackton para galera, mas não tinha só pessoas da capital fazendo barulho, o evento bombou </p>\n","file":"src/posts/hackinpoa.md","filename":"hackinpoa","link":"2015/04/hackinpoa","lang":"pt-br"},{"layout":"post","title":"Primeiro Senac Talks 2015","date":"2015-03-15T02:42:16.842Z","comments":"true","published":"true","keywords":"","description":"Encontro promovido pela Faculdade de Tecnologia SenacRS afim de discutir inovação, tecnologia e tendencias de mercado.","categories":["senacTalks","senacRS","eventos"],"cover":"/images/senac-talks-2015-1/cover.jpg","coverAlt":"Primeir Senac Talks 2015","content":"<p>Senac Talks é um evento promovido pela <a href=\"http://www.senacrs.com.br/\">Faculdade de Tecnologia Senac RS</a>, ele vem com a intenção de promover discuções sobre tecnologia, mercado de trabalho e o que </p>\n","file":"src/posts/primeiro-senac-talks-2015.md","filename":"primeiro-senac-talks-2015","link":"2015/03/primeiro-senac-talks-2015","lang":"pt-br"},{"layout":"post","title":"Retrospectiva 2014","date":"2014-12-21T22:44:52.194Z","comments":"true","published":"true","keywords":"","description":"2014 simplesmente foi um ano fantástico, me proporciou experiências que eu pensava que iria muitos anos para acontecer","categories":["retrospectiva-2014","2014"],"cover":"/images/retrospectiva-2014/cover.png","coverAlt":"Robson Júnior - Retrospectiva 2014","content":"<p>2014 simplesmente foi um ano fantástico, me proporciou experiências que eu pensava que iria muitos anos para acontecer, conheci pessoas que nunca pensei que poderia e vi coisas </p>\n","file":"src/posts/retrospectiva-2014.md","filename":"retrospectiva-2014","link":"2014/12/retrospectiva-2014","lang":"pt-br"},{"layout":"post","title":"TcheLinux","date":"2014-12-10T15:12:30.265Z","comments":"true","published":"true","keywords":"","description":"__TchêLinux__ caiu exatamente uma semana depois da __#JSCONFAR__, fui em um clima de um evento mais light para oficialmente fechar o ano.","categories":["Linux","Unix","TcheLinux","TcheLinux2014","2014"],"cover":"/images/tchelinux-2014/tchelinux-cover.jpg","coverAlt":"Tche Linux 2014","content":"<p>O <strong>TchêLinux</strong> caiu exatamente uma semana depois da <strong>#JSCONFAR</strong>, fui em um clima de um evento mais light para oficialmente fechar o ano. Hoje posso falar que esse evento teve um gostinho </p>\n","file":"src/posts/tchelinux.md","filename":"tchelinux","link":"2014/12/tchelinux","lang":"pt-br"},{"layout":"post","title":"JSConfAR Épica","date":"2014-12-02T00:08:05.467Z","comments":"true","published":"true","keywords":"","description":"Toda essa ideia de ir para a JSConfAr surgiu em uma loucura quando saiu a grade das palestras.","categories":["eventos","javascript","jsconfar"],"cover":"/images/jsconfar-2014/jsconfar-cover.jpg","coverAlt":"JS Conf BS AS | Javascript","content":"<p>Toda essa ideia de ir para a JSConfAr surgiu em uma loucura quando saiu a grade das palestras, olhando vi que só palestrante que quebrariam a banca lá nos hermanos, logo</p>\n","file":"src/posts/jsconfar-epica.md","filename":"jsconfar-epica","link":"2014/12/jsconfar-epica","lang":"pt-br"},{"layout":"post","title":"O primeiro a gente nunca esquece","date":"2014-11-03T02:32:24.842Z","comments":"true","published":"true","keywords":"","description":"Sabe aquela primeira namorada, primeiro trabalho ou até mesmo aquele primeiro Hello World?","categories":["primeiro","first"],"cover":"/images/o-primeiro-a-gente-nunca-esquece/main-banner.jpg","coverAlt":"Robson Junior Cover | Javascript","content":"<p>Sabe aquela primeira namorada, primeiro trabalho ou até mesmo aquele\nprimeiro Hello World?</p>\n<p>Pois é, a gente nunca esquece né?!</p>\n<p>Nesse caso o que vou falar nesse post é a mesma sensação. </p>\n","file":"src/posts/o-primeiro-a-gente-nunca-esquece.md","filename":"o-primeiro-a-gente-nunca-esquece","link":"2014/11/o-primeiro-a-gente-nunca-esquece","lang":"pt-br"}]};
        }
    }, {
        key: "getPages",
        value: function getPages() {
            return {};
        }
    }]);

    return Harmonic;
})();