 

let url = "https://66e7e6b3b17821a9d9da6ff8.mockapi.io/login";

document.addEventListener("DOMContentLoaded", function () {
    // const signupForm = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
   const usernameInput = document.getElementById("user-name");
    const termsCheckbox = document.getElementById("terms");
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const usernameError = document.getElementById("userError");
    const termsError = document.getElementById("termsError");
  const signup =document.getElementById("signup")
    const apiUrl = "https://66e7e6b3b17821a9d9da6ff8.mockapi.io/login";
  
    signup.addEventListener("click", function ( ) {
        console.log("ddd");
        
  
     
      nameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";
      usernameInput.textContent = "";
      usernameError.textContent = "";
  
     
      let valid = true;
  
      if (!nameInput.value.trim() || nameInput.value.trim().length < 5) {
          
        nameError.textContent = "Full name is required and must be at least 5 characters long";
        valid = false;
      }

    //   user name is required and must have capital letter
    if (!usernameInput.value.trim() || usernameInput.value.trim().length < 5) {
        usernameError.textContent = "  user name is required and must have capital letter";
        valid = false;
      }
    

      if (!emailInput.value.trim()) {
        emailError.textContent = "Email is required";
        valid = false;
      } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = "Invalid email format";
        valid = false;
      }
      else if (!isValidUserName(usernameInput.value)) {
        usernameError.textContent = "Invalid User format";
      }
      if (!passwordInput.value.trim()) {
        passwordError.textContent = "Password is required";
        valid = false;
      } else if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        valid = false;
      }
  
    //   if (!confirmPasswordInput.value.trim()) {
    //     confirmPasswordError.textContent = "Please confirm your password";
    //     valid = false;
    //   } else if (passwordInput.value !== confirmPasswordInput.value) {
    //     confirmPasswordError.textContent = "Passwords do not match";
    //     valid = false;
    //   }
  
    //   if (!termsCheckbox.checked) {
    //     termsError.textContent = "You must agree to the terms and conditions";
    //     valid = false;
    //   }
  
      if (valid) {
       
        fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify({
            name: nameInput.value,
            user : usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok.");
            return response.json();
          })
          .then((data) => {
           
            console.log("API Response:", data);
  
           
            localStorage.setItem("userName", data.name);
            localStorage.setItem("userId", data.id);
  
            
            console.log("Redirecting to home.html");
            window.location.href = "index.html";
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
        function isValidEmail(email) {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return regex.test(email);
        }
      });




 