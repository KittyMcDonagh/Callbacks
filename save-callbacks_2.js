// Example 2 - In this example, 'getPosts' is called before 'createPost'. 
// 'getPosts' finishes before 'createPost'

const posts = [
    { title: "Post One", body: "This is Post One" },
    { title: "Post Two", body: "This is Post Two" }

];


function getPosts() {
   
        let output = '';
        posts.forEach(function(post, index) {
            output += `<li>${index} - ${post.title}, ${post.body}</li>`;
        });
        document.body.innerHTML = output;
}

// Create a function that takes in a new post

function createPost(post) {
    
         let output = '';
        posts.push(post);
}


// Get the posts and display on screen

getPosts();

// Create a post

createPost({ title: "Post Three", body: "This is Post Three" });















