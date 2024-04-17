const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");
    //   console.log(pwShowHide);
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      


links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

const store = [];

// Handle signup form submission and storage in local storage
const signupForm = document.querySelector("#signup form");
signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const email = signupForm.querySelector("input[type='email']").value;
    const password1 = signupForm.querySelector("input[type='password']").value;
    const password2 = signupForm.querySelector("input[type='password']").value;
    // Ensure inputs are not empty
    if (email && password1 && password2) {
        // Store email and password in local storage (consider hashing the password for better security)
        if(password1 !== password2) {
            alert("password doesn't match,please retype");
            return ;
        }
        const temp = {
            signupEmail:email,
            signupPassword:password1
        }
        
        store.push(temp);
        localStorage.setItem("details",JSON.stringify(store))
        alert("Signup successful! Your account has been created.");
    } else {
        alert("Please fill in all fields.");
    }
});

// Handle login form submission and validation
const loginForm = document.querySelector("#login form");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const email = loginForm.querySelector("input[type='email']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    if(findMatch(JSON.parse(localStorage.getItem('details')),{
        signupEmail:email,
        signupPassword:password
    })){
        alert("Login successful!");
        window.location.href = "./index.html";
    }
    else{
        alert("Insuccessfull pass");
    }

    // Retrieve stored email and password
    // const storedEmail = localStorage.getItem("signupEmail");
    // const storedPassword = localStorage.getItem("signupPassword");

    // Validate login credentials
    // if (email === storedEmail && password === storedPassword) {
    //     alert("Login successful! Welcome back.");
    // } else {
    //     alert("Invalid login credentials. Please try again.");
    // }
});

const findMatch = (arr, targetObj) => {
    return arr.find(obj => obj.signupEmail === targetObj.signupEmail && obj.signupPassword === targetObj.signupPassword);
}