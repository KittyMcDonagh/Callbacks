// Example 2 – Call Function 2 first, Then Function 1

const posts = [
    { title: "Post One", body: "Existing Post" },
    { title: "Post Two", body: "Existing Post" }

];


// Function 1 - Create a new post

function createPost(post) {
    
         let output = '';
        posts.push(post);
}


// Function 2 -Display all posts

function getPosts() {
   
        let output = '';
        posts.forEach(function(post) {
            output += `<p><strong>${post.title}</strong> = ${post.body}</p>`;
        });
        document.body.innerHTML = output;
}


// Call Function 2 to Get the posts and display on screen

getPosts();


// Call Function 1 to Create a post

createPost({ title: "Post Three", body: "Newly Created Post" });

