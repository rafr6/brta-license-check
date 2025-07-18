
function addLicense() {
  const id = document.getElementById("license").value;
  const data = {
    name: document.getElementById("name").value,
    father: document.getElementById("father").value,
    dob: document.getElementById("dob").value,
    type: document.getElementById("type").value,
    issue: document.getElementById("issue").value,
    expiry: document.getElementById("expiry").value
  };
  firebase.database().ref("licenses/" + id).set(data).then(() => {
    document.getElementById("msg").textContent = "✅ লাইসেন্স সফলভাবে যুক্ত হয়েছে!";
  });
}

function logout() {
  localStorage.removeItem("adminLoggedIn");
  window.location.href = "login.html";
}
