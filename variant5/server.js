const express = require('express');
const app = express();


// 九九の表を生成する関数
function generateMultiplicationTable() {
  const table = [];
  for (let i = 1; i <= 12; i++) {
    const row = [];
    for (let j = 1; j <= 12; j++) {
      const product = i * j;
      row.push({ value: product, class: product });
    }
    table.push(row);
  }
  return table;
}

// 九九の表をAPIで提供するルート
app.get('/api/multiplication-table', (req, res) => {
    const table = generateMultiplicationTable();
    res.json(table);
  });
  
// サーバーをポート3000で起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});