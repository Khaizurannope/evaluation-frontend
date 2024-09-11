document.addEventListener("DOMContentLoaded", function () {
    const jsonURL = "https://api.myquran.com/v2/sholat/jadwal/1204/2024-09-11"; // Path ke file JSON

    fetch(jsonURL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parsing respons menjadi JSON
        })
        .then(data => {
            // Ambil jadwal dari data
            const jadwal = data.data.jadwal;

            // Update elemen HTML dengan data dari JSON
            document.querySelector(".location").textContent = `${data.data.lokasi}, ${data.data.daerah}`;
            document.querySelector(".date").textContent = jadwal.tanggal;
            const times = document.querySelectorAll(".time");
            times[0].textContent = `Subuh: ${jadwal.subuh}`;
            times[1].textContent = `Dzuhur: ${jadwal.dzuhur}`;
            times[2].textContent = `Ashar: ${jadwal.ashar}`;
            times[3].textContent = `Maghrib: ${jadwal.maghrib}`;
            times[4].textContent = `Isya: ${jadwal.isya}`;
        })
        .catch(error => {
            console.error("Fetch error: ", error);
        });
});
