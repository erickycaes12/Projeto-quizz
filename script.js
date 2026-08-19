const questions = [
  {
    question: "O que é o racionamento e a interrupção frequente no fornecimento de água potável no bairro?",
    options: [
      "Um evento normal que ocorre em todas as cidades modernas",
      "Uma falha na infraestrutura básica e gestão de recursos hídricos",
      "Uma medida para incentivar as pessoas a beberem menos água",
      "Um problema exclusivo dos períodos de chuva intensa"
    ],
    answer: 1,
    explanation: "A falta de água reflete problemas de infraestrutura, planejamento urbano e conservação dos mananciais locais."
  },
  {
    question: "Quais são os principais impactos das quedas constantes de energia elétrica na rotina da comunidade?",
    options: [
      "Apenas a necessidade de acender velas à noite",
      "Aumento na durabilidade dos aparelhos eletrodomésticos",
      "Prejuízos financeiros, perda de alimentos e risco à segurança pública",
      "Melhoria na qualidade do sinal de internet"
    ],
    answer: 2,
    explanation: "A instabilidade elétrica queima equipamentos, prejudica o trabalho local e afeta o funcionamento de serviços essenciais."
  },
  {
    question: "A ausência de saneamento básico adequado na região afeta diretamente:",
    options: [
      "Apenas o valor do IPTU da residência",
      "A saúde da população, aumentando o risco de doenças de veiculação hídrica",
      "Somente o trânsito de veículos nas vias principais",
      "A velocidade das redes Wi-Fi da comunidade"
    ],
    answer: 1,
    explanation: "Sem esgoto tratado e água encanada, a proliferação de doenças aumenta consideravelmente entre os moradores."
  },
  {
    question: "Qual atitude comunitária ajuda a combater o alagamento de ruas durante tempestades?",
    options: [
      "Descartar entulho e lixo doméstico nos terrenos baldios",
      "Evitar o descarte incorreto de lixo nas calçadas e bueiros",
      "Vedar completamente as caixas-d'água das residências",
      "Desligar o disjuntor principal da residência durante a chuva"
    ],
    answer: 1,
    explanation: "O lixo jogado nas ruas entope bueiros e galerias, agravando os alagamentos nos bairros."
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => selectOption(index);
    optionsEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function selectOption(index) {
  const q = questions[currentQuestion];
  const buttons = optionsEl.querySelectorAll("button");
  
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.style.backgroundColor = "#38a169"; // Verde para correto
    } else if (idx === index) {
      btn.style.backgroundColor = "#e53e3e"; // Vermelho para incorreto
    }
  });

  if (index === q.answer) score++;
  
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz").style.display = "none";
  resultEl.style.display = "block";
  resultEl.innerText = `Você acertou ${score} de ${questions.length} perguntas! A conscientização sobre os problemas do nosso bairro é o primeiro passo para cobrarmos melhorias.`;
}

loadQuestion();