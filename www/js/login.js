document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const identifier = document.getElementById("loginIdentifier").value.trim();
    const password = document.getElementById("loginPassword").value;
    const loginError = document.getElementById("loginError");

    loginError.textContent = "";

    let email = identifier;


    if (!identifier.includes("@")) {
        const { data, error } = await supabaseClient.rpc(
            "get_email_by_student_id",
            {
                student_id_input: identifier
            }
        );

        if (error || !data) {
            console.log("Student ID lookup error:", error);
            loginError.textContent = "Invalid Student ID or password.";
            return;
        }

        email = data;
    }


    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        console.log("Login error:", error.message);
        loginError.textContent = "Invalid Student ID/email or password.";
        return;
    }

    console.log("Login successful:", data.user.id);

    loginError.style.color = "green";
    loginError.textContent = "Login successful!";

    const continueButton = document.createElement("button");
    continueButton.type = "button";
    continueButton.textContent = "Continue to Profile";

    continueButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });

    document.getElementById("loginForm").appendChild(continueButton);

    });