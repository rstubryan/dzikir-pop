function loadDatab() {
  fetch("https://pop.serveo.net/dzikirpop/dzikir_api.php")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let selectOptions = ""; // Membuat string kosong untuk menyimpan opsi value

      data.forEach((item) => {
        selectOptions += `<option value="${item.id}" id="${item.id}">${item.province}</option>`;
      });

      // Menambahkan opsi value ke dalam elemen <select> dengan id="prov"
      document.getElementById("prov").innerHTML += selectOptions;

      // Menambahkan event listener untuk elemen <select> dengan id "prov"
      document.getElementById("prov").addEventListener("change", function () {
        const selectedId = this.value; // Use the selected value (province ID)
        if (selectedId) {
          updateData(selectedId); // Call the updateData function with the selected province ID
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
