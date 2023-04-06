window.onload = () => {
  document.querySelector("#one").innerHTML = excuse;
};
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let excuse =
  randLista(who) +
  " " +
  randLista(action) +
  " " +
  randLista(what) +
  " " +
  randLista(when);

  function randLista (listas){
    return listas[Math.floor(Math.random() * listas.length)];
  }
  
