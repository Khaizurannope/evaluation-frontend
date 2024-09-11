document.addEventListener("DOMContentLoaded", function () {
    const jsonURL = "https://api.myquran.com/v2/sholat/jadwal/1204/2024-09-11"; // Sesuaikan dengan lokasi file

    console.log("Fetching data from: ", jsonURL); // Log URL untuk verifikasi

    fetch(jsonURL)
        .then(response => {
            console.log("Response status: ", response.status); // Log status respons
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parsing response menjadi JSON
        })
        .then(data => {
            console.log("Data fetched successfully: ", data); // Log data untuk verifikasi
            // Menampilkan properti jadwal pada console
            console.log(data.data.jadwal);
        })
        .catch(error => {
            console.error("Fetch error: ", error);
        });
});
