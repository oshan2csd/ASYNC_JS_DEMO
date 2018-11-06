
//as sae as callbacks.js/promises.js
const posts = [
  {title: 'post one', body: 'this is post one'},
  {title: 'post two', body: 'this is poat two'}  
];



//as sae as callbacks.js/promises.js
function getPosts(){
  setTimeout(() => {
    let output = '';

    posts.forEach((post, index) =>{
      output += `<li>${post.title}</li>`;
    });
    
    document.body.innerHTML = output;
  }, 1000);
}



//as sae as callbacks.js/promises.js
function createPosts(post){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      posts.push(post);

      const error = false;

      if(!error){
        resolve();
      }
      else{
        reject('Error: something went wrong');
      }      
    },2000);
  });
}


//async-Awit
async function newFunction(){
  //wait till this function to be finished
  await createPosts({title: 'post three', body:'this is post three'});

 getPosts();
}

newFunction();

//Async-Await with fetch api
async function fetchUsers(){
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = users.json();
  console.log(data);
}

fetchUsers();