// ==========================================
// 1. SETUP BOARD & RENDERING
// ==========================================
const board = document.getElementById("board");
const vibrantColors = ["#C264FE", "#FE3B3A", "#4B75FE", "#FDD749", "#78D85B", "#FF8E44"];

// Fungsi randomColor
function randomColor() { return vibrantColors[Math.floor(Math.random() * vibrantColors.length)]; }

for (let row = 9; row >= 0; row--) {
  let start = row * 10 + 1;
  let end = start + 9;
  let numbers = [];
  for (let i = start; i <= end; i++) numbers.push(i);
  if (row % 2 !== 0) numbers.reverse();

  numbers.forEach(number => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    if (number === 100) {
      cell.classList.add("rainbow");
      cell.innerHTML = `<span class="number">${number}</span><span class="finish-text">FINISH</span>`;
    } else if (number === 1) {
      cell.style.background = randomColor();
      cell.innerHTML = `<span class="number">${number}</span><span class="mulai-text">START</span>`;
    } else {
      cell.style.background = randomColor();
      const materiBoxes = [3, 6, 13, 21, 26, 30, 41, 52, 64, 74, 91];
      if (materiBoxes.includes(number)) cell.innerHTML = `<span class="number">${number}</span><span class="materi-text">MATERI</span>`;
      else cell.innerHTML = `<span class="number">${number}</span>`;
    }
    board.appendChild(cell);
  });
}

