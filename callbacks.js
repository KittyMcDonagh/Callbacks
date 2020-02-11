// Example 5 - In this example I'm adding callbacks to ensure one function only starts after
// another is completed

// 'createPost' is set to respond after 2 seconds, while 'getPosts' is set to respond after
// 1 second. 


const posts = [
    { title: "Post One", body: "This is Post One" },
    { title: "Post Two", body: "This is Post Two" }

];


// Create a function that takes in a new post
// Give it a callback function called 'callback' (this can be any name) and
// call that callback function after creating the new post
// This ensures that 'getPosts' is called after 'createPost' has finished,
// which can't be guaranteed if one function is called first, and then the other

function createPost(post, callback) {
    
    // Set timeout again - mimicing post to server
    
    setTimeout(function() {
        let output = '';
        posts.push(post);
        callback();
        
    }, 2000)
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
// Add 'getPosts' as the callback function to 'createPost', instead of calling
// 'getPosts' separately

createPost({ title: "Post Three", body: "This is Post Three" }, getPosts);
