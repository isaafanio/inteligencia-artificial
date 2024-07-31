const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os principais fatores que determinam a classe social de uma pessoa?",
        alternativas: [
            {
                texto: "Renda, educação, propriedade de bens",
                afirmacao: "São grupos de indivíduos que partilham de uma posição similar nas relações de produção. "
            },
            {
                texto: "Personalidade, preferencias pessoais, religião",
                afirmacao: "A classe social também é uma dimensão política"
            }
        ]
    },
    {
        enunciado: "Você acredita que a educação pode ser um fator determinante para ascensão social?",
        alternativas: [
            {
                texto: "Sim, acredito que a educação é crucial para ascensão social",
                afirmacao: "A educação fornece as habilidades e conhecimentos necessários para acessar melhores oportunidades de emprego e sálarios mais altos."
            },
            {
                texto: "Não, acho que a educação sozinha não é o suficiente para garantir a ascensão social ",
                afirmacao: "Embora a educação seja importante, outros fatores como rede de apoio, condições economicas, didscriminação social e acesso a oportunidades também desemprenham papéis cruciais."
            }
        ]
    },
    {
        enunciado: "Qual é a diferença entre classe social e status social?",
        alternativas: [
            {
                texto: "A classe social está mais relacionada a fatores econômicos e ocupacionais, enquanto o status social envolve a posição hierarquia.",
                afirmacao: "Pode ser influenciada por prestígio, que honra e respeito, além da riqueza."
            },
            {
                texto: "A classe social está relacionada a raça e a relígião e o status social a hierarquia da pessoa",
                afirmacao: "Influencia ma hierquia da família e o fator econômico."
            }
        ]
    },
    {
        enunciado: "Quais são os impactos da desigualdade social nas classes sociais?",
        alternativas: [
            {
                texto: "Pode levar á disparidade na distribuição de recursos e oportunidades.",
                afirmacao: "Criam barreiras significativas para a mobilidade social e perpetuando a divisão entre as classes"
            },
            {
                texto: "A desigualdade social não tem impactos significativos na sociedade",
                afirmacao: "tem as mesmas oportunidades de sucesso idependente da sua classe"
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();