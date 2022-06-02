document.querySelector(".btn_primary").addEventListener("click", () => {
  let hex_numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hexCode1 = "";
  let hexCode2 = "";
  let randomIndex = 0;

  for (let i = 0; i < 6; i++) {
    randomIndex = Math.floor(Math.random() * hex_numbers.length);
    hexCode1 += hex_numbers[randomIndex];
    randomIndex = Math.floor(Math.random() * hex_numbers.length);
    hexCode2 += hex_numbers[randomIndex];
  }
  document.body.style.background = `linear-gradient(to right, #${hexCode1}, #${hexCode2})`;
  document.querySelector(".hex_code").textContent = hexCode1;
  document.querySelector(".hex_code2").textContent = hexCode2;
});