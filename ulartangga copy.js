// ==========================================
// DEKLARASI VARIABEL & ELEMEN HTML
// ==========================================
const board = document.getElementById("board");
const playersContainer = document.getElementById("players-container");
const vibrantColors = ["#C264FE", "#FE3B3A", "#4B75FE", "#FDD749", "#78D85B", "#FF8E44"];
function randomColor() { return vibrantColors[Math.floor(Math.random() * vibrantColors.length)]; }

// Data Materi (Box Materi)
const materiBoxes = [3, 6, 13, 21, 26, 30, 41, 52, 64, 74, 91];
const dataMateri = {
  3: { judul: "Pengenalan Array", teks: "Struktur Data adalah cara mengatur data... (seperti rak loker yang ukurannya tetap)." },
  6: { judul: "Konsep Stack (Tumpukan)", teks: "Stack bekerja dengan prinsip LIFO. (seperti menumpuk piring kotor, Push dan Pop)." },
  13: { judul: "Konsep Queue (Antrean)", teks: "Queue menggunakan prinsip FIFO. (seperti antrean kasir, Enqueue dan Dequeue)." },
  21: { judul: "Pengenalan Linked List", teks: "Linked List menyimpan data dinamis. (seperti berburu harta karun dengan Node dan Pointer)." },
  26: { judul: "Singly Linked List", teks: "Petunjuk arahnya berjalan satu arah. (seperti gerbong kereta, dari Head ke Tail menuju Null)." },
  30: { judul: "Doubly Linked List", teks: "Setiap kotak memiliki dua penunjuk (Next dan Prev). Bisa maju dan mundur seperti baca buku." },
  41: { judul: "Struktur Data Tree", teks: "Tree adalah hierarki bertingkat. (seperti bagan organisasi, ada Root, Child, dan Leaf)." },
  52: { judul: "Binary Search Tree", teks: "Aturan ketat: Kiri lebih kecil, Kanan lebih besar. Pencarian super cepat." },
  64: { judul: "Struktur Data Graph", teks: "Titik terhubung bebas. (Vertex dan Edge). Bisa Directed (searah) atau Undirected (dua arah)." },
  74: { judul: "Hash Table", teks: "Seperti loker otomatis dengan Fungsi Hash. Tabrakan nomor loker disebut Collision." },
  91: { judul: "Big O Notation", teks: "Rapor kecepatan program. O(1) konstan (Speed Dial), O(n) linier (Scroll buku telepon)." }
};

