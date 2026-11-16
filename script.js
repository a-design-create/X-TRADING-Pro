// X TRADING PRO
// Educational Virtual Trading Simulator

const stocks = [
  { name: "RELIANCE", company: "Reliance Industries", price: 1450 },
  { name: "TCS", company: "Tata Consultancy", price: 3200 },
  { name: "INFY", company: "Infosys", price: 1550 },
  { name: "HDFCBANK", company: "HDFC Bank", price: 1750 },
  { name: "ITC", company: "ITC Limited", price: 420 },
  { name: "TATAMOTORS", company: "Tata Motors", price: 680 }
];

let virtualBalance = 100000;

const stockList = document.getElementById("stockList");
const balanceElement = document.getElementById("balance");

// Display virtual balance
function updateBalance() {
  balanceElement.textContent = virtualBalance.toLocaleString(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2
    }
  );
}

// Display demo stock list
function renderStocks() {
  stockList.innerHTML = "";

  stocks.forEach((stock, index) => {
    const card = document.createElement("article");
    card.className = "stock-item";

    const change = stock.change || 0;
    const changeClass = change >= 0 ? "profit" : "loss";
    const sign = change >= 0 ? "+" : "";

    const left = document.createElement("div");

    const name = document.createElement("h3");
    name.textContent = stock.name;

    const company = document.createElement("p");
    company.textContent = stock.company;

    left.append(name, company);

    const right = document.createElement("div");
    right.className = "stock-price";

    const price = document.createElement("div");
    price.textContent = "₹" + stock.price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    const movement = document.createElement("div");
    movement.className = changeClass;
    movement.textContent = sign + change.toFixed(2) + "%";

    right.append(price, movement);
    card.append(left, right);

    stockList.appendChild(card);
  });
}

// Simulated market movement.
// These are NOT live market prices.
function updateDemoMarket() {
  stocks.forEach(stock => {
    const movement = (Math.random() - 0.5) * 0.4;

    stock.price = Math.max(
      1,
      stock.price * (1 + movement / 100)
    );

    stock.change = movement;
  });

  renderStocks();
}

// Demo index display
function updateDemoIndices() {
  const nifty = document.getElementById("nifty");
  const sensex = document.getElementById("sensex");

  if (nifty) {
    nifty.textContent = (24500 + Math.random() * 30).toFixed(2);
  }

  if (sensex) {
    sensex.textContent = (80500 + Math.random() * 80).toFixed(2);
  }
}

// Theme toggle
const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-theme");

  if (isLight) {
    document.body.style.background = "#F3F5F0";
    document.body.style.color = "#151515";
    themeButton.textContent = "☾";
  } else {
    document.body.style.background = "#080A09";
    document.body.style.color = "#F2F5EF";
    themeButton.textContent = "☼";
  }
});

// Initialize application
updateBalance();
renderStocks();
updateDemoIndices();

// Refresh demo prices every 5 seconds
setInterval(() => {
  updateDemoMarket();
  updateDemoIndices();
}, 5000);

console.log("X TRADING PRO initialized successfully.");
console.log("Mode: Virtual trading demonstration only.");
                 
