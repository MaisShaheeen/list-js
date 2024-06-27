var languages = ["JavaScript", "Python", "Java"];
var data = '';
for (var i = 0; i < languages.length; i++) {
    data += `<li>${languages[i]}</li>`;
}

document.querySelector(".languageList").innerHTML=data;