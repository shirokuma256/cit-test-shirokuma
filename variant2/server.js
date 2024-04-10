// server.js

const http = require('http');

function padNumber(number, width) {
    return String(number).padStart(width, ' ');
}

function generateMultiplicationTable() {
    let tableHtml = '<table>';
    tableHtml += '<thead><tr><th>&times;</th>';
    for (let i = 1; i <= 12; i++) {
        tableHtml += `<th>${i}</th>`;
    }
    tableHtml += '</tr></thead><tbody>';

    for (let i = 1; i <= 12; i++) {
        tableHtml += '<tr>';
        tableHtml += `<td>${i}</td>`;
        for (let j = 1; j <= 12; j++) {
            tableHtml += `<td>${padNumber(i * j, 4)}</td>`;
        }
        tableHtml += '</tr>';
    }

    tableHtml += '</tbody></table>';

    return tableHtml;
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const multiplicationTableHtml = generateMultiplicationTable();
    res.end(`<html><head><title>Multiplication Table</title><style>table{border-collapse:collapse;width:100%}th,td{border:1px solid #dddddd;text-align:center;padding:8px}th{background-color:#f2f2f2}</style></head><body>${multiplicationTableHtml}</body></html>`);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
