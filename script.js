function openVideoPopup() {
    // Reset kembali nilai src
    document.getElementById("videoFrame").src = "https://www.youtube.com/embed/3Tys3SM4FtI?rel=0";
    document.getElementById("videoPopup").style.display = "flex";
}

function closeVideoPopup() {
    document.getElementById("videoPopup").style.display = "none";
    // Berhenti video ketika ditutup
    document.getElementById("videoFrame").src = "";
}

// Hide video popup initially
document.getElementById("videoPopup").style.display = "none";
