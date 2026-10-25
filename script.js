
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", function () {
    window.scrollTo(0, 0);

    document.documentElement.classList.add("scroll-terkunci");
    document.body.classList.add("scroll-terkunci");
});

const formRsvp = document.getElementById("formRsvp");
const hasilRsvp = document.getElementById("hasilRsvp");

formRsvp.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const kehadiran = document.getElementById("kehadiran").value;
    const jumlah = document.getElementById("jumlah").value;
    const ucapan = document.getElementById("ucapan").value.trim();

    const kartu = document.createElement("div");
    kartu.className = "item-rsvp";

    const header = document.createElement("div");
    header.className = "header-rsvp";

    const namaTamu = document.createElement("strong");
    namaTamu.textContent = nama;

    const status = document.createElement("span");
    status.className = "status-rsvp";

    if (kehadiran === "Hadir") {
        status.textContent = "Hadir";
        status.classList.add("status-hadir");
    } else {
        status.textContent = "Tidak hadir";
        status.classList.add("status-tidak-hadir");
    }

    header.appendChild(namaTamu);
    header.appendChild(status);
    const detailJumlah = document.createElement("p");
    detailJumlah.className = "detail-jumlah";
    detailJumlah.textContent = "Jumlah tamu: " + jumlah + " orang";
    const pesan = document.createElement("p");
    pesan.className = "ucapan-rsvp";
    pesan.textContent = ucapan || "Tidak ada ucapan.";
    kartu.appendChild(header);
    kartu.appendChild(detailJumlah);
    kartu.appendChild(pesan);
    hasilRsvp.appendChild(kartu);
    formRsvp.reset();
});

const tombolBuka = document.getElementById("bukaUndangan");

tombolBuka.addEventListener("click", function () {
    document.documentElement.classList.remove("scroll-terkunci");
    document.body.classList.remove("scroll-terkunci");

    document.querySelector(".surat").scrollIntoView({
        behavior: "smooth"
    });
});

