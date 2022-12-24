import Image from "next/image";
import Link from "next/link";

export default function Home({ Posts }) {
  const { id, body } = Posts;
  return (
    <div>
      <li>
        <Link href={`/${Posts.title}`}>
          <div>
            <Image
              src="/public/imgs/3.jpg"
              alt={"jjj"}
              width={250}
              height={400}
            />
          </div>
          <div>
            <h3>{Posts.title}</h3>
            <p>{Posts.body}</p>
          </div>
        </Link>
      </li>
      {Posts}
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const Posts = JSON.stringify(data.posts);

  return {
    props: {
      Posts,
    },
  };
}
