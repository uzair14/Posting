let postList = document.getElementById("postList");

getAllPosts();

async function getAllPosts() {
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
};

function appendPosts(data) {
    console.log(data);
    data.posts.forEach(appendPost)
};

function appendPost(postData) {
    const newSection = document.createElement('section');
    const postTitle = document.createElement('h1');
    const postName = document.createElement('p');
    const postStory = document.createElement('p');
    postTitle.textContent = postData.title;
    postName.textContent = postData.name;
    postStory.textContent = postData.story;
    newSection.append(postTitle);
    newSection.append(postName);
    newSection.append(postStory);
    postList.append(newSection);
};
