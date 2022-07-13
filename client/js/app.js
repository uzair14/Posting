
const form = document.querySelector('#post-form');
const btn = document.querySelector('#view-btn');
const postList = document.querySelector("#posting")

form.addEventListener('submit', submitPost);

function getAllPosts(){
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
};

function appendPosts(data){
    data.posts.forEach(appendPost);
};

function submitPost(e){
    e.preventDefault();

    const postData = {
        title: e.target.title.value,
        name: e.target.name.value,
        story: e.target.story.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/posts', options)
        .then(r => r.json())
        .then(appendPost)
        .then(() => e.target.reset())
        .catch(console.warn)
};

function appendPost(postData){
    const newRow = document.createElement('div');
    const postt = formatPost(postData, newRow)
    postList.append(newRow);
};

function formatPost(post, div){
    const title = document.createElement('p');
    const name = document.createElement('p');
    const story = document.createElement('p');

    title.textContent = post.title
    name.textContent = post.name
    story.textContent = post.story

    div.append(title)
    div.append(name)
    div.append(story)

    return div
}
