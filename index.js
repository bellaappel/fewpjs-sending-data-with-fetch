// Add your code here
// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// });

function submitData(name, email) {
    const configObj = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ 'name': name, 'email': email })
      };

return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
    return response.json();
    })
    .then(body => {
    const p = document.createElement('p');
    p.innerHTML = body.id
    document.body.appendChild(p);
    })
    .catch(error => {
        alert("Error;");
        const p = document.createElement('p');
        p.innerHTML = error.message;
        document.body.appendChild(p)
    });
}