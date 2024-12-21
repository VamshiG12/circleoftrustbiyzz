document.getElementById('contributionForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const amount = document.getElementById('amount').value;
  const recipient = document.getElementById('recipient').value;

  // Add a new row to the table
  const tableBody = document.getElementById('contributionTableBody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${date}</td>
    <td>$${parseFloat(amount).toFixed(2)}</td>
    <td>${recipient}</td>
  `;

  tableBody.appendChild(newRow);

  // Clear form fields
  document.getElementById('contributionForm').reset();
});
