
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC9hJqDeAXp2F-8a2QexfTneWlLyH12l6M",
      authDomain: "kwitter-619fb.firebaseapp.com",
      databaseURL: "https://kwitter-619fb-default-rtdb.firebaseio.com",
      projectId: "kwitter-619fb",
      storageBucket: "kwitter-619fb.appspot.com",
      messagingSenderId: "546675516935",
      appId: "1:546675516935:web:02e5333dd4e3100982aca2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - ", Room_names);
      row = "<div class='room_name' id="+Room_names+ "onclick = 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
}