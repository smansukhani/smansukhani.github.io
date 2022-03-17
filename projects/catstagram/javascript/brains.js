var likeCount = [0,0,0,0,0];
function likePhoto(num) {
        likeCount[num]++;
        console.log(likeCount);
        document.getElementById("likeCount" + num).innerHTML = likeCount[num];
}
var user = {
    name: 'Felines ' + "n'" + ' Fame',
    name_last:'',
    profile_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhI6pA_MIWZ2LwW31LR8M5qRz7pueahd38lQ&usqp=CAU",
    followers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,27,56,79,79,79,79,7,9,8,88,8,9,9,9,9,9,9,9,9,9,99,9,99,9,9,9,9,99,9,9,9,9,99,9,9,9,9,99,9],
    bio: 'See what your famous felines are up to today!',
    username: 'feline_friends',
}
setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
 setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
 setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;}, 3000);
 setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 3000);
 setTimeout(function(){ document.getElementById("bio").innerHTML = user.bio;}, 3000);
 setTimeout(function(){ document.getElementById("username").innerHTML = user.username;}, 3000);
