// 正解は「プロトタイピング」（インデックス3）
const correctAnswer = 3;

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const resultElement = document.getElementById('result');
    
    if (!selectedOption) {
        alert('選択肢を選んでください。');
        return;
    }
    
    const userAnswer = parseInt(selectedOption.value);
    
    // 結果を表示
    if (userAnswer === correctAnswer) {
        resultElement.innerHTML = '<div class="result correct">正解です！</div>';
    } else {
        resultElement.innerHTML = '<div class="result incorrect">不正解です。正解は「プロトタイピング」です。</div>';
    }
}
