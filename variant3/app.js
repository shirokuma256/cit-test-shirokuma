// Create a multiplication table with 12 rows and 12 columns.
function multiplicationTable() {
  let table = document.createElement('table');
  table.id = 'multiplication-table';

  for (let i = 1; i <= 12; i++) {
    let row = document.createElement('tr');
    for (let j = 1; j <= 12; j++) {
      let cell = document.createElement('td');
      cell.textContent = i * j;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.body.appendChild(table);
}

multiplicationTable();
