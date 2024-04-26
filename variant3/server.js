const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5550;

// 静的ファイルの提供
app.use(express.static(path.join(__dirname)));

// ルートへのアクセス時に index.html を返す
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// サーバーを起動
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
