import "./style.css";

// Obtener el formulario de inicio de sesión
const $registerForm = document.getElementById("register-form");

// Añadir un evento de submit al formulario
$registerForm.addEventListener("submit", async (e) => {
    // Evitar que el formulario recargue la página
    e.preventDefault();

    // Crear un objeto FormData con los datos del formulario
    const formData = new FormData($registerForm);

    // Convertir el objeto FormData a un objeto plano
    const entries = Object.fromEntries(formData.entries());

    // Realizar una solicitud POST a la API de inicio de sesión
    try {
        fetch("http://localhost:4321/auth/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entries),
        }).then((response) => {
            if (response.ok) {
                window.location.href = "/index.html"
            } else {
                alert('error')
            }
        });
        return res.json({ message: "usuario creado" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error Inesperado" });
    
    }
});
