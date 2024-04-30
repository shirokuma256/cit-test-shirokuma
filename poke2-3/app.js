// 九九の表を生成する関数
function multiplicationTable() {
    const tableLength = 9; // 表の大きさ

    let table = document.createElement('table');
    table.id = 'multiplication-table';
    

    // table要素を生成するループ
    for (let i = 1; i <= tableLength; i++) {
    let row = document.createElement('tr');
    for (let j = 1; j <= tableLength; j++) {
        let cell = document.createElement('td');
        let cellClass = `cell-${i * j}`; // ユニークなクラス名を作成
        cell.textContent = i * j;
        cell.setAttribute('class', cellClass);
        row.appendChild(cell);
    }
    table.appendChild(row);
    }
    document.body.appendChild(table);
};

function generatePokeMode() {
    let pokeModeCheckBox = document.querySelector('#poke-mode');
    pokeModeCheckBox.addEventListener('change',  () => {
        console.log("pokeMode");
        let title = document.getElementById('title');
        
        let table = document.getElementById('multiplication-table');
        let cells = table.getElementsByTagName('td');
        let pokeMode = pokeModeCheckBox.checked;
        for (let i = 0; i < cells.length; i++) {
            let cell = cells[i];
            let cellClass = cell.getAttribute('class');
            if (pokeMode) {
                title.textContent = '🐭ポケトレ🐭';
                cell.textContent = '';
                cell.style.backgroundImage = `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cellClass.split('-')[1]}.png)`;
            } else {
                title.textContent = '🐹くくとれ🐹';
                cell.textContent = parseInt(cellClass.split('-')[1]);
                cell.style.backgroundImage = '';
            }
        }
    });
}


// 九九の問題を生成する関数
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 9) + 1; // 1から9までのランダムな数字
    const num2 = Math.floor(Math.random() * 9) + 1; // 1から9までのランダムな数字
    return { num1, num2, answer: num1 * num2 };
}

// 問題の表示・判定を行う関数
function displayQuestion(score) {
    // テーブル要素を取得
    let table = document.getElementById('multiplication-table');


    // 問題表示用の要素を取得
    const questionContainer = document.getElementById('question');
    const scoreContainer = document.getElementById('score');
    
    // 以前の問題をクリア
    questionContainer.innerHTML = '';
    scoreContainer.textContent = `得点: ${score}`;
    
    const question = generateQuestion();
    const questionText = document.createTextNode(`${question.num1} × ${question.num2}`);


    // セルがクリックされたときの処理
    function handleCellClick(event) {
        // クリックされたセルのクラスを取得
        let clickedClass = event.target.className;

        
        // クリックされたセルが正解かどうかをチェック
        // let userAnswer = parseInt(event.target.textContent); // valueから取得
        let userAnswer = parseInt(clickedClass.split('-')[1]); // クラス名から取得
        console.log(userAnswer);
        if (userAnswer === question.answer) {
            score += 10;
            
            displayQuestion(score); // 次の問題を表示
        } else {
            score -= 5;
        }
        requestAnimationFrame(() => {
            console.log(score);
            scoreContainer.textContent = `得点: ${score}`;
        });
        

        // すべてのセルを取得
        let cells = table.getElementsByTagName('td');
        
        // 全てのセルに対して処理を実行
        for (let i = 0; i < cells.length; i++) {
            let cell = cells[i];
            
            // クリックされたセルと同じクラスを持つかどうかをチェック
            if (cell.classList.contains(clickedClass)) {
                // クリックされたセルに.clickedクラスを追加
                cell.classList.add('clicked');
            } else {
                // クリックされたセルと異なるクラスを持つセルから.clickedクラスを削除
                cell.classList.remove('clicked');
            }
        }
    }
    table.addEventListener('click', handleCellClick);
    
    questionContainer.appendChild(questionText);
}



// クリックイベントをセルに追加
document.addEventListener('DOMContentLoaded', function () {
    // 九九の表を生成
    multiplicationTable();
    
    // ポケモンモードのチェックボックスを生成
    generatePokeMode()

    // 問題を表示
    displayQuestion(score = 0);
});

