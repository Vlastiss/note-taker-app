
// function addNote() {
// const noNotes = document.getElementById('noNotes');
// const textArrea = document.getElementById('text').value;
// noNotes.style.visibility = "hidden";

//   if (textArrea.trim() !== '') {
//     const tableBody = document.querySelector('#myTable tbody')

//     const newRow = tableBody.insertRow();
//     const newCell1 = newRow.insertCell(0);
//     const newCell2 = newRow.insertCell(1);

//     newCell1.textContent = 'Note' + noteCounter;
//     newCell2.textContent = textArrea;

//     noteCounter++;
//     document.getElementById('text').value = '';
//   } else {
//     alert("please enter your note")
//   }
// }

let noteCounter = 1; // Initialize the note counter

function addNote() {

  const textArrea = document.getElementById('text').value;
  const noNotes = document.getElementById('noNotes');
  noNotes.style.visibility = "hidden";

  // Create a new table element
  const table = document.createElement('table');

  // Create the table header (thead) with a row and a cell
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headerCell = document.createElement('th');
  headerCell.textContent = 'Note ' + noteCounter;
  headerRow.appendChild(headerCell);
  thead.appendChild(headerRow);

  // Create the table body (tbody) with a row and a cell
  const tbody = document.createElement('tbody');
  const bodyRow1 = document.createElement('tr');
  const bodyCell1 = document.createElement('td');
  const bodyRow2 = document.createElement('tr');
  const bodyCell2 = document.createElement('td');
  const viewDetailButton = document.createElement('button');
  viewDetailButton.textContent = 'View detail';
  viewDetailButton.setAttribute("onclick", 'viewDetail()');

  bodyCell1.textContent = textArrea;
  bodyCell2.appendChild(viewDetailButton);
  bodyRow1.appendChild(bodyCell1);
  tbody.appendChild(bodyRow1);
  bodyRow2.appendChild(bodyCell2);
  tbody.appendChild(bodyRow2);

  // Append the thead and tbody to the table
  table.appendChild(thead);
  table.appendChild(tbody);

  // Append the table to the document body
  document.body.appendChild(table);

  // Increment the note counter for the next note
  noteCounter++;
  document.getElementById('text').value = '';
}