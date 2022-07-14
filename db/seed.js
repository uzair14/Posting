db = connect("mongodb://localhost:27017/posts")

db.posts.drop()

db.posts.insertMany([
    { title: "Hello world", name: "Harry", story: "Just want to say hello"},
    { title: "Helloooo", name: "John", story: "my story"},
    { title: "Hellowdndw", name: "Uzair", story: "dunno"},
    { title: "Yooooo", name: "Bob", story: "lesss gooooo"},
    { title: "About the world", name: "Bill", story: "The world"},
    { title: "New post", name: "Uzair", story: "New post"},
])
