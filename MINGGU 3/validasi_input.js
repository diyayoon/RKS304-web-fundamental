const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const nama = document.getElementById("nama");
    const tanggalLahir = document.getElementById("tanggalLahir");
    const alamat = document.getElementById("alamat");
    const telepon = document.getElementById("telepon");

    let valid = true;

    // Username
    if (username.value.trim().length < 3) {
        showError("usernameError", "Username minimal 3 karakter.");
        valid = false;
    } else {
        clearError("usernameError");
    }

    // Password
    if (password.value.length < 8) {
        showError("passwordError", "Password minimal 8 karakter.");
        valid = false;
    } else {
        clearError("passwordError");
    }

    // Nama
    if (nama.value.trim() === "") {
        showError("namaError", "Nama tidak boleh kosong.");
        valid = false;
    } else {
        clearError("namaError");
    }

    // Tanggal lahir
    const today = new Date().toISOString().split("T")[0];

    if (tanggalLahir.value === "") {
        showError("tanggalLahirError", "Tanggal lahir tidak boleh kosong.");
        valid = false;
    } else if (tanggalLahir.value > today) {
        showError("tanggalLahirError", "Tanggal lahir tidak boleh di masa depan.");
        valid = false;
    } else {
        clearError("tanggalLahirError");
    }

    // Alamat
    if (alamat.value.trim() === "") {
        showError("alamatError", "Alamat tidak boleh kosong.");
        valid = false;
    } else {
        clearError("alamatError");
    }

    // Nomor telepon
    if (telepon.value.trim() === "") {
        showError("teleponError", "Nomor telepon tidak boleh kosong.");
        valid = false;
    } else if (!telepon.value.trim().startsWith("62")) {
        showError("teleponError", "Nomor telepon harus diawali 62.");
        valid = false;
    } else {
        clearError("teleponError");
    }

    if (!valid) {
        event.preventDefault();
    }
});

function showError(id, message) {
    const error = document.getElementById(id);
    error.textContent = message;
    error.classList.remove("hidden");
}

function clearError(id) {
    document.getElementById(id).classList.add("hidden");
}