document.getElementById('myForm').addEventListener('submit',function(event) {

    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name) {
        alert("please provide name.");
        return;
    }

    if (!email) {
        alert("You must give your email.");
        return;
    }

    const data = {
        name: name,
        email: email
    }

    console.log(data);

    const xhr = new XMLHttpRequest()
    xhr.open("POST","submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Form submitted succsesssfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(this.response);
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.")
        }
    };
    xhr.send(JSON.stringify(data));

});