// ==========================================
// 2. DATA GAME (OBSTACLES & MATERI)
// ==========================================
const obstacles = [
  { type: "tangga", startBox: 4, endBox: 17, imageSrc: "assets/ular dan tangga/tangga-box-4.png", style: { bottom: "-12%", left: "13%", width: "45%", height: "43%" } },
  { type: "tangga", startBox: 10, endBox: 29, imageSrc: "assets/ular dan tangga/tangga-box-10.png", style: { bottom: "-13%", left: "64%", width: "54%", height: "55%" } },
  { type: "tangga", startBox: 18, endBox: 43, imageSrc: "assets/ular dan tangga/tangga-box-18.png", style: { bottom: "5%", left: "2%", width: "45%", height: "49%" } },
  { type: "tangga", startBox: 25, endBox: 37, imageSrc: "assets/ular dan tangga/tangga-box-25.png", style: { bottom: "1%", left: "15%", width: "51%", height: "56%" } },
  { type: "tangga", startBox: 40, endBox: 79, imageSrc: "assets/ular dan tangga/tangga-box-40.png", style: { bottom: "29%", left: "-12%", width: "45%", height: "52%" } },
  { type: "tangga", startBox: 46, endBox: 54, imageSrc: "assets/ular dan tangga/tangga-box-46.png", style: { bottom: "27%", left: "37%", width: "45%", height: "45%" } },
  { type: "tangga", startBox: 50, endBox: 70, imageSrc: "assets/ular dan tangga/tangga-box-50.png", style: { bottom: "33%", left: "67%", width: "57%", height: "44%" } },
  { type: "tangga", startBox: 61, endBox: 80, imageSrc: "assets/ular dan tangga/tangga-box-61.png", style: { bottom: "46%", left: "-19%", width: "46%", height: "48%" } },
  { type: "tangga", startBox: 69, endBox: 90, imageSrc: "assets/ular dan tangga/tangga-box-69.png", style: { bottom: "52%", left: "63%", width: "55%", height: "46%" } },
  { type: "tangga", startBox: 82, endBox: 84, imageSrc: "assets/ular dan tangga/tangga-box-82.png", style: { bottom: "63%", left: "-6%", width: "60%", height: "44%" } },
  { type: "tangga", startBox: 88, endBox: 94, imageSrc: "assets/ular dan tangga/tangga-box-88.png", style: { bottom: "65%", left: "47%", width: "47%", height: "48%" } },
  { type: "ular", startBox: 14, endBox: 5, imageSrc: "assets/ular dan tangga/ular-box-14.png", style: { bottom: "-16%", left: "30%", width: "51%", height: "50%" } },
  { type: "ular", startBox: 27, endBox: 8, imageSrc: "assets/ular dan tangga/ular-box-27.png", style: { bottom: "-10%", left: "49%", width: "45%", height: "48%" } },
  { type: "ular", startBox: 31, endBox: 11, imageSrc: "assets/ular dan tangga/ular-box-31.png", style: { bottom: "0%", left: "69%", width: "54%", height: "48%" } },
  { type: "ular", startBox: 39, endBox: 2, imageSrc: "assets/ular dan tangga/ular-box-39.png", style: { bottom: "-6%", left: "-7%", width: "47%", height: "52%" } },
  { type: "ular", startBox: 42, endBox: 37, imageSrc: "assets/ular dan tangga/ular-box-42.png", style: { bottom: "15%", left: "-1%", width: "49%", height: "47%" } },
  { type: "ular", startBox: 49, endBox: 34, imageSrc: "assets/ular dan tangga/ular-box-49.png", style: { bottom: "15%", left: "52%", width: "44%", height: "49%" } },
  { type: "ular", startBox: 55, endBox: 36, imageSrc: "assets/ular dan tangga/ular-box-55.png", style: { bottom: "18%", left: "27%", width: "47%", height: "53%" } },
  { type: "ular", startBox: 58, endBox: 45, imageSrc: "assets/ular dan tangga/ular-box-58.png", style: { bottom: "30%", left: "14%", width: "45%", height: "41%" } },
  { type: "ular", startBox: 78, endBox: 76, imageSrc: "assets/ular dan tangga/ular-box-78.png", style: { bottom: "53%", left: "12%", width: "48%", height: "41%" } },
  { type: "ular", startBox: 86, endBox: 66, imageSrc: "assets/ular dan tangga/ular-box-86.png", style: { bottom: "50%", left: "35%", width: "44%", height: "54%" } },
  { type: "ular", startBox: 89, endBox: 35, imageSrc: "assets/ular dan tangga/ular-box-89.png", style: { bottom: "31%", left: "43%", width: "54%", height: "59%" } },
  { type: "ular", startBox: 95, endBox: 87, imageSrc: "assets/ular dan tangga/ular-box-95.png", style: { bottom: "64%", left: "35%", width: "49%", height: "50%" } },
  { type: "ular", startBox: 96, endBox: 62, imageSrc: "assets/ular dan tangga/ular-box-96.png", style: { bottom: "54%", left: "2%", width: "57%", height: "48%" } },
  { type: "ular", startBox: 99, endBox: 81, imageSrc: "assets/ular dan tangga/ular-box-99.png", style: { bottom: "68%", left: "-15%", width: "51%", height: "44%" } }
];

// Fungsi renderObstacles
function renderObstacles() {
  obstacles.forEach(obs => {
    const img = document.createElement("img");
    img.src = obs.imageSrc;
    img.classList.add("obstacle-img");
    img.style.bottom = obs.style.bottom; 
    img.style.left = obs.style.left;
    img.style.width = obs.style.width;
    img.style.height = obs.style.height;
    if(obs.style.transform) { img.style.transform = obs.style.transform; }
    board.appendChild(img);
  });
}
renderObstacles();

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

