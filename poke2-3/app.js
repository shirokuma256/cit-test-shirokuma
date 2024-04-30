// 九九の表を生成する関数
function multiplicationTable() {
  let table = document.createElement('table');
  table.id = 'multiplication-table';

  // table要素を生成するループ
  for (let i = 1; i <= 12; i++) {
    let row = document.createElement('tr');
    for (let j = 1; j <= 12; j++) {
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
multiplicationTable();



// クリックイベントをセルに追加
document.addEventListener('DOMContentLoaded', function () {
    // テーブル要素を取得
    let table = document.getElementById('multiplication-table');
  
    // セルがクリックされたときの処理
    function handleCellClick(event) {
      // クリックされたセルのクラスを取得
      let clickedClass = event.target.className;
      
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
});

