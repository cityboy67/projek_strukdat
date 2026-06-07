// Mengambil elemen HTML yang memiliki ID 'board'
const board = document.getElementById("board");

// Palet warna cerah untuk mengisi warna kotak secara acak
const vibrantColors = [
  "#C264FE", 
  "#FE3B3A", 
  "#4B75FE", 
  "#FDD749", 
  "#78D85B", 
  "#FF8E44"  
];

// Fungsi untuk mengambil satu warna acak dari palet warna di atas
function randomColor() {
  return vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
}

// Perulangan untuk membuat 10 baris papan (dari atas ke bawah)
for (let row = 9; row >= 0; row--) {

  // Menentukan angka awal dan akhir untuk setiap barisnya
  let start = row * 10 + 1;
  let end = start + 9;
  let numbers = [];

  // Daftar nomor kotak yang berisi materi
  const materiBoxes = [3, 6, 13, 21, 26, 30, 41, 52, 64, 74, 91];

  // Perulangan untuk memasukkan angka 1 sampai 10 ke dalam urutan baris
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  // Logika Zigzag: Membalik urutan angka pada baris ganjil agar meliuk seperti ular
  if (row % 2 !== 0) {
    numbers.reverse();
  }

  // Perulangan untuk membuat elemen kotak (div) untuk setiap angka
  numbers.forEach(number => {
    
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Logika untuk mendeteksi kotak nomor 100 (Garis Finish)
    if (number === 100) {
      cell.classList.add("rainbow");
      cell.innerHTML = `
        <span class="number">${number}</span>
        <span class="finish-text">FINISH</span>
      `;
    } 
    // Logika untuk mendeteksi kotak nomor 1 (Garis Start)
    else if (number === 1) {
      cell.style.background = randomColor();
      cell.innerHTML = `
        <span class="number">${number}</span>
        <span class="mulai-text">START</span>
      `;
    } 
    // Logika untuk kotak biasa & kotak materi
    else {
      cell.style.background = randomColor();
      
      // Mengecek apakah nomor kotak saat ini ada di dalam array materiBoxes
      if (materiBoxes.includes(number)) {
        cell.innerHTML = `
          <span class="number">${number}</span>
          <span class="materi-text">MATERI</span>
        `;
      } else {
        cell.innerHTML = `
          <span class="number">${number}</span>
        `;
      }
    }

    board.appendChild(cell);
  });
}

