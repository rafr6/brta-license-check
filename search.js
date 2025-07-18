
function searchLicense() {
  const id = document.getElementById("licenseNumber").value;
  firebase.database().ref("licenses/" + id).once("value").then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById("result").innerHTML = `
        <h3>লাইসেন্স তথ্য</h3>
        <p>নাম: ${data.name}</p>
        <p>পিতার নাম: ${data.father}</p>
        <p>জন্ম তারিখ: ${data.dob}</p>
        <p>লাইসেন্স ধরন: ${data.type}</p>
        <p>ইস্যু তারিখ: ${data.issue}</p>
        <p>মেয়াদ শেষ: ${data.expiry}</p>
      `;
    } else {
      document.getElementById("result").innerHTML = "<p style='color:red'>কোন তথ্য পাওয়া যায়নি!</p>";
    }
  });
}