const dataPertanyaan = {
  4: { soal: "Angka urutan untuk mengakses elemen dalam sebuah Array disebut apa?", opsi: ["Value", "Pointer", "Indeks"], jawaban: 2 },
  18: { soal: "Berapakah nilai indeks pertama dalam sebuah Array pada umumnya?", opsi: ["0", "1", "-1"], jawaban: 0 },
  39: { soal: "Apa kelemahan utama dari struktur data Array?", opsi: ["Tidak bisa menyimpan angka", "Ukurannya statis (tetap) dan sulit diubah", "Datanya selalu acak"], jawaban: 1 },
  10: { soal: "Jika kita menggunakan perintah Pop pada Stack, data mana yang akan terhapus?", opsi: ["Data paling bawah", "Data yang di tengah", "Data yang paling atas / terakhir"], jawaban: 2 },
  14: { soal: "Apa prinsip utama yang digunakan oleh struktur data Stack?", opsi: ["FIFO (First In, First Out)", "LIFO (Last In, First Out)", "LILO (Last In, Last Out)"], jawaban: 1 },
  31: { soal: "Istilah untuk menambahkan data baru ke dalam Stack adalah...", opsi: ["Insert", "Pop", "Push"], jawaban: 2 },
  40: { soal: "Queue beroperasi menggunakan prinsip...", opsi: ["FIFO", "LIFO", "Random Access"], jawaban: 0 },
  46: { soal: "Operasi mengeluarkan data dari urutan terdepan dalam Queue disebut?", opsi: ["Enqueue", "Dequeue", "Pop"], jawaban: 1 },
  25: { soal: "Elemen dasar pembentuk Linked List yang berisi data dan pointer disebut?", opsi: ["Indeks", "Node", "Array"], jawaban: 1 },
  27: { soal: "Apa kelebihan utama Linked List dibandingkan dengan Array?", opsi: ["Ukurannya dinamis dan fleksibel", "Lebih mudah mencari data secara acak", "Tidak membutuhkan memori sama sekali"], jawaban: 0 },
  42: { soal: "Pointer pada Node Tail (terakhir) di Singly Linked List akan menunjuk ke mana?", opsi: ["Kembali ke Head", "Null / Kosong", "Ke elemen sebelumnya"], jawaban: 1 },
  49: { soal: "Node terakhir dalam antrean Linked List disebut dengan...", opsi: ["Head", "Tail", "Null"], jawaban: 1 },
  50: { soal: "Titik awal atau Node pertama dalam sebuah Linked List dinamakan...", opsi: ["Root", "Tail", "Head"], jawaban: 2 },
  55: { soal: "Pada Doubly Linked List, pointer yang menunjuk ke Node sebelumnya disebut...", opsi: ["Next", "Null", "Prev"], jawaban: 2 },
  61: { soal: "Apa perbedaan Doubly Linked List dengan Singly Linked List?", opsi: ["Memiliki dua pointer (Prev dan Next)", "Tidak memiliki Node", "Hanya bisa menyimpan dua data"], jawaban: 0 },
  58: { soal: "Node paling puncak dalam struktur Tree disebut...", opsi: ["Leaf", "Root", "Head"], jawaban: 1 },
  78: { soal: "Node yang terletak di ujung bawah dan tidak memiliki Child disebut...", opsi: ["Branch", "Root", "Leaf"], jawaban: 2 },
  69: { soal: "Pada BST, jika kita menyisipkan nilai yang lebih kecil dari Root, nilai tersebut akan diletakkan di...", opsi: ["Cabang Kiri", "Cabang Kanan", "Menggantikan Root"], jawaban: 0 },
  82: { soal: "Berapa batas maksimal anak (child) yang boleh dimiliki oleh sebuah Node dalam Binary Tree?", opsi: ["1", "2", "Tidak terbatas"], jawaban: 1 },
  88: { soal: "Dalam Graph, titik-titik yang menyimpan data disebut dengan...", opsi: ["Edge", "Vertex / Node", "Root"], jawaban: 1 },
  99: { soal: "Graph yang memiliki panah atau arah pada Edge-nya dinamakan...", opsi: ["Undirected Graph", "Directed Graph", "Binary Graph"], jawaban: 1 },
  86: { soal: "Apa istilah yang digunakan ketika ada dua data yang dikonversi menjadi nomor indeks yang sama di Hash Table?", opsi: ["Overloading", "Error", "Collision"], jawaban: 2 },
  89: { soal: "Rumus atau fungsi yang digunakan untuk mengubah Kunci (Key) menjadi indeks pada Hash Table disebut...", opsi: ["Hash Function", "Node Function", "Stack Function"], jawaban: 0 },
  95: { soal: "Jika waktu pencarian bergantung pada jumlah total data secara berurutan, ini dilambangkan dengan...", opsi: ["O(1)", "O(n)", "O(0)"], jawaban: 1 },
  96: { soal: "Notasi Big O manakah yang menunjukkan bahwa waktu akses data bersifat konstan dan instan?", opsi: ["O(n)", "O(1)", "O(log n)"], jawaban: 1 }
};


