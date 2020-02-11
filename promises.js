// Example 1 - Promises
// In this example I'm using promises to ensure one function only starts after
// another is completed

// 'createPost' is set to respond after 2 seconds, while 'getPosts' is set to respond after
// 1 second. 


const posts = [
    { title: "Post One", body: "This is Post One" },
    { title: "Post Two", body: "This is Post Two" }

];


// Create a function that takes in a new post
// Return a 'Promise' and do the next step depending on whether the result of the
// function passed to the promise is good or bad

// This ensures that 'getPosts' is called after 'createPost' has finished,
// which can't be guaranteed if one function is called first, and then the other

function createPost(post) {

    // Return a promise. 'resolve' & 'reject' are callbacks provided by js.
    // The function passed to the promise will execute after 2 seconds.

    return new Promise(function(resolve, reject) {

        // Set timeout again - mimicing post to server

        setTimeout(function() {
            posts.push(post);

            // Artificially setting the error code to 'true' or 'false'

            const error = false;

            if (!error) {
                // If not an error:
                // This will run the .then function below (i.e. 'getPosts')
                
                resolve();
            }
            else {
                
                // If error:
                // This will run the .catch function below to display the error message in the console
                
                reject('Error: Something went wrong!');
            }

        }, 2000);

    });

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


createPost({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts)
    .catch(error => console.log(error))
