let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let title = document.getElementById("title").value.trim()
    let name = document.getElementById("name").value.trim()
    let story = document.getElementById("story").value
    let array ={title: "", name: "", story: ""}
    array.title = title
    array.name = name
    array.story = story
    if (/^\s*$/.test(title) != true && /^\s*$/.test(name) != true&& /^\s*$/.test(story) != true){
        fetchFunction(array)
    }
})

async function fetchFunction (array) {
    options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(array)
    }
    await fetch("http://localhost:3000/posts", options)

    fetch("http://localhost:3000/posts")
        .then((resp) => resp.json())
        .then((result) => {
            postLength = result.posts.length
            newPostId = result.posts[postLength-1].id
            window.location.href=`post.html?${newPostId}`
        })
        .catch(err => {
            return ("Couldn't find search term");
        });
}

