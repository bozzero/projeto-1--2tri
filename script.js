const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: `"É fã de filme de terror? Adora ver os mais medrosos tomando sustos. Eles foram avisados, eles estavam condenados e, na sexta-feira, nada os salvará. Qual o nome do assassino de Sexta-feira 13? (1980)"`,
        alternativas: [
            {
                texto: "Pamela Voorhees",
                afirmacao: "afirmação"
            },
            {
                texto: "Jason Voorhees",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: `"Pânico 5. Vinte e cinco anos após uma série de crimes brutais chocar a tranquila Woodsboro, um novo assassino se apropria da máscara de Ghostface e começa a perseguir um grupo de adolescentes para trazer à tona segredos do passado mortal da cidade. Quem são os assassinos em Pânico 5?"`,
        alternativas: [
            {
                texto: "Richie e Amber",
                afirmacao: "afirmação"
            },
            {
                texto: "Wes e Mindy",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: `"Teste Terrortástico. Você é fã de filmes de terror? Prove acertando essas perguntas sobre os gêneros. Qual filme de terror se tornou um ícone LGBTQIA+ após a Netflix acidentalmente colocá-lo na categoria de filmes LGBTQIA?"`,
        alternativas: [
            {
                texto: "Invocação do Mal",
                afirmacao: "afirmação"
            },
            {
                texto: "Babadook",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: `"O Exorcista. Uma atriz vai gradativamente tomando consciência de que sua filha está tendo um comportamento assustador. Sua mãe pede ajuda a um padre, e este chega à conclusão de que a garota está possuída pelo demônio. No filme 'O Exorcista' (1973), qual o nome do demônio que possui a delegada Regan?"`,
        alternativas: [
            {
                texto: "Belzebu",
                afirmacao: "afirmação"
            },
            {
                texto: "Pazuzu",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: `"Filme de Terror. Desde 1996, Ghostface tem assombrado os telefones alheios e feito a icônica pergunta: 'Qual seu filme de terror favorito?' Porém, o assassino não se mantém apenas nessa curiosidade. Trazendo uma série de perguntas, entre fáceis e difíceis, o personagem sempre consegue surpreender suas vítimas."`,
        alternativas: [
            {
                texto: "Se prepare para uma ligação inesperada com esse quiz que irá desafiar seus conhecimentos sobre horror.",
                afirmacao: "afirmação"
            },
            {
                texto: "Preparado, não esqueça de compartilhar o seu resultado.",
                afirmacao: "afirmação"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
                
            
                
    
        
    