// ==========================================
// ELEMEN DOM & VARIABEL GLOBAL
// ==========================================
const btnMulai = document.getElementById("btn-mulai");
const popupPetarung = document.getElementById("popup-petarung");
const dropdownPetarung = document.getElementById("dropdown-petarung");
const btnGas = document.getElementById("btn-gas");
const playersContainer = document.getElementById("players-container");

const popupMateri = document.getElementById("popup-materi");
const materiJudul = document.getElementById("materi-judul");
const materiTeks = document.getElementById("materi-teks");
const btnMateriTutup = document.getElementById("btn-materi-tutup");
const sfxMateri = document.getElementById("sfx-materi");
const notifExtraRoll = document.getElementById("notif-extra-roll");

const popupPertanyaan = document.getElementById("popup-pertanyaan");
const tanyaJudul = document.getElementById("tanya-judul");
const tanyaTeks = document.getElementById("tanya-teks");
const tanyaOpsiContainer = document.getElementById("tanya-opsi-container");
const btnTanyaJawab = document.getElementById("btn-tanya-jawab");
const notifGame = document.getElementById("notif-game");

const sfxNaikTangga = document.getElementById("sfx-naik-tangga");
const sfxGagalTangga = document.getElementById("sfx-gagal-tangga");
const sfxTurunUlar = document.getElementById("sfx-turun-ular");
const sfxSelamatUlar = document.getElementById("sfx-selamat-ular");
const btnRoll = document.getElementById("btn-roll");
const diceImg = document.getElementById("dice-img");
const sfxDice = document.getElementById("sfx-dice");
const sfxStep = document.getElementById("sfx-step");

// Tambahan BGM Game
const bgmGame = document.getElementById("bgm-game");
if(bgmGame) bgmGame.volume = 0.6; // Atur volume BGM

let playersData = []; 
let currentPlayerIndex = 0;
let currentObstacle = null;
let selectedOptionIndex = null;
let finalChallengeData = { count: 0, target: 5, player: null };

// Flag untuk menentukan apakah pemain berhak dapat ekstra dadu setelah tutup pop-up materi
let isExtraRoll = false; 

// Fungsi sleep
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


// ==========================================
// 3. LOGIKA AWAL GAME (MULAI & SPAWN)
// ==========================================

// Event Listener Tombol Mulai
btnMulai.addEventListener("click", () => {
  // BGM Putar secara otomatis sejak tombol Mulai diklik (awal banget)
  try { if(bgmGame) bgmGame.play(); } catch(e) { console.log("BGM Error:", e); }
  
  popupPetarung.classList.remove("hidden");
});

