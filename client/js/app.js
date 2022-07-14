
const form = document.querySelector('#post-form');
const btn = document.querySelector('#view-btn');
const postList = document.querySelector("#posting")

form.addEventListener('submit', submitPost);

getAllPosts();

async function getAllPosts(){
    const resp = await fetch('http://localhost:3000/posts')
    const { data, error } = await resp.json();
    data ? appendPosts(data) : showError(error);
};

function appendPosts(data){
    data.forEach(appendPost)
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
    const newSection = document.createElement('section');
    const postTitle = document.createElement('h1');
    const postName = document.createElement('h2');
    const postStory = document.createElement('p');
    postTitle.textContent = postData.title;
    postName.textContent = postData.name;
    postStory.textContent = postData.story;
    newSection.append(postTitle);
    newSection.append(postName);
    newSection.append(postStory);
    postList.append(newSection);
};

/*function formatPost(post, div){
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
}*/
