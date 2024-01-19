const rockBtn1 = document.querySelector('.button1')
const papperBtn1 = document.querySelector('.button2')
const scissorBtn1 = document.querySelector('.button3')
const rockBtn2 = document.querySelector('.button1')
const papperBtn2 = document.querySelector('.button2')
const scissorBtn2 = document.querySelector('.button3')
const user = document.querySelector('.user')
const user2 = document.querySelector('.bot')
const round = document.querySelector('.round')
const userWin = document.querySelector('.userWin')
const user2Win = document.querySelector('.botWin')
const message = document.querySelector('.message')
var tur = 0
var userWinNumber = 0
var user2WinNumber = 0
function resetGame() {
  tur = 0
  userWinNumber = 0
  user2WinNumber = 0
  round.innerHTML = tur
  userWin.innerHTML = userWinNumber
  user2Win.innerHTML = user2WinNumber
  message.innerHTML = ''
  user.innerHTML = '-'
  user2.innerHTML = '-'
}
var a=[]
rockBtn1.addEventListener('click', function (e) {
  choise('r')
})

papperBtn1.addEventListener('click', function (e) {
   choise('p')
})
scissorBtn1.addEventListener('click', function (e) {
  choise('s')
})
function choise(e){
  a.push(e)
  message.innerHTML='User2 please choose'
  console.log(a)
  if(a.length==2){
    play(a)
  }
}
console.log(a)


function play(e) {
  tur++
  const userChoise = e[0]
  const user2Choise = e[1]
  a=[]
  if (userChoise == 'r') {
    var imagePath = 'image/balacadas.png'
    var imageElement = document.createElement('img')
    imageElement.src = imagePath
    user.innerHTML = ''
    user.appendChild(imageElement)
  } else if (userChoise == 'p') {
    var imagePath = 'image/balacakagiz.png'
    var imageElement = document.createElement('img')
    imageElement.src = imagePath
    user.innerHTML = ''
    user.appendChild(imageElement)
  } else if (userChoise == 's') {
    var imagePath = 'image/balacaqayci.png'
    var imageElement = document.createElement('img')
    imageElement.src = imagePath
    user.innerHTML = ''
    user.appendChild(imageElement)
  }
  if (user2Choise == 'r') {
    var imagePath = 'image/balacadas.png'
    var imageElement = document.createElement('img')
    imageElement.src = imagePath
    user2.innerHTML = ''
    user2.appendChild(imageElement)
  } else if (user2Choise == 'p') {
    var imagePath = 'image/balacakagiz.png'
    var imageElement = document.createElement('img')
    imageElement.src = imagePath
    user2.innerHTML = ''
    user2.appendChild(imageElement)
  } else if (user2Choise == 's') {
    var imagePath = 'image/balacaqayci.png'
    var imageElement = document.createElement('img')
    imageElement.src = imagePath
    user2.innerHTML = ''
    user2.appendChild(imageElement)
  }

  round.innerHTML = tur

  if (
    (userChoise == 'r' && user2Choise == 's') || (userChoise == 'p' && user2Choise == 'r') || (userChoise == 's' && user2Choise == 'p')
  ) {
    userWinNumber++
    userWin.innerHTML = userWinNumber
    message.innerHTML = 'User has won'
  } else if (
    (userChoise == 's' && user2Choise == 'r') || (userChoise == 'r' && user2Choise == 'p') || (userChoise == 'p' && user2Choise == 's')
  ) {
    user2WinNumber++
    user2Win.innerHTML = user2WinNumber
    message.innerHTML = 'user2 has won'
  } else {
    message.innerHTML = 'Draw'
  }
  if (userWinNumber >= 5 || user2WinNumber >= 5) {
    if (userWinNumber > user2WinNumber) {
      message.innerHTML = "User1 winnersiz";
    } else {
      message.innerHTML = "User1 bəxtini təmizlə";
    }
    setTimeout(function () {
      alert(message.innerHTML);
      resetGame();
    },);
}

}
