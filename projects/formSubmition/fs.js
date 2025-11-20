document.getElementById('myForm').addEventListener('submit',function(event) {

    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const password = document.getElementById("password").value;
    const activity = document.getElementById("activity").value;
    const term = document.getElementById("term").checked;
    const snacks = document.querySelector('input[name="snacks"]:checked');
    const note = document.getElementById("note").value    


    if (!name) {
        alert("please provide name.");
        return;
    }


    if (!email) {
        alert("You must give your email.");
        return;
    }

    if (!date) {
        alert("please provide a date to hang out.");
        return;
    }

    if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
    }

    if (!snacks) {
    alert("Please choose a snacks option.");
    return;
    }


    const data = {
        name: name,
        email: email,
        date: date,
        password: password,
        activity: activity,
        term: term,
        snacks: snacks.value,
        note: note
    }

    console.log(data);

    const xhr = new XMLHttpRequest()
    xhr.open("GET","submit.json", true);
    //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")

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
    xhr.send();

});