db = connect("mongodb://localhost:27017/posts")

db.posts.drop()

db.posts.insertMany([
    { title: "Post1", name: "name1", story: "story1"},
    { title: "Post2", name: "name2", story: "story2"},
    { title: "Post3", name: "name3", story: "story3"},
    { title: "Post4", name: "name4", story: "story4"},
    { title: "Hello world", name: "Harry", story: "Just want to say hello"}
])
