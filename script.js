let noteCounter = 1; // Initialize the note counter

function addNote() {
  const textArrea = document.getElementById('text');
  const textAreaValue = textArrea.value;
  const truncatedTextArrea = textAreaValue.length > 30 ? textAreaValue.substring(0, 30) + "..." : textAreaValue;

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
  viewDetailButton.setAttribute("onclick", `viewDetail("${textAreaValue}")`);


  bodyCell1.textContent = truncatedTextArrea;
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

function viewDetail(noteContent) {
  // const noteContent = document.getElementById('text').value;

  document.getElementById('modalContent').textContent = noteContent;

  document.getElementById('modal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
};

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';

}