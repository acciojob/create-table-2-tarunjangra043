function createTable() {
    let rows = prompt("Input number of rows");
    rows = parseInt(rows);
    
    let cols = prompt("Input number of columns");
    cols = parseInt(cols);

    let table = document.getElementById("myTable");

    table.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow(i);

        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell(j);

            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
