const questions = [
    {
        question: "Tindakan apa saja yang termasuk kriminalitas remaja?",
        image: "soal/1.jpg",
        answer: [
            {text: "Tawuran antar kelompok", correct: false},
            {text: "Balapan Liar", correct: false},
            {text: "Penyalahgunaan NAPZA", correct: false},
            {text: "Semua jawaban benar", correct: true}
        ]
    },
    {
        question: "Mengapa kriminalitas remaja dapat terjadi?",
        image: "soal/2.jpg",
        answer: [
            {text: "Karena pelajaran di sekolah terlalu sulit", correct: false},
            {text: "Karena kurangnya waktu tidur remaja", correct: false},
            {text: "Karena tekanan dari lingkungan sosial yang negatif", correct: true},
            {text: "Karena remaja memiliki kekuatan fisik yang lebih besar", correct: false}
        ]
    },
    {
        question: "Apa penyebab utama tawuran antar pelajar?",
        image: "soal/3.jpg",
        answer: [
            {text: "Faktor ekonomi", correct: false},
            {text: "Lingkungan, pengaruh teman sebaya, dan media sosial", correct: true},
            {text: "Hobi pelajar", correct: false},
            {text: "Perintah dari sekolah", correct: false}
        ]
    },
    {
        question: "Apa dampak tawuran terhadap pelaku dan korban?",
        image: "soal/4.jpg",
        answer: [
            {text: "Luka fisik dan trauma psikologis", correct: true},
            {text: "Hadiah dan penghargaan", correct: false},
            {text: "Pembebasan sanksi hukum", correct: false},
            {text: "Mendapat teman baru", correct: false}
        ]
    },
    {
        question: "Apa langkah efektif mencegah kriminalitas remaja?",
        image: "soal/5.jpg",
        answer: [
            {text: "Pendidikan karakter dan pengawasan ketat", correct: true},
            {text: "Menghukum dengan keras semua remaja", correct: false},
            {text: "Melarang bermain di luar rumah", correct: false},
            {text: "Membiarkan remaja mencari jalan sendiri", correct: false}
        ]
    },
    {
        question: "Apa dampak negatif dari penggunaan senjata tajam?",
        image: "soal/6.jpg",
        answer: [
            {text: "Memberi rasa aman", correct: false},
            {text: "Sebagai alat pelindung diri", correct: false},
            {text: "Membantu dalam kegiatan sehari-hari", correct: false},
            {text: "Risiko cedera parah dan konsekuensi hukum", correct: true}
        ]
    },
    {
        question: "Apa dampak negatif dari pembentukan geng motor?",
        image: "soal/7.jpg",
        answer: [
            {text: "Konflik sosial dan rusaknya nama komunitas motor", correct: true},
            {text: "Mendapat teman baru", correct: false},
            {text: "Meningkatkan kreativitas", correct: false},
            {text: "Menjadi lebih mandiri", correct: false}
        ]
    },
    {
        question: "Apa kepanjangan dari NAPZA?",
        image: "soal/8.png",
        answer: [
            {text: "Narkotika, Psikologi, dan Zona Aman", correct: false},
            {text: "Narkotika, Psikotropika, dan Zat Adiktif", correct: true},
            {text: "Narkoba, Alkohol, dan Zat Asli", correct: false},
            {text: "Narkoba, Psikiatri, dan Zat Alternatif", correct: false}
        ]
    },
    {
        question: "Apa yang dimaksud dengan penyalahgunaan narkoba?",
        image: "soal/9.jpg",
        answer: [
            {text: "Penggunaan obat-obatan untuk tujuan medis", correct: false},
            {text: "Penggunaan obat tanpa izin untuk tujuan rekreasi atau pelarian", correct: true},
            {text: "Konsumsi makanan sehat secara berlebihan", correct: false},
            {text: "Penggunaan alat bantu belajar", correct: false}
        ]
    },
    {
        question: "Apa dampak penyalahgunaan narkoba terhadap remaja?",
        image: "soal/10.jpg",
        answer: [
            {text: "Menambah semangat belajar", correct: false},
            {text: "Mempererat hubungan dengan teman", correct: false},
            {text: "Gangguan kesehatan fisik, mental, kecanduan, hingga kematian", correct: true},
            {text: "Meningkatkan kreativitas", correct: false}
        ]
    },
    {
        question: "Mengapa remaja rentan terhadap kecanduan NAPZA?",
        image: "soal/11.jpg",
        answer: [
            {text: "Rasa ingin tahu, pengaruh teman, dan akses mudah terhadap narkoba", correct: true},
            {text: "Ketegasan orang tua terhadap anak", correct: false},
            {text: "Fokus terhadap pendidikan moral", correct: false},
            {text: "Kurangnya keinginan untuk sesuatu yang baru", correct: false}
        ]
    },
    {
        question: "Apakah kecanduan NAPZA bisa sembuh total?",
        image: "soal/12.jpg",
        answer: [
            {text: "Tidak mungkin sembuh", correct: false},
            {text: "Pemulihan tidak memerlukan waktu atau usaha", correct: false},
            {text: "Hanya bisa sembuh dengan metode tradisional", correct: false},
            {text: "Bisa sembuh dengan rehabilitasi dan dukungan bekerlanjutan", correct: true}
        ]
    },
    {
        question: "Bagaimana cara mencegah remaja membawa senjata tajam?",
        image: "soal/13.jpg",
        answer: [
            {text: "Melarang remaja bermain di luar rumah", correct: false},
            {text: "Membiarkan mereka membawa senjata untuk perlindungan", correct: false},
            {text: "Edukasi bahaya senjata tajam, patroli rutin, dan komunikasi aktif", correct: true},
            {text: "Tidak perlu ada pencegahan", correct: false}
        ]
    },
    {
        question: "Apa alasan utama remaja bergabung dengan geng motor?",
        image: "soal/14.jpg",
        answer: [
            {text: "Keinginan mencari identitas dan diakui dalam kelompok", correct: true},
            {text: "Menambah wawasan tentang otomotif", correct: false},
            {text: "Tuntutan dari keluarga", correct: false},
            {text: "Menghindari kegiatan sosial", correct: false}
        ]
    },
    {
        question: "Apa saja tidak kriminal yang dilakukan oleh geng motor?",
        image: "soal/15.jpg",
        answer: [
            {text: "Mengatur lalu lintas", correct: false},
            {text: "Kegiatan sosial seperti bakti lingkungan", correct: false},
            {text: "Membantu pengguna jalan", correct: false},
            {text: "Penyerangan, perusakan fasilitas umum, pencurian, hingga pemerasan", correct: true}
        ]
    }
]

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const questionImageElement = document.getElementById("question-image");
const answerButtonsElement = document.getElementById("answer-buttons");
const bodyQuiz = document.getElementById("body-quiz");

function loadQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Set and show the image
    if (currentQuestion.image) {
        questionImageElement.src = currentQuestion.image;
        questionImageElement.classList.remove("d-none");
    } else {
        questionImageElement.classList.add("d-none");
    }

    // Add answer buttons
    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn", "btn-jawaban");
        if (answer.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    bodyQuiz.className = ""; // Reset background color
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    if (correct) {
        score++;
    } else {
    }

    Array.from(answerButtonsElement.children).forEach((button) => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("btn-success");
        } else {
            button.classList.add("btn-danger");
        }
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1000); // Delay before loading the next question
}

function showResults() {
    resetState();
    confetti({
        spread: 180
      });
    questionElement.textContent = `Quiz selesai! Skor Anda: ${score} dari ${questions.length}`;
    questionImageElement.style.display = "none"; // Hide the image on results screen
    const restartButton = document.createElement("button");
    restartButton.textContent = "Mulai Lagi";
    restartButton.classList.add("btn", "btn-secondary", "mt-3");
    restartButton.addEventListener("click", restartQuiz);
    answerButtonsElement.appendChild(restartButton);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

// Initialize the quiz
loadQuestion();