// Data Pertanyaan Ular & Tangga (Mapping berdasar StartBox)
const dataPertanyaan = {
  4: { soal: "Angka urutan untuk mengakses elemen dalam sebuah Array disebut apa?", opsi: ["Value", "Pointer", "Indeks"], jawaban: 2 },
  18: { soal: "Berapakah nilai indeks pertama dalam Array?", opsi: ["0", "1", "-1"], jawaban: 0 },
  39: { soal: "Apa kelemahan utama struktur data Array?", opsi: ["Tidak simpan angka", "Ukurannya statis", "Datanya acak"], jawaban: 1 },
  10: { soal: "Jika menggunakan perintah Pop, data mana yang terhapus?", opsi: ["Paling bawah", "Di tengah", "Paling atas"], jawaban: 2 },
  14: { soal: "Prinsip utama struktur data Stack?", opsi: ["FIFO", "LIFO", "LILO"], jawaban: 1 },
  31: { soal: "Istilah menambahkan data baru ke dalam Stack...", opsi: ["Insert", "Pop", "Push"], jawaban: 2 },
  40: { soal: "Queue beroperasi menggunakan prinsip...", opsi: ["FIFO", "LIFO", "Random"], jawaban: 0 },
  46: { soal: "Operasi mengeluarkan data terdepan dalam Queue disebut?", opsi: ["Enqueue", "Dequeue", "Pop"], jawaban: 1 },
  25: { soal: "Elemen dasar Linked List berisi data dan pointer disebut?", opsi: ["Indeks", "Node", "Array"], jawaban: 1 },
  27: { soal: "Kelebihan utama Linked List dibanding Array?", opsi: ["Ukurannya dinamis", "Mencari acak", "Tanpa memori"], jawaban: 0 },
  42: { soal: "Pointer pada Node Tail menunjuk ke mana?", opsi: ["Head", "Null", "Elemen sebelumnya"], jawaban: 1 },
  49: { soal: "Node terakhir dalam Linked List disebut...", opsi: ["Head", "Tail", "Null"], jawaban: 1 },
  50: { soal: "Titik awal Linked List dinamakan...", opsi: ["Root", "Tail", "Head"], jawaban: 2 },
  55: { soal: "Pointer yang menunjuk ke Node sebelumnya disebut...", opsi: ["Next", "Null", "Prev"], jawaban: 2 },
  61: { soal: "Perbedaan Doubly Linked List dengan Singly?", opsi: ["Dua pointer", "Tanpa Node", "Hanya 2 data"], jawaban: 0 },
  58: { soal: "Node puncak dalam Tree disebut...", opsi: ["Leaf", "Root", "Head"], jawaban: 1 },
  78: { soal: "Node paling bawah tanpa Child disebut...", opsi: ["Branch", "Root", "Leaf"], jawaban: 2 },
  69: { soal: "Nilai lebih kecil dari Root di BST diletakkan di...", opsi: ["Cabang Kiri", "Cabang Kanan", "Menggantikan Root"], jawaban: 0 },
  82: { soal: "Maksimal child dalam Binary Tree?", opsi: ["1", "2", "Tak terbatas"], jawaban: 1 },
  88: { soal: "Titik yang menyimpan data dalam Graph disebut...", opsi: ["Edge", "Vertex / Node", "Root"], jawaban: 1 },
  99: { soal: "Graph dengan arah panah pada Edge-nya dinamakan...", opsi: ["Undirected", "Directed", "Binary"], jawaban: 1 },
  86: { soal: "Dua data dengan indeks sama di Hash Table disebut?", opsi: ["Overloading", "Error", "Collision"], jawaban: 2 },
  89: { soal: "Fungsi pengubah Key menjadi indeks disebut...", opsi: ["Hash Function", "Node Function", "Stack Function"], jawaban: 0 },
  95: { soal: "Pencarian bergantung jumlah data secara berurutan dilambangkan...", opsi: ["O(1)", "O(n)", "O(0)"], jawaban: 1 },
  96: { soal: "Notasi akses data bersifat konstan dan instan?", opsi: ["O(n)", "O(1)", "O(log n)"], jawaban: 1 }
};

const obstacles = [
  // --- TANGGA ---
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
  // --- ULAR ---
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

// Audio Elements
const sfxStep = document.getElementById("sfx-step");
const sfxDice = document.getElementById("sfx-dice");
const sfxUp = document.getElementById("sfx-up");
const sfxDown = document.getElementById("sfx-down");
const sfxWin = document.getElementById("sfx-win");

// State Game
let players = [];
let currentPlayerIndex = 0;
let finishChallengeCorrectCount = 0;

// ==========================================
// RENDER PAPAN & OBSTACLES
// ==========================================
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
      if (materiBoxes.includes(number)) {
        cell.innerHTML = `<span class="number">${number}</span><span class="materi-text">MATERI</span>`;
      } else {
        cell.innerHTML = `<span class="number">${number}</span>`;
      }
    }
    board.appendChild(cell);
  });
}

function renderObstacles() {
  obstacles.forEach(obs => {
    const img = document.createElement("img");
    img.src = obs.imageSrc;
    img.classList.add("obstacle-img");
    img.style.bottom = obs.style.bottom;
    img.style.left = obs.style.left;
    img.style.width = obs.style.width;
    img.style.height = obs.style.height;
    board.appendChild(img);
  });
}
renderObstacles();

// ==========================================
// LOGIKA KOORDINAT & POSISI PLAYER
// ==========================================
function getCoordinates(position, playerIndex) {
  // Posisi di luar (antre) jika position 0
  if (position === 0) return { bottom: "5%", left: "-10%" };

  const row = Math.floor((position - 1) / 10);
  let col = (position - 1) % 10;
  if (row % 2 !== 0) col = 9 - col; // zigzag

  // Margin offset agar bidak tidak menumpuk di 1 kotak
  const offsets = [
    { bottom: 5, left: 1 }, // P1: Kiri Atas
    { bottom: 5, left: 5 }, // P2: Kanan Atas
    { bottom: 1, left: 1 }, // P3: Kiri Bawah
    { bottom: 1, left: 5 }  // P4: Kanan Bawah
  ];

  const baseBottom = row * 10;
  const baseLeft = col * 10;
  
  return {
    bottom: `${baseBottom + offsets[playerIndex].bottom}%`,
    left: `${baseLeft + offsets[playerIndex].left}%`
  };
}

