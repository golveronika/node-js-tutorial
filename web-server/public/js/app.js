

 document.getElementById('form_search_location').addEventListener('submit', (event) => {
     event.preventDefault()

     const value = event.target.elements[0].value;

     if (value) {
        fetch(`http://localhost:3000/weather?address=${value}`)
        .then((response) => {
            response.json().then((data) => {
                console.log(data)
                const container = document.getElementById('forecast_container')
                container.innerHTML = `<p>Location: <strong>${data.location}</strong></p>`
                container.innerHTML += `<p>The weather today is: <strong>${data.forecast}</strong></p>`
            })
        })
        .catch((error) => {
            console.log('Looks like there was a problem: \n', error);
        });          
     }

  

 })