// Event Listener Tombol Gas
btnGas.addEventListener("click", async () => {
  const jumlahPemain = parseInt(dropdownPetarung.value);
  popupPetarung.classList.add("hidden");
  btnMulai.innerText = "RESTART";

  playersContainer.innerHTML = "";
  playersData = [];

  popupPertanyaan.classList.add("hidden");
  popupMateri.classList.add("hidden");

  for (let i = 1; i <= jumlahPemain; i++) {
    const img = document.createElement("img");
    img.src = `assets/player/p${i}.png`;
    img.classList.add("player-pawn");
    img.style.width = "100%"; 
    img.style.left = "0%";  
    img.style.bottom = "0%";
    playersContainer.appendChild(img);

    try {
      const spawnSound = new Audio(`assets/sound effect/spawnp${i}.mp3`);
      spawnSound.play();
    } catch (err) {}

    await sleep(1500);

    img.style.width = "9%"; 
    img.style.bottom = "1%";
    img.style.left = `-${i * 6}%`; 
    playersData.push({ id: i, element: img, position: 0 });
    await sleep(1000);
  }

  await sleep(500);

  const box1Offsets = [
    { left: '0%', bottom: '3%' },   
    { left: '3.5%', bottom: '3%' }, 
    { left: '0%', bottom: '-2%' },   
    { left: '3.5%', bottom: '-2%' }  
  ];

  for (let i = 0; i < playersData.length; i++) {
    let p = playersData[i];
    p.element.style.left = box1Offsets[i].left;
    p.element.style.bottom = box1Offsets[i].bottom;
    p.position = 1; 
    await sleep(600); 
  }

  currentPlayerIndex = 0; 
  document.getElementById("current-player").innerText = `Player 1`;
  document.getElementById("side-panel").classList.remove("hidden");
  btnRoll.disabled = false;
});


// ==========================================
// KUMPULAN FUNGSI UTAMA
// ==========================================

// Fungsi getCoordinates
function getCoordinates(position, playerIndex) {
  if (position > 100) position = 100;
  const row = Math.floor((position - 1) / 10);
  let col = (position - 1) % 10;
  if (row % 2 !== 0) col = 9 - col; 

  const offsets = [
      { left: 0, bottom: 3 },    
      { left: 3.5, bottom: 3 },  
      { left: 0, bottom: -2 },   
      { left: 3.5, bottom: -2 }  
    ];

  return {
    bottom: `${(row * 10) + offsets[playerIndex].bottom}%`,
    left: `${(col * 10) + offsets[playerIndex].left}%`
  };
}

// Fungsi tampilkanNotif
function tampilkanNotif(pesan) {
  notifGame.innerText = pesan;
  notifGame.classList.remove("hidden");
  notifGame.style.animation = 'none';
  notifGame.offsetHeight; 
  notifGame.style.animation = null;
  setTimeout(() => { notifGame.classList.add("hidden"); }, 3000);
}

// Fungsi showMateri (Ditambah parameter playSfx untuk mencegah suara jika dihukum)
function showMateri(posBox, playSfx = true) {
    const materi = dataMateri[posBox];
    materiJudul.innerText = materi.judul;
    materiTeks.innerText = materi.teks;
    if(playSfx) {
        try { sfxMateri.currentTime = 0; sfxMateri.play(); } catch(e) {}
    }
    popupMateri.classList.remove("hidden");
}

// Fungsi movePlayerStepByStep
async function movePlayerStepByStep(steps) {
  let player = playersData[currentPlayerIndex];

  if (player.position + steps > 100) {
    const butuhAngka = 100 - player.position;
    tampilkanNotif(`Dadu kegedean! Just butuh ${butuhAngka} buat menang.`);
    await sleep(2000);
    nextTurn();
    return;
  }

  player.element.style.transition = "all 0.4s ease-in-out";

  for (let s = 0; s < steps; s++) {
    player.position++; 
    const coords = getCoordinates(player.position, currentPlayerIndex);
    player.element.style.bottom = coords.bottom;
    player.element.style.left = coords.left;

    try { sfxStep.currentTime = 0; sfxStep.play(); } catch(e) {}
    await sleep(400); 

    if (player.position === 100) break;
  }

  player.element.style.transition = "all 1s ease-in-out";

  if (player.position === 100) {
      await sleep(500); 
      startFinalChallenge(player);
      return; 
  }

  const boxNumbers = [3, 6, 13, 21, 26, 30, 41, 52, 64, 74, 91]; 
  if (boxNumbers.includes(player.position)) {
    isExtraRoll = true; // Berhak dapat ekstra lemparan
    showMateri(player.position, true); // Putar SFX materi
    return; 
  }

  const obstacle = obstacles.find(obs => obs.startBox === player.position);
  if (obstacle) {
    currentObstacle = obstacle;
    triggerQuestion(obstacle.type === "tangga" ? "TANGGA" : "ULAR");
    return; 
  }

  nextTurn();
}

