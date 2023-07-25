function updateData(selectedId) {
  // Memanggil API untuk mendapatkan data berdasarkan selectedId
  fetch(`http://127.0.0.1:8080/dzikir-pop/dzikir_api.php?id=${selectedId}`)
    .then((response) => response.json())
    .then((data) => {
      // Mengambil data pertama dari respons (asumsikan datanya adalah array)
      data = data[0];

      // Mengambil nilai id, province, dan currentCount dari data
      const id = data.id;
      const province = data.province;
      const currentCount = parseInt(data.count);

      // Misalnya, Anda ingin menambah data count sebanyak 1 setiap kali fungsi updateData() dijalankan
      const newCount = currentCount + 1;

      // Membuat objek FormData untuk dikirimkan melalui metode POST
      const formData = new FormData();
      formData.append("id", id);
      formData.append("province", province);
      formData.append("count", newCount);

      // Mengirimkan data baru ke API menggunakan metode POST
      fetch("http://127.0.0.1:8080/dzikir-pop/dzikir_api.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Berhasil mengirimkan data, tampilkan respons dari server (data)
          console.log("Success:", data);
          // Tambahkan logika lain yang perlu dilakukan setelah berhasil mengupdate data count
        })
        .catch((error) => {
          // Terjadi kesalahan saat mengirimkan data
          console.error("Error:", error);
        });
    })
    .catch((error) => {
      // Terjadi kesalahan saat memuat data dari API
      console.error("Error:", error);
    });
}
