let container, content, squares, game;

(game = function(num){

  container = document.querySelector('.container');
  content = document.createElement('div');
  content.setAttribute('class', 'content');

  for (let i= 0; i < num; i++){
    //Create 16 rows
    let div = document.createElement('div');
    div.setAttribute('class', 'row');
    for(let j = 0; j < num; j++){
      //Create 16 squares
      let square = document.createElement('div');
      square.setAttribute('class', 'square');
      //Append squares to row then row to container
      div.appendChild(square);
      content.appendChild(div);
      container.appendChild(content);
    }
  }

  squares = document.querySelectorAll('.square');

  squares.forEach(function (square){
    square.addEventListener('mouseover', function(){
      if(square.style.backgroundColor){
        square.style.backgroundColor = darkenColor(square);
      }else{
        randomNum();
      square.style.backgroundColor = randomColor();
    }
    });
  });
})(16);

document.querySelector('button').addEventListener("click", function(){

      while (container.firstChild){
        container.innerHTML = "";
      }
      game(document.querySelector("select").value);
  });
  let arr = [];
  function randomNum(){
  while(arr.length < 3){
    arr.push(Math.floor(Math.random() * 255) + 0);
  }
}
  function randomColor(){
    arr = [];
    randomNum();
  return "rgb(" + arr[0] + ", " + arr[1] + ", " + arr[2] + ")";
}

function darkenColor(square){
  let s = square.style.backgroundColor;
  let newArr = s.match(/\d+/g).map(n => parseInt(n));
  return "rgb(" + (newArr[0] - (newArr[0]/10)) +
         ", " + (newArr[1] - (newArr[1]/10)) +
         ", " + (newArr[2] - (newArr[2]/10)) + ")";
}
