// ✅ API URLs from your deployed HTTP API Gateway (new base)
const API_BASE = "https://rtqt4aib01.execute-api.us-east-1.amazonaws.com/prod";
const INSERT_API_URL   = `${API_BASE}/insertProduct`;
const GET_API_URL      = `${API_BASE}/getProducts`;
const REGISTER_API_URL = `${API_BASE}/registerUser`;
const LOGIN_API_URL    = `${API_BASE}/loginUser`;

// 🛒 Store purchased product titles
const purchasedItems = [];

// 🔃 Load on page load
window.addEventListener('load', () => {
  const user = localStorage.getItem('loggedInUser');
  if (user) {
    // ✅ Show only username (no "Hello, ")
    document.getElementById('openModalBtn').innerText = user;

    // ✅ Fetch user's purchased products
    fetch(`${GET_API_URL}?userid=${user}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const purchasedSection = document.getElementById('purchasedSection');
          const purchasedContainer = document.getElementById('purchasedContainer');
          purchasedSection.style.display = 'block';

          data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'product';
            card.innerHTML = `<img src="${item.image}"><h3>${item.productid}</h3>`;
            purchasedContainer.appendChild(card);
            purchasedItems.push(item.productid);
          });
        }
      })
      .catch(err => console.error("Get API Error:", err));
  }
});

// 🟠 BUY button logic
document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
      alert("Please login first to purchase.");
      return;
    }

    const productCard = button.parentElement;
    const imgSrc = productCard.querySelector('img').getAttribute('src');
    const title = productCard.querySelector('h3').innerText;

    if (purchasedItems.includes(title)) {
      alert("You already purchased: " + title);
      return;
    }

    purchasedItems.push(title);

    const purchasedSection = document.getElementById('purchasedSection');
    const newCard = document.createElement('div');
    newCard.className = 'product';
    newCard.innerHTML = `<img src="${imgSrc}"><h3>${title}</h3>`;
    document.getElementById('purchasedContainer').appendChild(newCard);
    purchasedSection.style.display = 'block';
    purchasedSection.scrollIntoView({ behavior: "smooth" });

    // ✅ Save purchase to DynamoDB
    fetch(INSERT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userid: user,
        productid: title,
        image: imgSrc,
        timestamp: new Date().toISOString()
      })
    })
    .then(res => res.json())
    .then(data => console.log("Inserted into DynamoDB:", data))
    .catch(err => console.error("Insert API Error:", err));
  });
});

// 🔐 Login/Register handler
document.querySelectorAll('.modal-content button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const isLogin = e.target.innerText === 'Login';

    const userid = isLogin
      ? document.getElementById('loginUser').value.trim()
      : document.getElementById('registerUser').value.trim();

    const password = isLogin
      ? document.getElementById('loginPass').value.trim()
      : document.getElementById('registerPass').value.trim();

    if (!userid || !password || password.length < 4) {
      alert("Username and password (min 4 characters) are required.");
      return;
    }

    const url = isLogin ? LOGIN_API_URL : REGISTER_API_URL;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userid, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.errorMessage) {
        alert("Error: " + data.errorMessage);
        return;
      }

      alert(data.message || (isLogin ? "Login successful" : "Registered successfully"));
      localStorage.setItem("loggedInUser", userid);
      document.getElementById('authModal').style.display = 'none';
      document.getElementById('openModalBtn').innerText = userid; // ✅ Only username
      location.reload(); // Reload purchases
    })
    .catch(err => alert("Error: " + err.message));
  });
});
