let noClickCount = 0;

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('noButton').style.display = 'none';
    document.getElementById('loveMessage').style.display = 'block';
    setTimeout(() => {
        alert('Segera hubungi Naufal');
        window.location.href = 'https://wa.me/6282247364235';
    }, 5000);
});

document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++;
    if (noClickCount === 1) {
        alert('pleaseee jangan ditolak!!!!');
    } else if (noClickCount === 2) {
        alert('tombol ini akan pindah tempat jika diklik lagi!!!');
    } else if (noClickCount === 3) {
        this.style.position = 'absolute';
        this.style.top = Math.random() * window.innerHeight + 'px';
        this.style.left = Math.random() * window.innerWidth + 'px';
    } else if (noClickCount === 4) {
        alert('tombol "NO" sebaiknya dihapus saja🥺');
        this.style.display = 'none';
    }
});

function playSong() {
    document.getElementById('song').play();
}
