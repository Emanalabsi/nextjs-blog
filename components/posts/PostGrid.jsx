import PostItem from "./PostItem";

export default function PostGrid(props) {
  const { posts } = props;
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.slug} />
        ))}
      </ul>
    </div>
  );
}
