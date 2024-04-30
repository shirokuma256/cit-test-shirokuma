// Create a multiplication table with 12 rows and 12 columns.
function multiplicationTable() {
  let table = document.createElement('table');
  table.id = 'multiplication-table';



  for (let i = 1; i <= 12; i++) {
    let row = document.createElement('tr');
    for (let j = 1; j <= 12; j++) {
      let cell = document.createElement('td');
      cell.textContent = i * j;
      cell.setAttribute('class', i * j);
      row.appendChild(cell);
      cell.addEventListener('click', function() {
        // 他のクラスがクリックされた場合、以前のclickedクラスを削除する
        let previousClicked = document.querySelector('.clicked');
        if (previousClicked) {
          previousClicked.classList.remove('clicked');
        }
        // クリックされたセルのクラスに 'clicked' を追加する
        cell.setAttribute('class', i * j + ' clicked');
      });
    }
    table.appendChild(row);
  }
  document.body.appendChild(table);
}

multiplicationTable();
