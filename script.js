// Function to load contributions from localStorage
function loadContributions() {
  const contributions = JSON.parse(localStorage.getItem("contributions")) || [];
  const tableBody = document.getElementById("contributionTableBody");
  tableBody.innerHTML = ""; // Clear existing rows

  contributions.forEach(contribution => {
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = contribution.name;
    newRow.insertCell(1).textContent = contribution.date;
    newRow.insertCell(2).textContent = contribution.amount;
    newRow.insertCell(3).textContent = contribution.recipient;
  });
}

// Function to save a new contribution to localStorage
function saveContribution(contribution) {
  const contributions = JSON.parse(localStorage.getItem("contributions")) || [];
  contributions.push(contribution);
  localStorage.setItem("contributions", JSON.stringify(contributions));
}

// Event listener for form submission
document.getElementById("contributionForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get form values
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const amount = document.getElementById("amount").value;
  const recipient = document.getElementById("recipient").value;

  // Create a contribution object
  const contribution = { name, date, amount, recipient };

  // Save the contribution to localStorage
  saveContribution(contribution);

  // Reload the table with updated data
  loadContributions();

  // Clear the form
  document.getElementById("contributionForm").reset();
});

// Load contributions on page load
document.addEventListener("DOMContentLoaded", loadContributions);
