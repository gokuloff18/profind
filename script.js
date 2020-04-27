
var firebaseConfig = {
  apiKey: "AIzaSyCGDld1G2XanormWCSZl5eD_KvgBoiNMUs",
  authDomain: "profind-4057f.firebaseapp.com",
  databaseURL: "https://profind-4057f.firebaseio.com",
  projectId: "profind-4057f",
  storageBucket: "profind-4057f.appspot.com",
  messagingSenderId: "157714300247",
  appId: "1:157714300247:web:9ae35703b83fcce30c9212",
  
};
firebase.initializeApp(firebaseConfig);


//firebase.initializeApp(firebaseConfig);
  var database= firebase.database();
  function det() {
    alert("Your Details Submitted Successfully");
    var name = document.getElementById("name").value;
     var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    

    {
   
      var ref= database.ref("Details/" + name + "/").set({
        Name: name,
        Number: number,
        Email: email,
      });
     // window.location.replace("success.html");
    }
  }
function errdata() {
   console.log("error");
  }  