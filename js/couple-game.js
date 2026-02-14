const questions = [
  {
    q: "ปกรชอบทีมอะไรมากที่สุด",
    c: ["แมนยู", "ลิเวอร์พูล", "เชลซี"],
    correct: 2, // ตอบข้อ 3
  },
  {
    q: "เค้าชอบเทอตอนไหนมากที่สุด",
    c: ["เทอนอน", "เทอกิน", "ทุกเวลา"],
    correct: 2, // ตอบข้อ 3
  },
  {
    q: "ถ้ามีเวลาว่าง 1 วันอยากทำไรด้วยกันมากที่สุด",
    c: ["ดูหนัง", "เล่นเกม", "เดินเล่น"],
    correct: 0, // ตอบข้อ 1
  },
  {
    q: "ของขวัญที่ดีที่สุดของเค้าคือ?",
    c: ["ดูบอลที่อังกฤษ", "play5", "เทอ"],
    correct: 2, // ตอบข้อ 3
  },
  {
    q: "เดทแรกเค้าจะพาไปที่ไหน?",
    c: ["ไปเดินห้าง", "ไปโอเพ่นเฮาส์", "พาไปดรีมเวิลด์"],
    correct: 1, // ตอบข้อ 2
  }
];


let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 3) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
