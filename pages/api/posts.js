function postsHandler() {
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then(console.log);
}
export default postsHandler;
