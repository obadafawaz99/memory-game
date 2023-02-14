document.querySelector(".startb span").onclick = function () {
  let yourName = prompt("Whats Your Name");
  document.getElementById( "start" ).play();
  if (yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = "UnKnow";
  } else {
    document.querySelector(".name span").innerHTML = yourName;
  }
  document.querySelector(".startb").remove();
};
let duration = 1000;
let block = document.querySelector(".mem-block");
let arrBlock = Array.from(block.children);
let orderRange = [...Array(arrBlock.length).keys()];
shofel(orderRange);
arrBlock.forEach((blocks, index) => {
  blocks.style.order = orderRange[index];
  blocks.addEventListener("click", function () {
    flipped(blocks);
  });
});
function shofel(array) {
  let current = array.length,
    temp,
    randoum;
  while (current > 0) {
    randoum = Math.floor(Math.random() * current);
    current--;
    temp = array[current];
    array[current] = array[randoum];
    array[randoum] = temp;
  }
  return array;
}
function flipped(selectt) {
  selectt.classList.add("is-flipped");
  let allFlippBlock = arrBlock.filter((flippedBlock) =>
    flippedBlock.classList.contains("is-flipped")
  );
  if (allFlippBlock.length === 2) {
    noClicking();
  }
  blockflip(allFlippBlock[0], allFlippBlock[1]);
}
function noClicking() {
  block.classList.add("no-clicking");
  setTimeout(() => {
    block.classList.remove("no-clicking");
  }, duration);
}
function blockflip(firstBlock, secondBlock) {
  let triesElement = document.querySelector(".tries span");
  if (firstBlock.dataset.eat === secondBlock.dataset.eat) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");
    firstBlock.classList.add("is-match");
    secondBlock.classList.add("is-match");
    document.getElementById("sucsess").play();
  } else {
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    document.getElementById("fail").play();
    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, duration);
  }
}