// Fungsi startFinalChallenge
function startFinalChallenge(player) {
    finalChallengeData = { count: 0, target: 5, player: player };
    tampilkanNotif("SELAMAT DATANG DI FINAL! Jawab 5 soal.");
    setTimeout(() => askNextFinalQuestion(), 2000);
}

// Fungsi askNextFinalQuestion
function askNextFinalQuestion() {
    const keys = Object.keys(dataPertanyaan);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    currentObstacle = { type: "final", startBox: randomKey };
    triggerQuestion("FINAL");
}

// Fungsi triggerQuestion
function triggerQuestion(type) {
    const qData = dataPertanyaan[currentObstacle.startBox];
    
    if(type === "FINAL") {
        tanyaJudul.innerText = `Ujian Akhir (${finalChallengeData.count}/5)`;
        tanyaJudul.style.color = "black";
    } else {
        tanyaJudul.innerText = type === "TANGGA" ? "TANGGA DITEMUKAN!" : "AWAS ULAR!";
        tanyaJudul.style.color = type === "TANGGA" ? "#9dff00" : "#ff3b3b";
    }
    
    tanyaTeks.innerText = qData.soal;
    tanyaOpsiContainer.innerHTML = "";
    selectedOptionIndex = null;
    
    const huruf = ["A", "B", "C"];
    qData.opsi.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.classList.add("opsi-btn");
      btn.innerText = `${huruf[idx]}. ${opt}`;
      btn.onclick = () => {
        document.querySelectorAll(".opsi-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedOptionIndex = idx;
      };
      tanyaOpsiContainer.appendChild(btn);
    });

    popupPertanyaan.classList.remove("hidden");
} 

// Fungsi getMateriBoxForQuestion
function getMateriBoxForQuestion(questionNumber) {
    const qNum = parseInt(questionNumber);
    if ([4, 18, 39].includes(qNum)) return 3;
    if ([10, 14, 31].includes(qNum)) return 6;
    if ([40, 46].includes(qNum)) return 13;
    if ([25, 27].includes(qNum)) return 21;
    if ([42, 49, 50].includes(qNum)) return 26;
    if ([55, 61].includes(qNum)) return 30;
    if ([58, 78].includes(qNum)) return 41;
    if ([69, 82].includes(qNum)) return 52;
    if ([88, 99].includes(qNum)) return 64;
    if ([86, 89].includes(qNum)) return 74;
    if ([95, 96].includes(qNum)) return 91;
    return 3; 
}

// Fungsi jumpPlayerTo
async function jumpPlayerTo(player, targetPosition) {
  player.position = targetPosition;
  const coords = getCoordinates(targetPosition, currentPlayerIndex);
  player.element.style.bottom = coords.bottom;
  player.element.style.left = coords.left;
  await sleep(1000);
}

// Fungsi nextTurn
function nextTurn() {
  currentPlayerIndex = (currentPlayerIndex + 1) % playersData.length;
  document.getElementById("current-player").innerText = `Player ${currentPlayerIndex + 1}`;
  btnRoll.disabled = false;
}

// ==========================================
// 6. EVENT LISTENER TOMBOL-TOMBOL
// ==========================================

// Event Listener Tombol Roll
btnRoll.addEventListener("click", () => {
  btnRoll.disabled = true; 
  sfxDice.currentTime = 0;
  sfxDice.play();
  let rollInterval = setInterval(() => {
    diceImg.src = `assets/dadu/dadu-${Math.floor(Math.random() * 6) + 1}.png`;
  }, 100);
  setTimeout(() => {
    clearInterval(rollInterval);
    const finalNumber = Math.floor(Math.random() * 6) + 1; 
    diceImg.src = `assets/dadu/dadu-${finalNumber}.png`;
    movePlayerStepByStep(finalNumber);
  }, 1000); 
});

