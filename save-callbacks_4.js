// Example 4 – JS is ‘Event Driven’ - Add a callback to process the Functions in order

const posts = [
    { title: "Post One", body: "Existing Post" },
    { title: "Post Two", body: "Existing Post" }

];


// Function 1 - Create a new post. Pass in a callback function

function createPost(post, callback) {
         setTimeout(function() {
            let output = '';
            posts.push(post);
            callback();
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


// Call Function 1 to Create a post

createPost({ title: "Post Three", body: "Newly Created Post" }, getPosts);

