// Rješenje

// Zadatak 1

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function() {
  document.getElementById("zad1").innerHTML = "Hello World";
});


// Zadatak 2

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function() {
  document.getElementById("zad2").style.color = "red";
});

// Zadatak 3

const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function() {
  document.getElementById("box3").style.left = "300px";
});

// Zadatak 3

const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", function() {
  document.getElementById("box3").style.left = "0px";
});