// DATA ULAR DAN TANGGA 
const obstacles = [
  // --- DATA TANGGA ---
  {
    type: "tangga",
    startBox: 4,
    endBox: 17,
    imageSrc: "assets/ular dan tangga/tangga-box-4.png",
    style: { bottom: "-12%", left: "13%", width: "45%", height: "43%" }
  },
  {
    type: "tangga",
    startBox: 10,
    endBox: 29,
    imageSrc: "assets/ular dan tangga/tangga-box-10.png",
    style: { bottom: "-13%", left: "64%", width: "54%", height: "55%" }
  },
  {
    type: "tangga",
    startBox: 18,
    endBox: 43,
    imageSrc: "assets/ular dan tangga/tangga-box-18.png",
    style: { bottom: "5%", left: "2%", width: "45%", height: "49%" }
  },
  {
    type: "tangga",
    startBox: 25,
    endBox: 37,
    imageSrc: "assets/ular dan tangga/tangga-box-25.png",
    style: { bottom: "1%", left: "15%", width: "51%", height: "56%" }
  },
  {
    type: "tangga",
    startBox: 40,
    endBox: 79,
    imageSrc: "assets/ular dan tangga/tangga-box-40.png",
    style: { bottom: "29%", left: "-12%", width: "45%", height: "52%" }
  },
  {
    type: "tangga",
    startBox: 46,
    endBox: 54,
    imageSrc: "assets/ular dan tangga/tangga-box-46.png",
    style: { bottom: "27%", left: "37%", width: "45%", height: "45%" }
  },
  {
    type: "tangga",
    startBox: 50,
    endBox: 70,
    imageSrc: "assets/ular dan tangga/tangga-box-50.png",
    style: { bottom: "33%", left: "67%", width: "57%", height: "44%" }
  },
  {
    type: "tangga",
    startBox: 61,
    endBox: 80,
    imageSrc: "assets/ular dan tangga/tangga-box-61.png",
    style: { bottom: "46%", left: "-19%", width: "46%", height: "48%" }
  },
  {
    type: "tangga",
    startBox: 69,
    endBox: 90,
    imageSrc: "assets/ular dan tangga/tangga-box-69.png",
    style: { bottom: "52%", left: "63%", width: "55%", height: "46%" }
  },
  {
    type: "tangga",
    startBox: 82,
    endBox: 84,
    imageSrc: "assets/ular dan tangga/tangga-box-82.png",
    style: { bottom: "63%", left: "-6%", width: "60%", height: "44%" }
  },
  {
    type: "tangga",
    startBox: 88,
    endBox: 94,
    imageSrc: "assets/ular dan tangga/tangga-box-88.png",
    style: { bottom: "65%", left: "47%", width: "47%", height: "48%" }
  },

  // --- DATA ULAR ---
  {
    type: "ular",
    startBox: 14,
    endBox: 5,
    imageSrc: "assets/ular dan tangga/ular-box-14.png",
    style: { bottom: "-16%", left: "30%", width: "51%", height: "50%" }
  },
  {
    type: "ular",
    startBox: 27,
    endBox: 8,
    imageSrc: "assets/ular dan tangga/ular-box-27.png",
    style: { bottom: "-10%", left: "49%", width: "45%", height: "48%" }
  },
  {
    type: "ular",
    startBox: 31,
    endBox: 11,
    imageSrc: "assets/ular dan tangga/ular-box-31.png",
    style: { bottom: "0%", left: "69%", width: "54%", height: "48%" }
  },
  {
    type: "ular",
    startBox: 39,
    endBox: 2,
    imageSrc: "assets/ular dan tangga/ular-box-39.png",
    style: { bottom: "-6%", left: "-7%", width: "47%", height: "52%" }
  },
  {
    type: "ular",
    startBox: 42,
    endBox: 37,
    imageSrc: "assets/ular dan tangga/ular-box-42.png",
    style: { bottom: "15%", left: "-1%", width: "49%", height: "47%" }
  },
  {
    type: "ular",
    startBox: 49,
    endBox: 34,
    imageSrc: "assets/ular dan tangga/ular-box-49.png",
    style: { bottom: "15%", left: "52%", width: "44%", height: "49%" }
  },
  {
    type: "ular",
    startBox: 55,
    endBox: 36,
    imageSrc: "assets/ular dan tangga/ular-box-55.png",
    style: { bottom: "18%", left: "27%", width: "47%", height: "53%" }
  },
  {
    type: "ular",
    startBox: 58,
    endBox: 45,
    imageSrc: "assets/ular dan tangga/ular-box-58.png",
    style: { bottom: "30%", left: "14%", width: "45%", height: "41%" }
  },
  {
    type: "ular",
    startBox: 78,
    endBox: 76,
    imageSrc: "assets/ular dan tangga/ular-box-78.png",
    style: { bottom: "53%", left: "12%", width: "48%", height: "41%" }
  },
  {
    type: "ular",
    startBox: 86,
    endBox: 66,
    imageSrc: "assets/ular dan tangga/ular-box-86.png",
    style: { bottom: "50%", left: "35%", width: "44%", height: "54%" }
  },
  {
    type: "ular",
    startBox: 89,
    endBox: 35,
    imageSrc: "assets/ular dan tangga/ular-box-89.png",
    style: { bottom: "31%", left: "43%", width: "54%", height: "59%" }
  },
  {
    type: "ular",
    startBox: 95,
    endBox: 87,
    imageSrc: "assets/ular dan tangga/ular-box-95.png",
    style: { bottom: "64%", left: "35%", width: "49%", height: "50%" }
  },
  {
    type: "ular",
    startBox: 96,
    endBox: 62,
    imageSrc: "assets/ular dan tangga/ular-box-96.png",
    style: { bottom: "54%", left: "2%", width: "57%", height: "48%" }
  },
  {
    type: "ular",
    startBox: 99,
    endBox: 81,
    imageSrc: "assets/ular dan tangga/ular-box-99.png",
    style: { bottom: "68%", left: "-15%", width: "51%", height: "44%" }
  }
];

