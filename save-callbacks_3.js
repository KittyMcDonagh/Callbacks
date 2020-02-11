// Example 3 - In this example I'm adding timeouts to mimic a call to the server - the
// response may take a few seconds to return

// 'createPost' is set to respond after 2 seconds, while 'getPosts' is set to respond after
// 1 second. 
// Although 'createPost' is called before 'getPosts', 'getPosts' completes before 'createPost', 
// because 'createPost' takes longer to run

const posts = [
    { title: "Post One", body: "This is Post One" },
    { title: "Post Two", body: "This is Post Two" }

];


// Create a function that takes in a new post


function createPost(post) {
    
    // Set timeout again - mimicing post to server
    
    setTimeout(function() {
        let output = '';
        posts.push(post);
        
    }, 1000)
}


function getPosts() {
    
    // We're mimicing getting posts from a server and that
    // could take a few minutes, so we set a timeout
    // setTimeout takes in a callback function, and it 
    // takes in a time delay before whatever is in the 
    // cb function happens. 1000 = 1000 milliseconds or
    // 1 second
    
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post, index) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
        
    }, 1000)
}




// Create a post

createPost({ title: "Post Three", body: "This is Post Three" });


// Get the posts and display on screen

getPosts();












