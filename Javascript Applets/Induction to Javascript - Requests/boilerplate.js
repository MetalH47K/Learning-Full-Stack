// Declare the HTTPRequest Variables
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

// Details of the XHR Request
xhr.responseType = 'json'; // there are other types as well. 
xhr.onreadystatechange = function () { //This is a function to take the change of state (receiving data)
  if (xhr.readyState === XMLHttpRequest.DONE) { // XMLHttpRequest.DONE is the change state
    console.log(xhr.response); // This is the response
  }
}

xhr.open('GET', url); //Opens the connection to receive the reply 
xhr.send(); //sends data across. Here it is blank. 

-----

const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = function () { //This is a function to take the change of state (receiving data)
  if (xhr.readyState === XMLHttpRequest.DONE) { // XMLHttpRequest.DONE is the change state
    console.log(xhr.response); // This is the response
  }
}

xhr.open('POST', url); //Opens the connection to receive the reply 
xhr.send(data); //sends data across. Here it is blank. 