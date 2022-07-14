const {init} = require("../initdb");
const { ObjectId } = require('mongodb')

class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.story = data.story;
    };

    static get all() {
                return new Promise(async (resolve, reject) => {
            try {
                const db = await init();
                const dbData = await db.collection('posts').find({}).toArray()
                console.log(dbData);
                const posts = dbData.map(p => new Post(p))
                if (!posts.length) { throw new Error('No posts here!') }
                resolve(posts);
            } catch (err) {
                reject(`error retrieving posts: ${err.message}`);
            }
        });
    };

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('posts').find({}).toArray()
                console.log(postData)
                //console.log(postData);
                let post = new Post({...postData[id]});
               // console.log(...postData[0])
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    };

    static async create(title, name, story){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let postData = await db.collection('posts').insertOne({title, name, story})
                let newPost = new Post(postData.ops[0]);
                console.log(newPost);
                resolve (newPost);
            } catch (err) {
                console.log(err)
                reject('Post could not be created');
            }
        });
    }


}

module.exports = Post;
