import { loadBooks, convertToTally } from "./functions.js";

(async () => {
    const table = document.getElementById("book-table");
    let characterCountSum = 0;

    const data = await loadBooks();
    const books = data.books; // List

    for (let i = 0; i < books.length; i++) {
        let timesRead = parseInt(books[i]["timesRead"]);

        characterCountSum += parseInt(books[i]["characterCount"]) * timesRead;
        
        let newRow = table.insertRow(-1);

        let title = newRow.insertCell(0);
        let author = newRow.insertCell(1);
        let year = newRow.insertCell(2);
        let characterCount = newRow.insertCell(3);
        let timesReadCell = newRow.insertCell(4);

        title.textContent = books[i]["title"];
        author.textContent = books[i]["author"];
        year.textContent = books[i]["year"];
        characterCount.textContent = books[i]["characterCount"];
        timesReadCell.textContent = convertToTally(timesRead);
    }

    let sumRow = table.insertRow(-1);
    sumRow.id = "sum-row";

    let title = sumRow.insertCell(0);
    let blank1 = sumRow.insertCell(1);
    let blank2 = sumRow.insertCell(2);
    let sum = sumRow.insertCell(3);
    let blank3 = sumRow.insertCell(4);

    title.innerHTML = `<strong>文字数の合計</strong>`
    sum.innerHTML = `<strong>${characterCountSum}</strong>`
})();
