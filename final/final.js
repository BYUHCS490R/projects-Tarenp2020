document.getElementById('myForm').addEventListener('submit',function(event) {

    event.preventDefault();
    const name = document.getElementById("name").value;
    const orgin = document.getElementById("orgin").value;
    const ing = document.getElementById("ing").value    
    const how = document.getElementById("how").value    
    const term = document.getElementById("term").checked;


    if (!name) {
        alert("please provide name.");
        return;
    }

    if (!orgin) {
    alert("The orgin of the dish must be given.");
    return;
    }



    const data = {
        name: name,
        orgin: orgin,
        ing: ing,
        how: how,
        term: term
    }

    console.log(data);

    const xhr = new XMLHttpRequest()
    xhr.open("GET","submit.json", true);

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