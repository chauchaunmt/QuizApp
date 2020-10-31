const quizData = [
  {
    question: 'Tuấn xoá đi 1 trong 10 số nguyên dương liên tiếp. Tổng của 9 số còn lại bằng 2006. Hỏi Tuấn đã xoá đi số nào?',
    A: '218',
    B: '219',
    C: '220',
    D: '225',
    E: '227',
    correct: 'B'
  }, {
    question: 'Nếu trung bình cộng của 5 số nguyên liên tiếp bằng 12 thì tổng của số nhỏ nhất và số lớn nhất bằng bao nhiêu?',
    A: '24',
    B: '14',
    C: '12',
    D: '11',
    E: '10',
    correct: 'A'
  }, {
    question: 'Nếu a, b, c là các số thực dương thì a + 1/(b +1/c) bằng:',
    A: '(a + b)/c',
    B: '(ac + bc + 1)/c',
    C: '(abc + b + c)/c',
    D: '(a + b + c)/(abc + 1)',
    E: '(abc + b + c)/(abc + 1)',
    correct: 'E'
  }, {
    question: 'Hùng nói về tủ sách của mình: “Đúng 25% số sách trong tủ sách của tôi là tiểu thuyết và đúng 1/9 số sách là thơ”. Nếu Hùng có khoảng từ 50 đến 100 cuốn sách thì hỏi Hùng có chính xác bao nhiêu cuốn sách?',
    A: '50',
    B: '54',
    C: '64',
    D: '72',
    E: '93',
    correct: 'D'
  }, {
    question: 'Nếu x, y, z là các số nguyên dương phân biệt nhỏ hơn 10 thì đại lượng (x-y)/z có thể nhận giá trị lớn nhất bằng',
    A: '4',
    B: '5',
    C: '6',
    D: '7',
    E: '8',
    correct: 'D'
  }, {
    question: 'Nếu 45% của n là 405 thì 35% của n là?',
    A: '61',
    B: '64',
    C: '142',
    D: '250',
    E: '315',
    correct: 'E'
  }, {
    question: 'Chiếc đồng hồ nhắc việc cứ 15 phút lại reo 1 lần. Nếu đồng hồ đã reo vào lúc 2:40 thì thời điểm nào dưới đây là thời điểm mà đồng hồ có thể reo?',
    A: '4:05',
    B: '5:30',
    C: '6:45',
    D: '7:15',
    E: '8:10',
    correct: 'E'
  }, {
    question: 'Số nào khác tính chất với các số còn lại? 9678, 4572, 5261, 3527, 6895, 7768',
    A: '9678',
    B: '4572',
    C: '5261',
    D: '3527',
    E: '7768',
    correct: 'D'
  }, {
    question: 'Năm ngoái, tỷ lệ lạm phát là 1,2%, nhưng năm nay đã là 4%. Chúng ta có thể kết luận rằng lạm phát đang có xu hướng tăng và tỷ lệ này sẽ còn cao hơn trong năm tới. Điều nào sau đây, nếu đúng, làm suy yếu nghiêm trọng kết luận trên?',
    A: 'Các số liệu lạm phát được tính toán dựa trên một mẫu dữ liệu kinh tế đại diện hơn là tất cả các dữ liệu có sẵn.',
    B: 'Năm ngoái, giá dầu giảm đã đưa lạm phát tạm thời xuống dưới mức ổn định hàng năm gần đây là 4%.',
    C: 'Mức tăng lương của một số công nhân gắn liền với mức độ lạm phát và với tỷ lệ lạm phát là 4% hoặc cao hơn, những khoản tăng lương này tạo thành một lực gây ra lạm phát hơn nữa.',
    D: 'Tỷ lệ lạm phát 1,2% năm ngoái là mức thấp nhất trong 10 năm.',
    E: 'Sự can thiệp của chính phủ không thể ảnh hưởng đến tỷ lệ lạm phát ở bất kỳ mức độ đáng kể nào.',
    correct: 'B'
  }
];

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.A;
  b_text.innerText = currentQuizData.B;
  c_text.innerText = currentQuizData.C;
  d_text.innerText = currentQuizData.D;
  e_text.innerText = currentQuizData.E;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if(answerEl.checked)
      answer = answerEl.id;
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  })
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if(answer) {
    if(answer === quizData[currentQuiz].correct)
      score++;
    currentQuiz++;
    if(currentQuiz < quizData.length)
      loadQuiz();
    else
      quiz.innerHTML = `<h2>Bạn trả lời ${score}/${quizData.length} câu đúng!</h2><button onclick="location.reload()">Thoát</button>`;
  }

})