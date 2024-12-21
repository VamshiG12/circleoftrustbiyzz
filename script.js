const API_URL = 'http://localhost:5000/api/contributions';

// Function to load contributions from the backend
async function loadContributions() {
  try {
    const response = await fetch(API_URL);
    const contributions = await response.json();

    const tableBody = document.getElementById("contributionTableBody");
    tableBody.innerHTML = ""; // Clear existing rows

    contributions.forEach(contribution => {
      const newRow = tableBody.insertRow();
      newRow.insertCell(0).textContent = contribution.name;
      newRow.insertCell(1).textContent = contribution.date;
      newRow.insertCell(2).textContent = contribution.amount;
      newRow.insertCell(3).textContent = contribution.recipient;
    });
  } catch (error) {
    console.error('Error loading contributions:', error);
  }
}

// Function to save a new contribution to the backend
async function saveContribution(contribution) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contribution),
    });

    if (!response.ok) {
      throw new Error('Failed to save contribution');
    }

    const savedContribution = await response.json();
    console.log('Saved contribution:', savedContribution);

    // Reload contributions
    loadContributions();
  } catch (error) {
    console.error('Error saving contribution:', error);
  }
}

// Event listener for form submission
document.getElementById("contributionForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get form values
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const amount = document.getElementById("amount").value;
  const recipient = document.getElementById("recipient").value;

  // Create a contribution object
  const contribution = { name, date, amount, recipient };

  // Save the contribution to the backend
  await saveContribution(contribution);

  // Clear the form
  document.getElementById("contributionForm").reset();
});

// Load contributions on page load
document.addEventListener("DOMContentLoaded", loadContributions);
