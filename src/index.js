module.exports = function solveSudoku(matrix) {
  // your solution
  
  function used_in_row (matrix, row, num) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] == num) {
        return true;
      }
    }
    return false;
  }

  function used_in_col (matrix, col, num) {
    for (let row = 0; row < 9; row++) {
      if (matrix[row][col] == num) {
        return true;
      }
    }
    return false;
  }

  function used_in_box (matrix, box_start_row, box_start_col, num) {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (matrix[row + box_start_row][col + box_start_col] == num) {
          return true;
        }
      }
    }
    return false;
  } 

  function is_safe(matrix, row, col, num) {
    return !used_in_row(matrix, row, num) &&
           !used_in_col(matrix, col, num) &&
           !used_in_box(matrix, row - row % 3, col - col % 3, num);
  }

  const matrix_full = [9, 9];

  function get_unassigned_location(matrix) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (matrix[row][col] == 0) {
          return [row, col];  //array is used as tuple
        }
      }
    }
    return matrix_full;
  }

  function solve_soduko(matrix) {
    var row_and_col = get_unassigned_location(matrix);

    if (row_and_col == matrix_full) {
      return true; 
    }

    var row = row_and_col[0],
        col = row_and_col[1];

    for (var num = 1; num <= 9; num++) {
      if (is_safe(matrix, row, col, num)) {
        matrix[row][col] = num;
        if (solve_soduko(matrix)) {
          return true;
        }
        matrix[row][col] = 0;
      }
    }

    return false; 
  }
  
  if (solve_soduko(matrix) == true) {
		return matrix;
	}
}
