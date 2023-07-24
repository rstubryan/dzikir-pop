function updateData(selectedId) {
  fetch(`https://pop.serveo.net/dzikirpop/dzikir_api.php?id=${selectedId}`)
    .then((response) => response.json())
    .then((data) => {
      data = data[0];
      const id = data.id;
      const province = data.province;
      const currentCount = parseInt(data.count);

      // Misalnya, Anda ingin menambah data count sebanyak 1 setiap kali fungsi updateData() dijalankan
      const newCount = currentCount + 1;

      const formData = new FormData();
      formData.append("id", id);
      formData.append("province", province);
      formData.append("count", newCount);

      fetch("https://pop.serveo.net/dzikirpop/dzikir_api.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          // Tambahkan logika lain yang perlu dilakukan setelah berhasil mengupdate data count
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
