// Password Visibility
function togglePassword() {
    let passwordInput = document.querySelector("#password");
    let toggleEye = document.querySelector("#toggleEye");

    toggleEye.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleEye.classList.remove("fa-eye");
            toggleEye.classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            toggleEye.classList.remove("fa-eye-slash");
            toggleEye.classList.add("fa-eye");
        }
    });
}
togglePassword();