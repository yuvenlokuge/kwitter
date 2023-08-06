const firebaseConfig = {
  apiKey: "AIzaSyBw5D626sdiQR6w2W2783buE7BymDQJrAw",
  authDomain: "chat-3911f.firebaseapp.com",
  databaseURL: "https://chat-3911f-default-rtdb.firebaseio.com",
  projectId: "chat-3911f",
  storageBucket: "chat-3911f.appspot.com",
  messagingSenderId: "455736720938",
  appId: "1:455736720938:web:c07d6ae52b9c8a80b80d53"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
   user_name = localStorage.getItem("user_name")
   document.getElementById("user_name").innerHTML = "Welcome " +user_name+" !";
   function add_room(){
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name)
      firebase.database().ref("/").child(room_name).update({
        key: "value"
      });
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name -"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+ Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+= row;      //End code
      });});}
getData();
  function logout()
  {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
  }

  function redirectToRoomName(name)
 {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
 }