// Event Listener Tombol Tutup Materi
btnMateriTutup.addEventListener("click", () => {
  popupMateri.classList.add("hidden");
  
  // Cek apakah pemain berhak dapat ekstra roll atau sekadar kena hukuman belajar materi
  if (isExtraRoll) {
      notifExtraRoll.classList.remove("hidden");
      setTimeout(() => { notifExtraRoll.classList.add("hidden"); }, 3000);
      btnRoll.disabled = false; // Pemain sama main lagi
  } else {
      nextTurn(); // Hukuman selesai, ganti giliran musuh
  }
});

// Event Listener Tombol Jawab
btnTanyaJawab.addEventListener("click", async () => {
  if (selectedOptionIndex === null) { tampilkanNotif("Pilih jawaban!"); return; }

  let player = playersData[currentPlayerIndex];
  const qData = dataPertanyaan[currentObstacle.startBox];
  const isCorrect = (selectedOptionIndex === qData.jawaban);

  if (currentObstacle.type === "final") {
    if (isCorrect) {
        finalChallengeData.count++;
        if (finalChallengeData.count >= 5) {
            popupPertanyaan.classList.add("hidden");
            try { document.getElementById("sfx-menang").play(); } catch(e) {}
            player.element.style.transition = "all 1s ease-in-out";
            player.element.style.width = "100%"; 
            player.element.style.left = "0%";  
            player.element.style.bottom = "0%";
            tampilkanNotif(`SELAMAT! Player ${player.id} MENANG!`);
        } else {
            try { sfxSelamatUlar.currentTime = 0; sfxSelamatUlar.play(); } catch(e) {}
            tampilkanNotif(`Benar! Progress: ${finalChallengeData.count}/5`);
            setTimeout(askNextFinalQuestion, 1000); 
        }
    } else {
        popupPertanyaan.classList.add("hidden");
        try { document.getElementById("sfx-gagal-finish").play(); } catch(e) {}
        tampilkanNotif("Salah! Balik ke materi.");
        
        let fallbackMateriBox = getMateriBoxForQuestion(currentObstacle.startBox);
        player.position = fallbackMateriBox; 
        const coords = getCoordinates(fallbackMateriBox, currentPlayerIndex);
        player.element.style.bottom = coords.bottom;
        player.element.style.left = coords.left;
        
        isExtraRoll = false; 
        showMateri(fallbackMateriBox, false); // Tanpa SFX
    }
  } else {
    // Logika Ular/Tangga Biasa
    popupPertanyaan.classList.add("hidden");
    if (currentObstacle.type === "tangga") {
      if (isCorrect) { 
          try { sfxNaikTangga.currentTime = 0; sfxNaikTangga.play(); } catch(e) {} 
          await jumpPlayerTo(player, currentObstacle.endBox); 
          nextTurn();
      } else { 
          try { sfxGagalTangga.currentTime = 0; sfxGagalTangga.play(); } catch(e) {} 
          tampilkanNotif("Duongo cik, haduh haduh."); 
          
          isExtraRoll = false; 
          let fallbackMateriBox = getMateriBoxForQuestion(currentObstacle.startBox);
          showMateri(fallbackMateriBox, false); 
      }
    } else {
      if (isCorrect) { 
          try { sfxSelamatUlar.currentTime = 0; sfxSelamatUlar.play(); } catch(e) {} 
          tampilkanNotif("Hoki, jawaban lu bener, ulernya muak."); 
          nextTurn();
      } else { 
          try { sfxTurunUlar.currentTime = 0; sfxTurunUlar.play(); } catch(e) {} 
          await jumpPlayerTo(player, currentObstacle.endBox); 
          
          isExtraRoll = false; 
          let fallbackMateriBox = getMateriBoxForQuestion(currentObstacle.startBox);
          showMateri(fallbackMateriBox, false); 
      }
    }
  }
});