// FUNGSI UNTUK MERENDER ULAR DAN TANGGA
function renderObstacles() {
  obstacles.forEach(obs => {
    // Membuat elemen gambar (img)
    const img = document.createElement("img");
    
    // Memasukkan path folder dari data array
    img.src = obs.imageSrc;
    
    // Menambahkan class CSS
    img.classList.add("obstacle-img");

    // Menerapkan styling reposisi (Persen % yang responsif)
    img.style.bottom = obs.style.bottom; // Menggunakan bottom & left biasanya lebih mudah memposisikan dari titik bawah layar
    img.style.left = obs.style.left;
    img.style.width = obs.style.width;
    img.style.height = obs.style.height;
    
    if(obs.style.transform) {
      img.style.transform = obs.style.transform;
    }

    // Memasukkan gambar ke dalam papan
    board.appendChild(img);
  });
}

// ==========================================
// DATABASE MATERI PEMBELAJARAN
// ==========================================
const dataMateri = {
  3: { judul: "Pengenalan Array", teks: "Struktur Data adalah cara menyimpan dan mengatur data di komputer agar efisien. Salah satu yang paling dasar adalah Array. Bayangkan Array seperti rak loker penyimpanan yang kotak-kotaknya menyatu berderet. Setiap kotak memiliki nomor paten yang disebut Indeks, dan uniknya, nomor indeks ini selalu dimulai dari angka 0. Kelemahan Array adalah ukurannya statis (tetap). Jika rak lokermu hanya punya 10 kotak, kamu tidak bisa tiba-tiba menyelipkan kotak ekstra di tengah-tengah." },
  6: { judul: "Konsep Stack (Tumpukan)", teks: "Stack bekerja dengan prinsip LIFO (Last In, First Out). Bayangkan kamu sedang menumpuk piring kotor ke atas. Piring yang terakhir kali kamu taruh di puncak tumpukan, pasti akan menjadi piring pertama yang kamu ambil saat mencuci. Di sistem komputer, meletakkan 'piring' baru di puncak dinamakan operasi Push, sedangkan mengambil 'piring' dari puncak dinamakan operasi Pop." },
  13: { judul: "Konsep Queue (Antrean)", teks: "Queue menggunakan prinsip FIFO (First In, First Out). Analogi paling gampang adalah antrean pembeli di kasir minimarket. Orang yang pertama kali datang dan antre di baris depan, pasti akan dilayani dan keluar lebih dulu. Dalam pemrograman, proses orang masuk ke barisan belakang antrean disebut Enqueue, sedangkan orang di barisan depan yang selesai dilayani dan keluar disebut Dequeue." },
  21: { judul: "Pengenalan Linked List", teks: "Linked List menyimpan data dengan cara unik. Bayangkan permainan berburu harta karun. Kamu diberi sebuah kotak (Node). Di dalam kotak itu ada 'Harta' (Nilai Data), dan sebuah 'Kertas Petunjuk' (Pointer) yang berisi alamat tempat kotak selanjutnya disembunyikan. Kelebihan utama Linked List dibanding Array adalah ukurannya yang dinamis—kamu bisa menambah kotak baru kapan saja tanpa merombak urutan lainnya." },
  26: { judul: "Singly Linked List", teks: "Pada Singly Linked List (Tunggal), petunjuk arahnya hanya berjalan satu arah. Bayangkan ini seperti rangkaian gerbong kereta api. Gerbong paling depan disebut Head (Kepala). Rangkaian ini berlanjut sampai ke gerbong paling akhir yang disebut Tail (Ekor). Karena setelah ekor tidak ada gerbong lagi, penyambung pada gerbong Tail tidak terkait ke mana pun, yang dalam bahasa komputer dinilai Null (Kosong)." },
  30: { judul: "Doubly Linked List", teks: "Pada Doubly Linked List, bayangkan setiap kotak/gerbong sekarang memiliki dua tali penunjuk. Satu tali menunjuk ke arah depan (Next), dan satu tali lagi menunjuk kembali ke arah belakang (Prev). Sama seperti membaca buku fisik, kamu tidak hanya bisa lanjut ke halaman berikutnya, tapi juga bisa membalik ke halaman sebelumnya dengan mudah. Ini memungkinkan pembacaan data maju dan mundur." },
  41: { judul: "Struktur Data Tree", teks: "Tree (Pohon) adalah struktur data bertingkat/hierarki. Bayangkan Bagan Struktur Perusahaan. Posisi paling pucuk (CEO) yang tidak punya atasan lagi disebut Root (Akar). Orang-orang di bawahnya disebut bawahan (Child). Jika ada karyawan di posisi paling bawah yang tidak memiliki bawahan sama sekali, posisinya disebut sebagai Leaf (Daun)." },
  52: { judul: "Binary Search Tree", teks: "Binary Search Tree (BST) adalah hierarki dengan aturan super ketat: setiap 'orang tua' maksimal punya dua 'anak'. Bayangkan bermain tebak angka di pertigaan jalan. Jika angka yang kamu cari lebih kecil dari patokan, kamu WAJIB belok Kiri. Jika lebih besar, kamu WAJIB belok Kanan. Aturan ini membuat pencarian data menjadi super cepat." },
  64: { judul: "Struktur Data Graph", teks: "Graph adalah sekumpulan titik yang saling terhubung secara bebas, seperti Peta Rute Penerbangan atau Jaringan Pertemanan. Titik (Orang/Bandara) disebut Vertex, sedangkan rute/garisnya disebut Edge. Jika jalanannya satu arah (seperti mem-follow orang di Instagram tanpa di-follback), itu disebut Directed Graph. Jika dua arah (saling berteman di FB), dinamakan Undirected Graph." },
  74: { judul: "Hash Table", teks: "Bayangkan Hash Table seperti sistem loker otomatis. Jika kamu memasukkan namamu (Key/Kunci), mesin menggunakan rumus (Fungsi Hash) untuk mengubah namamu menjadi nomor loker (Indeks). Namun, terkadang rumus Fungsi Hash menghasilkan nomor loker yang sama untuk dua orang yang berbeda. Kejadian bentrok nomor loker ini dinamakan Collision." },
  91: { judul: "Big O Notation", teks: "Big O Notation adalah rapor kecepatan struktur data. Bayangkan mencari nomor HP teman. O(1) (Waktu Konstan) seperti menekan tombol Speed Dial—instan dan super cepat, tak peduli sebanyak apa kontakmu. Sedangkan O(n) (Waktu Linier) seperti harus men-scroll buku telepon satu per satu dari atas. Semakin banyak kontak, semakin lama waktu mencarinya!" }
};

