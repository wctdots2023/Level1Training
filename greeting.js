let greetingButton = document.getElementById("greetingButton")
greetingButton.addEventListener("click", greet)

function greet()  {
  let userName = document.getElementById("userName").value  

  let greetingSpot = document.getElementById("greeting")

  greetingSpot.innerText = "Hello, " + userName + "!"
}