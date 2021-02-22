console.log("connected");

const form = {
    firstName: "",
    lastName: "",
    age: "",
    password: ""
}

document.getElementById("submit").addEventListener("click", function getInputValue() {
   /* const form = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        age: document.getElementById('age').value,
        password: document.getElementById('pass').value
    }
    */
    form.firstName = document.getElementById('fname').value;
    form.lastName = document.getElementById('lname').value;
    form.age = document.getElementById('age').value;
    form.password = document.getElementById('pass').value;

    console.log(form);

    preventDefault();
});
