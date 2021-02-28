const results = document.querySelector('#results');

async function asyncFetch(value) {
  const res = await fetch(`https://swapi.dev/api/${value}`);
  const data = await res.json();
  displayResults(data, value)
}

function displayResults(data, value){
  let output = "";

  if(value === 'people') {
    data.results.forEach(item => {
      output += `
        <div class=box>
        <h4 class=title>Name: ${item.name}</h4>
        <span>Birth Year: ${item.birth_year}</span><br>
        <span>Gender: ${item.gender}</span><br></div>
      `
    })
  }
  results.innerHTML = output;
}
//event listener
document.querySelector('#buttons').addEventListener('click', e => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
})


 
