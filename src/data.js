// Fungsi untuk memuat data dari API dan menampilkan dalam tabel
function loadData() {
  // Memuat data dari API menggunakan fetch
  fetch("https://pop.serveo.net/dzikirpop/dzikir_api.php")
    .then((response) => response.json()) // Parsing respons sebagai JSON
    .then((data) => {
      console.log(data); // Menampilkan data di console (opsional)

      let tableData = `
        <tr>
          <th class="border-slate-950 bg-green-500">ID</th>
          <th class="border-slate-950 bg-green-500">Provinsi</th>
          <th class="border-slate-950 bg-green-500">Count</th>
        </tr>`;

      // Membuat baris tabel untuk setiap item dalam data
      data.forEach((item) => {
        tableData += `<tr class="border border-white bg-white">
          <td class="border border-slate-700">${item.id}</td> 
          <td class="border border-slate-700">${item.province}</td> 
          <td class="border border-slate-700">${item.count}</td>
        </tr>`;
      });

      // Mengganti innerHTML elemen tabel dengan data dan desain tabel baru
      document.getElementById("table_prov").innerHTML = tableData;
    })
    .catch((error) => {
      // Menangani kesalahan jika gagal memuat data dari API
      console.error("Error:", error);
    });
}

// Fungsi untuk memuat opsi provinsi dari API dan menambahkannya ke dalam elemen select
function opsiProv() {
  // Memuat data dari API menggunakan fetch
  fetch("https://pop.serveo.net/dzikirpop/dzikir_api.php")
    .then((response) => response.json()) // Parsing respons sebagai JSON
    .then((data) => {
      console.log(data); // Menampilkan data di console (opsional)

      let selectOptions = ""; // Membuat string kosong untuk menyimpan opsi value

      // Membuat opsi untuk setiap item dalam data
      data.forEach((item) => {
        selectOptions += `<option value="${item.id}" id="${item.id}">${item.province}</option>`;
      });

      // Menambahkan opsi value ke dalam elemen <select> dengan id="prov"
      document.getElementById("prov").innerHTML += selectOptions;

      // Menambahkan event listener untuk elemen <select> dengan id "prov" (opsional)
      document.getElementById("prov").addEventListener("change", function () {
        // Logika yang ingin dijalankan saat opsi dipilih (bisa diisi sesuai kebutuhan)
      });
    })
    .catch((error) => {
      // Menangani kesalahan jika gagal memuat data dari API
      console.error("Error:", error);
    });
}

// Fungsi untuk load data secara berkala setiap 5 detik dan memanggil fungsi loadData
function loadDataRealtime() {
  loadData(); // Panggil fungsi loadData() pertama kali saat halaman dimuat

  // Set interval untuk memanggil loadData setiap 10 detik (10000 ms)
  setInterval(() => {
    loadData(); // Panggil fungsi loadData() setiap 10 detik
  }, 10000);
}
