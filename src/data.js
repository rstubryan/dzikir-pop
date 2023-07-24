function loadData() {
  fetch("https://pop.serveo.net/dzikirpop/dzikir_api.php")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let tableData = "";

      data.forEach((item) => {
        tableData += `<tr class="border border-white bg-white">
            <td class="border border-slate-700">${item.id}</td> 
             <td class="border border-slate-700">${item.province}</td> 
             <td class="border border-slate-700">${item.count}</td>`;
      });

      document.getElementById("table_prov").innerHTML += tableData;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
