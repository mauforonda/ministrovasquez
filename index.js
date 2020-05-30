
function display(tweet){
  message = document.createElement('a')
  message.classList = ['tweet']
  message.href = 'https://twitter.com' + tweet.url
  content = document.createElement('span')
  content.classList = ['content']
  content.textContent = tweet.texto
  date = document.createElement('span')
  date.classList = ['date']
  date.textContent = tweet.tiempo
  message.appendChild(content)
  message.appendChild(date)
  container.appendChild(message)
}

function init(){
  const url = "fernando_simple.json"
  fetch(url).then((response) => {
    response.json().then((d) => {
      data = d
      data.forEach((tweet) => display(tweet))
    })})
};

let data;
const container = document.querySelector('#tweets')
init()
