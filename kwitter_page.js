function logout()
{
    window.location="index.html"
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
}
const firebaseConfig = {
    apiKey: "AIzaSyBw5D626sdiQR6w2W2783buE7BymDQJrAw",
    authDomain: "chat-3911f.firebaseapp.com",
    databaseURL: "https://chat-3911f-default-rtdb.firebaseio.com",
    projectId: "chat-3911f",
    storageBucket: "chat-3911f.appspot.com",
    messagingSenderId: "455736720938",
    appId: "1:455736720938:web:c07d6ae52b9c8a80b80d53"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")
  room_name=localStorage.getItem("room_name")
  
  function sent()
  {
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag ="<h4 class='message_h4'> "+message+ "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'> ";
span_with_tag ="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();
function updateLike(message_id)
{
console.log("clicked on like botton -" + message_id)
button_id = message_id;
likes = document.getElementById(button_id).value;
updateed_likes = Number(likes) +1;
console.log(updateed_likes);

firebase.database().ref(room_name).child(message_id).update({
  like:updateed_likes
});
}