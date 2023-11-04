document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const tableBody = document.querySelector("tbody");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const doctorID = document.getElementById("docID").value;
    const specialization = document.getElementById("dept").value;
    const experience = parseInt(document.getElementById("exp").value);
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mbl").value;

    let role = "Trainee";
    if (experience > 5) {
      role = "Senior";
    } else if (experience >= 2) {
      role = "Junior";
    }

    // Create a new row in the table
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${doctorID}</td>
      <td>${specialization}</td>
      <td>${experience}</td>
      <td>${email}</td>
      <td>${mobile}</td>
      <td>${role}</td>
      <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    // Reset the form
    form.reset();
  });
});

// Function to delete a row
function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

