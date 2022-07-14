document.addEventListener("DOMContentLoaded", init);

function init() {
    fetchId = window.location.href.split("?")[1]
    fetch(`http://localhost:3000/posts/${fetchId}`)
        .then((resp) => resp.json())
        .then((result) => {
            //console.log(result.title);
            if (result.title!=undefined){
                postTitle = document.getElementById("title")
                postTitle.textContent = result.title
                postName = document.getElementById("name")
                postName.textContent = "by " + result.name
                postStory = document.getElementById("story")
                postStory.textContent = result.story
            }
        })
        .catch(err => {
            return ("Couldn't find search term");
        });
}
