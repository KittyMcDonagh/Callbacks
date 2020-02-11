// Example 1 - In this example, both functions run
// as expected one after the other

const posts = [
    { title: "Post One", body: "This is Post One" },
    { title: "Post Two", body: "This is Post Two" }

];


// Create a function that takes in a new post

function createPost(post) {
         let output = '';
        posts.push(post);
}


function getPosts() {
   
        let output = '';
        posts.forEach(function(post, index) {
            output += `<li>${index} - ${post.title}, ${post.body}</li>`;
        });
        document.body.innerHTML = output;
}




// Create a post

createPost({ title: "Post Three", body: "This is Post Three" });



// Get the posts and display on screen

getPosts();