function updatePlayerPosition(playerIndex, position) {
  players[playerIndex].position = position;
  const coords = getCoordinates(position, playerIndex);
  players[playerIndex].element.style.bottom = coords.bottom;
  players[playerIndex].element.style.left = coords.left;
}

// ==========================================
// INISIALISASI GAME (MENU START)
// ==========================================
document.getElementById("btn-start").addEventListener("click", () => {
  const numPlayers = parseInt(document.getElementById("player-count").value);
  document.getElementById("start-menu").classList.add("hidden");

  // Buat Player
  for (let i = 0; i < numPlayers; i++) {
    const img = document.createElement("img");
    img.src = `assets/player/p${i + 1}.png`; // Memanggil p1.png, p2.png, dsb
    img.classList.add("player-pawn");
    playersContainer.appendChild(img);
    
    players.push({
      id: i, name: `Player ${i + 1}`, position: 0, element: img
    });
    
    // Set posisi awal mengantre di luar layar
    updatePlayerPosition(i, 0);
  }

  updateTurnUI();

  // Animasi masuk antrean ke Box 1
  setTimeout(() => {
    players.forEach((p, index) => {
      setTimeout(() => {
        updatePlayerPosition(index, 1);
        sfxStep.currentTime = 0; sfxStep.play();
      }, index * 400); // Masuk satu per satu jeda 400ms
    });
  }, 500);
});

function updateTurnUI() {
  document.getElementById("current-player-text").innerText = players[currentPlayerIndex].name;
}

// ==========================================
// LOGIKA DADU & PERGERAKAN
// ==========================================
const btnRoll = document.getElementById("btn-roll");
const diceImg = document.getElementById("dice-img");

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
  }, 1000); // 1 detik sinkron dengan audio
});

function movePlayerStepByStep(steps) {
  let stepsTaken = 0;
  let player = players[currentPlayerIndex];

  let moveInterval = setInterval(() => {
    if (stepsTaken < steps && player.position < 100) {
      player.position++;
      updatePlayerPosition(player.id, player.position);
      sfxStep.currentTime = 0; sfxStep.play();
      stepsTaken++;
    } else {
      clearInterval(moveInterval);
      checkTileAction(player);
    }
  }, 400);
}

// ==========================================
// LOGIKA KOTAK (MATERI, ULAR, TANGGA, FINISH)
// ==========================================
function checkTileAction(player) {
  if (player.position === 100) {
    startFinishChallenge();
    return;
  }

  // Cek Kotak Materi
  if (materiBoxes.includes(player.position)) {
    showMateriPopup(player.position);
    return;
  }

  // Cek Ular / Tangga
  const obstacle = obstacles.find(obs => obs.startBox === player.position);
  if (obstacle) {
    showObstacleQuestion(obstacle);
    return;
  }

  // Kotak biasa, ganti giliran
  nextTurn();
}

function nextTurn() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  updateTurnUI();
  btnRoll.disabled = false;
}

// --- POPUP SYSTEM ---
const popupOverlay = document.getElementById("popup-overlay");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const popupOptions = document.getElementById("quiz-options");
const popupActions = document.getElementById("popup-actions");
const btnPopupOk = document.getElementById("btn-popup-ok");

// 1. POPUP MATERI (Bonus 1x Roll)
function showMateriPopup(boxNum) {
  const materi = dataMateri[boxNum];
  popupTitle.innerText = "KOTAK MATERI: " + materi.judul;
  popupTitle.style.color = "#4B75FE";
  popupText.innerText = materi.teks;
  
  popupOptions.classList.add("hidden");
  popupActions.classList.remove("hidden");
  
  btnPopupOk.innerText = "TUTUP & ROLL LAGI!";
  btnPopupOk.onclick = () => {
    popupOverlay.classList.add("hidden");
    btnRoll.disabled = false; // Pemain yang sama main lagi (Bonus)
  };
  
  popupOverlay.classList.remove("hidden");
}

