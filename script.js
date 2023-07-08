let itemOrder = [
  {
    dipesan: false,
    harga: 10000,
    nama: "Bakso",
  },
  {
    dipesan: false,
    harga: 8000,
    nama: "Basreng",
  },
  {
    dipesan: false,
    harga: 12000,
    nama: "Seblak",
  },
  {
    dipesan: false,
    harga: 15000,
    nama: "Kebab",
  },
  {
    dipesan: false,
    harga: 7000,
    nama: "Takoyaki",
  },
];

let totalOrder = 0;

const itemChoose = document.getElementsByClassName("item");

const textTotal = document.getElementById("last-item");

for (let i = 0; i < itemChoose.length; i++) {
  itemChoose[i].addEventListener("click", function () {
    setItemOrder(i, itemChoose[i]);
  });
}

function setItemOrder(index, elemen) {
  if (itemOrder[index].dipesan == false) {
    itemOrder[index].dipesan = true;
    elemen.style.backgroundColor = "brown";
    elemen.style.color = "white";
    totalOrder = totalOrder + itemOrder[index].harga;
  } else {
    itemOrder[index].dipesan = false;
    elemen.style.backgroundColor = "initial";
    elemen.style.color = "black";
    totalOrder = totalOrder - itemOrder[index].harga;
  }
  textTotal.innerHTML =
    "Total Pesanan <span style='float:right'> Rp " + totalOrder + "</span>";
}
