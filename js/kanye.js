const displayQuote = (quotes) => {
    const container = document.getElementById('quotes');


    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // document.body.style.backgroundColor = "#" + randomColor;


        const div = document.createElement('div');

        div.innerHTML = `
        <div class="p-5">
          <h2 class="text-lg text-center">${quotes.quote}</h2>

          </div>
        </div>
      `;

      div.style.backgroundColor = "#" + randomColor;
      div.classList.add('card', 'w-full', 'h-full', 'text-primary-content');
      container.appendChild(div);
    
}

const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

for(let i = 1; i <= 100; i++){
loadQuote();
}

