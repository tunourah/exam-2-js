document.addEventListener("DOMContentLoaded", function () {
  const login = document.getElementById("login");
  const usernameInput = document.getElementById("user-name");
  const passwordInput = document.getElementById("password");
  const usernameError = document.getElementById("userError");
  const passwordError = document.getElementById("passwordError");

  login.addEventListener("click", function () {
    console.log("test");
    
    usernameError.textContent = "";
    passwordError.textContent = "";

    if (!usernameInput.value.trim()) {
      usernameError.textContent = "User Name is required";
    } 
    else if (!isValidUserName(usernameInput.value)) {
      usernameError.textContent = "Invalid User format";
    }
    if (!passwordInput.value.trim()) {
      passwordError.textContent = "Password is required";
    }

    if (!usernameError.textContent && !passwordError.textContent) {
      fetch("https://66e7e6b3b17821a9d9da6ff8.mockapi.io/login")
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok.");
          return response.json();
        })
        .then((users) => {
          const user = users.find(
            (user) =>
              user.user === usernameInput.value &&
              user.password === passwordInput.value
          );

          if (user) {
            sessionStorage.setItem("userId", user.id);
            window.location.href = "home.html";
          } else {
            passwordError.textContent = "Invalid user name or password";
          }
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  });

  function isValidUserName(user) {
    const regex = /[A-Z]/;
    return regex.test(user);
  }
});