// 2. POPUP TANTANGAN ULAR & TANGGA
function showObstacleQuestion(obstacle) {
  const isTangga = obstacle.type === "tangga";
  const questionData = dataPertanyaan[obstacle.startBox];
  
  popupTitle.innerText = isTangga ? "TANTANGAN TANGGA!" : "AWAS ULAR!";
  popupTitle.style.color = isTangga ? "#78D85B" : "#FE3B3A";
  popupText.innerText = questionData.soal;
  
  popupActions.classList.add("hidden");
  popupOptions.innerHTML = "";
  popupOptions.classList.remove("hidden");

  questionData.opsi.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.classList.add("quiz-btn");
    btn.innerText = opt;
    btn.onclick = () => handleAnswer(obstacle, idx === questionData.jawaban);
    popupOptions.appendChild(btn);
  });

  popupOverlay.classList.remove("hidden");
}

function handleAnswer(obstacle, isCorrect) {
  popupOverlay.classList.add("hidden");
  const player = players[currentPlayerIndex];

  if (obstacle.type === "tangga") {
    if (isCorrect) {
      alert("BENAR! Kamu naik tangga.");
      sfxUp.play();
      updatePlayerPosition(player.id, obstacle.endBox);
    } else {
      alert("SALAH! Kamu gagal naik.");
    }
  } else { // Ular
    if (isCorrect) {
      alert("BENAR! Kamu selamat dari ular.");
    } else {
      alert("SALAH! Kamu digigit ular.");
      sfxDown.play();
      updatePlayerPosition(player.id, obstacle.endBox);
    }
  }
  
  setTimeout(nextTurn, 1000); // Beri jeda animasi sebelum giliran ganti
}

// ==========================================
// TANTANGAN FINISH & WIN SCREEN
// ==========================================
function startFinishChallenge() {
  finishChallengeCorrectCount = 0;
  alert(`${players[currentPlayerIndex].name} mencapai 100! Jawab 5 pertanyaan beruntun untuk menang!`);
  askRandomFinishQuestion(5);
}

function askRandomFinishQuestion(remaining) {
  if (remaining === 0) {
    triggerWinScreen();
    return;
  }

  // Ambil pertanyaan random dari database
  const keys = Object.keys(dataPertanyaan);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const qData = dataPertanyaan[randomKey];

  popupTitle.innerText = `TANTANGAN FINAL (${6 - remaining}/5)`;
  popupTitle.style.color = "#FF8E44";
  popupText.innerText = qData.soal;
  
  popupActions.classList.add("hidden");
  popupOptions.innerHTML = "";
  popupOptions.classList.remove("hidden");

  qData.opsi.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.classList.add("quiz-btn");
    btn.innerText = opt;
    btn.onclick = () => {
      popupOverlay.classList.add("hidden");
      if (idx === qData.jawaban) {
        askRandomFinishQuestion(remaining - 1);
      } else {
        failFinishChallenge();
      }
    };
    popupOptions.appendChild(btn);
  });

  popupOverlay.classList.remove("hidden");
}

function failFinishChallenge() {
  popupTitle.innerText = "GAGAL FINISH!";
  popupTitle.style.color = "red";
  popupText.innerText = "Kamu salah menjawab! Pilih Box Materi untuk respawn dan belajar kembali.";
  
  popupActions.classList.add("hidden");
  popupOptions.innerHTML = "";
  popupOptions.classList.remove("hidden");

  // Tampilkan 3 opsi respawn secara random
  const shuffledMateri = materiBoxes.sort(() => 0.5 - Math.random()).slice(0, 3);
  shuffledMateri.forEach(boxNum => {
    const btn = document.createElement("button");
    btn.classList.add("quiz-btn");
    btn.innerText = `Kembali ke Box ${boxNum}: ${dataMateri[boxNum].judul}`;
    btn.onclick = () => {
      popupOverlay.classList.add("hidden");
      updatePlayerPosition(players[currentPlayerIndex].id, boxNum);
      setTimeout(nextTurn, 500);
    };
    popupOptions.appendChild(btn);
  });

  popupOverlay.classList.remove("hidden");
}

function triggerWinScreen() {
  sfxWin.play();
  document.getElementById("win-screen").classList.remove("hidden");
  document.getElementById("win-player-text").innerText = `${players[currentPlayerIndex].name} MENANG!`;
  document.getElementById("win-player-img").src = `assets/player/p${currentPlayerIndex + 1}.png`;
}

// Reload Game
document.getElementById("btn-restart").addEventListener("click", () => {
  window.location.reload();
});