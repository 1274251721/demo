function getPosts() {
  return new Promise((resolve, reject) => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1", function (err, response1) {
      if (err) {
        reject(err);
      } else {
        resolve(response1);
      }
    });
  });
}
function getComments(params: number | string) {
  return new Promise((resolve, reject) => {
    axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${params}`,
      function (err, response2) {
        if (err) {
          reject(err);
        } else {
          resolve(response2);
        }
      }
    );
  });
}
function getUsers(params: number | string) {
  return new Promise((resolve, reject) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params}`, function (err, response2) {
      if (err) {
        reject(err);
      } else {
        resolve(response2);
      }
    });
  });
}
function getTodoss(params: number | string) {
  return new Promise((resolve, reject) => {
    axios.get(
      `https://jsonplaceholder.typicode.com/todos?userId=${params}`,
      function (err, response2) {
        if (err) {
          reject(err);
        } else {
          resolve(response2);
        }
      }
    );
  });
}
new Promise(async (resolve, reject) => {
  let res1: any = await getPosts();
  let res2: any = await getComments(res1.data.id);
  let res3: any = await getUsers(res2.data[0].userId);
  let res4: any = await getTodoss(res3.data.id);
  resolve([res1, res2, res3, res4]);
}).then((res) => {
  localStorage.setItem("allData", JSON.stringify(res));
});
