import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/tailwind.css'

createApp(App).mount('#app')

let menu_links = document.getElementsByClassName("menu_link");

for (let x = 0; x < menu_links.length; x++) {
    menu_links[x].addEventListener("click", function() {
        load(menu_links[x].id);
    })
}
window.onload = function() {

    fetch('https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=vJoosW2QKHOnYGJ5aChRSYO1MkYNiYuN')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let src;
            data.results.forEach((element) => {
                if (null == element.multimedia) {
                    src = "<img src='https://static01.nyt.com/images/2022/01/09/arts/09scream-reunion1/09scream-reunion1-superJumbo.jpg'/>";
                } else {
                    src = "<img src='" + element.multimedia[0].url + "'/>";
                }
                console.log(element)
                let content = document.getElementById("content");
                let div = document.createElement("div");
                div.classList = "w-full border border-black rounded-md";
                div.innerHTML = '<div class="p-4">' + src + '<p class="px-4 text-3xl font-bold text-left mt-4">' + element.title + '</p><p class="px-4 mt-2 text-md">' + element.abstract + '</p></div>';
                content.appendChild(div);
            });
        });
}

function load(key) {

    fetch('https://api.nytimes.com/svc/topstories/v2/' + key + '.json?api-key=vJoosW2QKHOnYGJ5aChRSYO1MkYNiYuN')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let src;
            let content = document.getElementById("content");
            content.innerHTML = '';
            data.results.forEach((element) => {
                if (null == element.multimedia) {
                    src = "<img src='https://static01.nyt.com/images/2022/01/09/arts/09scream-reunion1/09scream-reunion1-superJumbo.jpg'/>";
                } else {
                    src = "<img src='" + element.multimedia[0].url + "'/>";
                }
                console.log(element)
                let div = document.createElement("div");
                div.classList = "w-full border border-black rounded-md";
                div.innerHTML = '<div class="p-4">' + src + '<p class="px-4 text-3xl font-bold text-left mt-4">' + element.title + '</p><p class="px-4 mt-2 text-md">' + element.abstract + '</p></div>';
                content.appendChild(div);
            });
        });

}