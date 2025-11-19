// Live table filter using input event (case-insensitive)

const searchBox = document.getElementById("searchBox");
const tableRows = document.querySelectorAll("#studentTable tbody tr");
const noResult = document.getElementById("noResult");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  let visibleCount = 0;

  tableRows.forEach(row => {
    const rowText = row.textContent.toLowerCase();

    if (rowText.includes(query)) {
      row.style.display = "";
      visibleCount++;
    } else {
      row.style.display = "none";
    }
  });

  noResult.hidden = visibleCount !== 0;
});
