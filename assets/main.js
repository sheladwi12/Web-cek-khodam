function cekKhodam() {
    const nameInput = document.getElementById('nameInput').value;
    if (!nameInput) {
        Swal.fire({
            title: 'GAK BOLEH KOSONG!😡',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        const khodams = [
            { name: "Harimau Putih", meaning: "Kamu kuat dan berani seperti harimau, karena pendahulumu mewariskan kekuatan besar padamu." },
            { name: "Lampu Tertidur", meaning: "Terlihat ngantuk tapi selalu memberikan cahaya yang hangat" },
            { name: "Panda Ompong", meaning: "Kamu menggemaskan dan selalu berhasil membuat orang tersenyum dengan keanehanmu." },
            { name: "Bebek Karet", meaning: "Kamu selalu tenang dan ceria, mampu menghadapi gelombang masalah dengan senyum." },
            { name: "Ninja Turtle", meaning: "Kamu lincah dan tangguh, siap melindungi yang lemah dengan kekuatan tempurmu." },
            { name: "Kucing Kulkas", meaning: "Kamu misterius dan selalu ada di tempat-tempat yang tak terduga." },
            { name: "Sabun Wangi", meaning: "Kamu selalu membawa keharuman dan kesegaran di mana pun kamu berada." },
            { name: "Semut Kecil", meaning: "Kamu pekerja keras dan selalu bisa diandalkan dalam situasi apa pun." },
            { name: "Moge Suzuki", meaning: "Kamu cepat dan penuh gaya, selalu menjadi pusat perhatian di jalanan." },
            { name: "Cupcake Pelangi", meaning: "Kamu manis dan penuh warna, selalu membawa kebahagiaan dan keceriaan." },
            { name: "Robot Mini", meaning: "Kamu canggih dan selalu siap membantu dengan kecerdasan teknologi tinggi." },
            { name: "Ikan Terbang", meaning: "Kamu unik dan penuh kejutan, selalu melampaui batasan yang ada." },
            { name: "Ayam Goreng", meaning: "Kamu selalu disukai dan dinanti oleh banyak orang, penuh kelezatan dalam setiap langkahmu." },
            { name: "Kecoa Terbang", meaning: "Kamu selalu mengagetkan dan bikin heboh seisi ruangan." },
            { name: "Kambing Ngebor", meaning: "Kamu unik dan selalu bikin orang tertawa dengan tingkah lakumu yang aneh." },
            { name: "Kerupuk Renyah", meaning: "Kamu selalu bikin suasana jadi lebih seru dan nikmat." },
            { name: "Celengan Babi", meaning: "Kamu selalu menyimpan kejutan di dalam dirimu." },
            { name: "Lemari Tua", meaning: "Kamu penuh dengan cerita dan kenangan masa lalu." }
        ];
        const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
        document.getElementById('khodamName').textContent = randomKhodam.name;
        document.getElementById('khodamMeaning').textContent = randomKhodam.meaning;
        document.getElementById('loading').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    }, 2000);
}

function resetForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('result').style.display = 'none';
}