// ==========================================
// DATABASE PERTANYAAN (MAPPING KE ULAR & TANGGA)
// ==========================================
// Key angka di bawah mencerminkan "startBox" dari ular atau tangga.
const dataPertanyaan = {
  // Materi Box 3
  4: { soal: "Angka urutan untuk mengakses elemen dalam sebuah Array disebut apa?", opsi: ["Value", "Pointer", "Indeks"], jawaban: 2 },
  18: { soal: "Berapakah nilai indeks pertama dalam sebuah Array pada umumnya?", opsi: ["0", "1", "-1"], jawaban: 0 },
  39: { soal: "Apa kelemahan utama dari struktur data Array?", opsi: ["Tidak bisa menyimpan angka", "Ukurannya statis (tetap) dan sulit diubah", "Datanya selalu acak"], jawaban: 1 },

  // Materi Box 6
  10: { soal: "Jika kita menggunakan perintah Pop pada Stack, data mana yang akan terhapus?", opsi: ["Data paling bawah", "Data yang di tengah", "Data yang paling atas / terakhir"], jawaban: 2 },
  14: { soal: "Apa prinsip utama yang digunakan oleh struktur data Stack?", opsi: ["FIFO (First In, First Out)", "LIFO (Last In, First Out)", "LILO (Last In, Last Out)"], jawaban: 1 },
  31: { soal: "Istilah untuk menambahkan data baru ke dalam Stack adalah...", opsi: ["Insert", "Pop", "Push"], jawaban: 2 },

  // Materi Box 13
  40: { soal: "Queue beroperasi menggunakan prinsip...", opsi: ["FIFO", "LIFO", "Random Access"], jawaban: 0 },
  46: { soal: "Operasi mengeluarkan data dari urutan terdepan dalam Queue disebut?", opsi: ["Enqueue", "Dequeue", "Pop"], jawaban: 1 },

  // Materi Box 21
  25: { soal: "Elemen dasar pembentuk Linked List yang berisi data dan pointer disebut?", opsi: ["Indeks", "Node", "Array"], jawaban: 1 },
  27: { soal: "Apa kelebihan utama Linked List dibandingkan dengan Array?", opsi: ["Ukurannya dinamis dan fleksibel", "Lebih mudah mencari data secara acak", "Tidak membutuhkan memori sama sekali"], jawaban: 0 },

  // Materi Box 26
  42: { soal: "Pointer pada Node Tail (terakhir) di Singly Linked List akan menunjuk ke mana?", opsi: ["Kembali ke Head", "Null / Kosong", "Ke elemen sebelumnya"], jawaban: 1 },
  49: { soal: "Node terakhir dalam antrean Linked List disebut dengan...", opsi: ["Head", "Tail", "Null"], jawaban: 1 },
  50: { soal: "Titik awal atau Node pertama dalam sebuah Linked List dinamakan...", opsi: ["Root", "Tail", "Head"], jawaban: 2 },

  // Materi Box 30
  55: { soal: "Pada Doubly Linked List, pointer yang menunjuk ke Node sebelumnya disebut...", opsi: ["Next", "Null", "Prev"], jawaban: 2 },
  61: { soal: "Apa perbedaan Doubly Linked List dengan Singly Linked List?", opsi: ["Memiliki dua pointer (Prev dan Next)", "Tidak memiliki Node", "Hanya bisa menyimpan dua data"], jawaban: 0 },

  // Materi Box 41
  58: { soal: "Node paling puncak dalam struktur Tree disebut...", opsi: ["Leaf", "Root", "Head"], jawaban: 1 },
  78: { soal: "Node yang terletak di ujung bawah dan tidak memiliki Child disebut...", opsi: ["Branch", "Root", "Leaf"], jawaban: 2 },

  // Materi Box 52
  69: { soal: "Pada BST, jika kita menyisipkan nilai yang lebih kecil dari Root, nilai tersebut akan diletakkan di...", opsi: ["Cabang Kiri", "Cabang Kanan", "Menggantikan Root"], jawaban: 0 },
  82: { soal: "Berapa batas maksimal anak (child) yang boleh dimiliki oleh sebuah Node dalam Binary Tree?", opsi: ["1", "2", "Tidak terbatas"], jawaban: 1 },

  // Materi Box 64
  88: { soal: "Dalam Graph, titik-titik yang menyimpan data disebut dengan...", opsi: ["Edge", "Vertex / Node", "Root"], jawaban: 1 },
  99: { soal: "Graph yang memiliki panah atau arah pada Edge-nya dinamakan...", opsi: ["Undirected Graph", "Directed Graph", "Binary Graph"], jawaban: 1 },

  // Materi Box 74
  86: { soal: "Apa istilah yang digunakan ketika ada dua data yang dikonversi menjadi nomor indeks yang sama di Hash Table?", opsi: ["Overloading", "Error", "Collision"], jawaban: 2 },
  89: { soal: "Rumus atau fungsi yang digunakan untuk mengubah Kunci (Key) menjadi indeks pada Hash Table disebut...", opsi: ["Hash Function", "Node Function", "Stack Function"], jawaban: 0 },

  // Materi Box 91
  95: { soal: "Jika waktu pencarian bergantung pada jumlah total data secara berurutan, ini dilambangkan dengan...", opsi: ["O(1)", "O(n)", "O(0)"], jawaban: 1 },
  96: { soal: "Notasi Big O manakah yang menunjukkan bahwa waktu akses data bersifat konstan dan instan?", opsi: ["O(n)", "O(1)", "O(log n)"], jawaban: 1 }
};

