const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

// '아니' 버튼 도망가기
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// '응' 버튼 클릭 시
yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});
