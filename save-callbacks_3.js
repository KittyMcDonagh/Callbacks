// Example 3 – JS is 'Event Driven' - Add Timeouts to mimic call to the server

const posts = [
    { title: "Post One", body: "Existing Post" },
    { title: "Post Two", body: "Existing Post" }

];


// Function 1 - Create a new post

function createPost(post) {
         setTimeout(function() {
            let output = '';
            posts.push(post);
         }, 2000);
}


// Function 2 -Display all posts

function getPosts() {
   
        setTimeout(function() {
            let output = '';
            posts.forEach(function(post) {
                output += `<p><strong>${post.title}</strong> = ${post.body}</p>`;
            });
            document.body.innerHTML = output;
        }, 1000);
}


// Call Function 2 to Get the posts and display on screen

getPosts();


// Call Function 1 to Create a post

createPost({ title: "Post Three", body: "Newly Created Post" });