// Panggil fungsinya agar gambar muncul di papan
renderObstacles();

// ==========================================
// LOGIKA POPUP & ANIMASI SPAWN PLAYER
// ==========================================
const btnMulai = document.getElementById("btn-mulai");
const popupPetarung = document.getElementById("popup-petarung");
const dropdownPetarung = document.getElementById("dropdown-petarung");
const btnGas = document.getElementById("btn-gas");
const playersContainer = document.getElementById("players-container");

// Array untuk menyimpan data posisi masing-masing pemain
let playersData = []; 

// Fungsi bantuan untuk membuat jeda waktu (delay) pada animasi
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 1. Munculkan popup saat tombol MULAI diklik
btnMulai.addEventListener("click", () => {
  popupPetarung.classList.remove("hidden");
});

// 2. Tombol GAS diklik (Mulai Animasi Spawn)
btnGas.addEventListener("click", async () => {
  const jumlahPemain = parseInt(dropdownPetarung.value);
  
  // Tutup popup & ganti teks tombol
  popupPetarung.classList.add("hidden");
  btnMulai.innerText = "RESTART";

  // Bersihkan papan jika ini adalah klik RESTART
  playersContainer.innerHTML = "";
  playersData = [];

  // ========================================
  // FASE 1: MUNCUL MEMBESAR LALU MENGANTRE
  // ========================================
  for (let i = 1; i <= jumlahPemain; i++) {
    // Buat elemen gambar bidak
    const img = document.createElement("img");
    img.src = `assets/player/p${i}.png`;
    img.classList.add("player-pawn");

    // SETING MUNCUL RAKSASA DI TENGAH LAYAR
    img.style.width = "100%"; 
    img.style.left = "0%";  
    img.style.bottom = "0%";
    
    playersContainer.appendChild(img);

    // Mainkan Sound Effect kemunculan
    try {
      const spawnSound = new Audio(`assets/sound effect/spawnp${i}.mp3`);
      spawnSound.play();
    } catch (err) {
      console.log("Audio file belum siap atau terblokir:", err);
    }

    // Biarkan pemain melihat foto raksasa tersebut selama 1.5 detik
    await sleep(1500);

    // MENGECIL & BERGERAK KE ANTREAN (Samping Box 1)
    // Box 1 ada di ujung kiri bawah. Kita buat 'left' menjadi minus agar di luar papan.
    img.style.width = "5%"; // Kembali ke ukuran normal bidak
    img.style.bottom = "2%";
    img.style.left = `-${i * 4}%`; // p1 di -6%, p2 di -12%, dst (berjejer ke belakang)

    // Simpan ke database pemain kita
    playersData.push({ id: i, element: img, position: 0 });

    // Tunggu bidak selesai lari ke antrean sebelum memunculkan pemain selanjutnya (jeda 1 detik)
    await sleep(1000);
  }

  // ========================================
  // FASE 2: MASUK KE BOX 1 SECARA BERURUTAN
  // ========================================
  await sleep(500);

  const box1Offsets = [
    { left: '1%', bottom: '5%' }, // P1
    { left: '5%', bottom: '5%' }, // P2
    { left: '1%', bottom: '1%' }, // P3
    { left: '5%', bottom: '1%' }  // P4
  ];

  for (let i = 0; i < playersData.length; i++) {
    let p = playersData[i];
    
    // Gerakkan ke dalam Box 1
    p.element.style.left = box1Offsets[i].left;
    p.element.style.bottom = box1Offsets[i].bottom;
    p.position = 1; 

    // Jeda 0.6 detik per pemain
    await sleep(600); 
  }

  // ========================================
  // FASE 3: MUNCULKAN UI DADU SETELAH SEMUA DI BOX 1
  // ========================================
  currentPlayerIndex = 0; // Set giliran kembali ke Player 1
  document.getElementById("current-player").innerText = `Player 1`;
  
  // Tampilkan kotak dadu ungu di layar (hapus class hidden)
  document.getElementById("side-panel").classList.remove("hidden");
});

