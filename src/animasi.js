// Menunggu hingga seluruh halaman dan konten dimuat sebelum menjalankan fungsi
window.onload = () => {
  // Mengambil elemen gambar dengan id "doa1" dan elemen dengan id "hitung" dari HTML
  let img = document.querySelector("#doa1");
  let counter = document.querySelector("#hitung");

  // Menginisialisasi variabel score dan mendefinisikan elemen audio
  let score = 0;
  let sound = new Audio("subhanallah.mp3");

  // Menambahkan event listener untuk event "mousedown" pada gambar
  img.addEventListener("mousedown", () => {
    img.src = "berdoa2.png"; // Mengganti sumber gambar saat mouse ditekan
    sound.currentTime = 0; // Menyetel waktu audio kembali ke awal
    sound.play(); // Memainkan audio "subhanallah.mp3"
    addToCounter(); // Memanggil fungsi addToCounter() untuk menambah nilai counter
  });

  // Menambahkan event listener untuk event "mouseup" pada gambar
  img.addEventListener("mouseup", () => {
    img.src = "berdoa1.png"; // Mengganti sumber gambar saat mouse dilepaskan
  });

  // Fungsi untuk menambah nilai pada variabel score dan mengupdate tampilan counter
  function addToCounter() {
    score++; // Menambahkan nilai pada variabel score
    counter.innerHTML = score; // Mengganti isi elemen "hitung" dengan nilai dari variabel score
  }

  // Menambahkan event listener untuk event "ended" pada audio
  sound.addEventListener("ended", () => {
    sound.currentTime = 0; // Menyetel waktu audio kembali ke awal saat audio selesai diputar
  });
};

