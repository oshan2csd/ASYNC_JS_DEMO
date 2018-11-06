

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



//with promises////////////////////////////
function createPosts(post){

  //return a promise
  //if ok ==> call resolve
  //if not ok ==> call reject
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

//if it resolved ==> then comes to .then part
createPosts({title: 'post three', body:'this is post three'})
.then(getPosts)
.catch(e => console.log(e));


//Promise.all 