// ==========================================
// RUMUS KOORDINAT & LOGIKA DADU
// ==========================================
let currentPlayerIndex = 0;
const btnRoll = document.getElementById("btn-roll");
const diceImg = document.getElementById("dice-img");
const sfxDice = document.getElementById("sfx-dice");
const sfxStep = document.getElementById("sfx-step");

// Fungsi mencari letak (X, Y) dari Box 1 sampai 100
function getCoordinates(position, playerIndex) {
  if (position > 100) position = 100; // Tidak boleh lebih dari 100

  const row = Math.floor((position - 1) / 10);
  let col = (position - 1) % 10;
  
  // Zigzag: Jika baris ganjil, hitung dari kanan ke kiri
  if (row % 2 !== 0) col = 9 - col; 

  const offsets = [
    { left: 1, bottom: 5 }, // P1
    { left: 5, bottom: 5 }, // P2
    { left: 1, bottom: 1 }, // P3
    { left: 5, bottom: 1 }  // P4
  ];

  return {
    bottom: `${(row * 10) + offsets[playerIndex].bottom}%`,
    left: `${(col * 10) + offsets[playerIndex].left}%`
  };
}

// Logika ketika tombol ROLL diklik
btnRoll.addEventListener("click", () => {
  btnRoll.disabled = true; 
  sfxDice.currentTime = 0;
  sfxDice.play();

  // Animasi mengocok dadu selama 1 detik
  let rollInterval = setInterval(() => {
    diceImg.src = `assets/dadu/dadu-${Math.floor(Math.random() * 6) + 1}.png`;
  }, 100);

  // Stop animasi dan mulai berjalan
  setTimeout(() => {
    clearInterval(rollInterval);
    const finalNumber = Math.floor(Math.random() * 6) + 1; 
    diceImg.src = `assets/dadu/dadu-${finalNumber}.png`;
    
    movePlayerStepByStep(finalNumber);
  }, 1000); 
});

// Fungsi untuk animasi berjalan per kotak
async function movePlayerStepByStep(steps) {
  let player = playersData[currentPlayerIndex];

  // Looping untuk melompat sesuai angka dadu
  for (let s = 0; s < steps; s++) {
    if (player.position >= 100) break; 

    player.position++; 
    const coords = getCoordinates(player.position, currentPlayerIndex);

    player.element.style.bottom = coords.bottom;
    player.element.style.left = coords.left;

    try {
      sfxStep.currentTime = 0; 
      sfxStep.play();
    } catch(e) {}

    await sleep(400); // Jeda 0.4 detik per langkah
  }

  // Ganti giliran setelah selesai berjalan
  currentPlayerIndex = (currentPlayerIndex + 1) % playersData.length;
  document.getElementById("current-player").innerText = `Player ${currentPlayerIndex + 1}`;
  btnRoll.disabled = false;
}