<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiplication Table</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #dddddd;
      text-align: center;
      padding: 8px;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>
  <table id="multiplication-table">
    <thead>
      <tr>
        <th>&times;</th>
        <script>
          for (let i = 1; i <= 12; i++) {
            document.write(`<th>${i}</th>`);
          }
        </script>
      </tr>
    </thead>
    <tbody>
      <script>
        function padNumber(number, width) {
          return String(number).padStart(width, ' ');
        }

        for (let i = 1; i <= 12; i++) {
          document.write('<tr>');
          document.write(`<td>${i}</td>`);
          for (let j = 1; j <= 12; j++) {
            document.write(`<td>${padNumber(i * j, 4)}</td>`);
          }
          document.write('</tr>');
        }
      </script>
    </tbody>
  </table>
</body>
</html>
