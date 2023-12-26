function subtractMatrices() {
  let matrixA = getMatrixValues('A');
  let matrixB = getMatrixValues('B');

  
  let result = '';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      result += (matrixA[i][j] - matrixB[i][j]) + ' ';
    }
    result += '\n';
  }

  
  document.getElementById('result').value = result.trim();
}

function getMatrixValues(matrixName) {
  let matrix = [];
  for (let i = 1; i <= 3; i++) {
    let row = [];
    for (let j = 1; j <= 3; j++) {
      let value = parseFloat(document.getElementById(matrixName + i + j).value);
      row.push(isNaN(value) ? 0 : value);
    }
    matrix.push(row);
  }
  return matrix;
}
