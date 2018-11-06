

//blog posts variable
//an array of objects
const posts = [
  {title: 'post one', body: 'this is post one'},
  {title: 'post two', body: 'this is poat two'}  
];


//suppose fetching data from a server
//which can take couple of seconds
//it is mimic by setTimeout() function
//in here arrow function syntax has been used
function getPosts(){
  setTimeout(() => {
    let output = '';

    //iterate through posts collection
    //in each iteration executes the arrow function
    posts.forEach((post, index) =>{
      output += `<li>${post.title}</li>`;
    });

    //adding output value to page
    document.body.innerHTML = output;
  }, 1000);
}

// //Function adds a new post to posts coollection
// function createPosts(post){
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// //without callbacks new post will not add to the DOM
// //cz, it takes longer than get post method (2 sec)
// //see below for this function with callbacks 


//with callbacks
//function accept a parameter "callback" , this can be any name
//invoke callback() where needed
//it will call back again mentioned function, here getPosts()
function createPosts(post, callback){
  setTimeout(() => {
    posts.push(post)
    callback();
  }, 2000);
}

///getPosts();
createPosts({title: 'post three', body:'this is post three'}, getPosts);