const form = document.querySelector('.modal-checkout__form');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const name = document.querySelector('#input-name').value;
  const identification = document.querySelector('#input-id').value;
  const telephone = document.querySelector('#input-telephone').value;
  const email = document.querySelector('#input-email').value;
  const creditCard = document.querySelector('#input-creditcard').value;
  
  

  const response = await fetch("http://localhost:3000/users",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, 
        identification,
        telephone,
        email,
        creditCard
      })
    });
  const data = await response.json();   
  // console.log(data);
})
