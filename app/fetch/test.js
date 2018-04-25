import 'whatwg-fetch'
import 'es6-promise'

export function getData(){
  var result1 = fetch('api/1', {
    credentails: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
    },
  });
  result1.then(res => {
    return res.text()
  }).then(text => {
    console.log(text);
  })


  var result2 = fetch('api/2', {
    credentails: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
    },
  });
  result2.then(res => {
    return res.json()
  }).then(json => {
    console.log(json);
  })
}

export function postData(){
  let result = fetch('api/post', {
    method: 'POST',
    credentails: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'a=100&b=20'
  });

    result.then(res => {
      return res.json()
    }).then(json => {
      console.log(json);
    })

}
