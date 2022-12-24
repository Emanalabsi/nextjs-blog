import Image from "next/image";
import Link from "next/link";
export default function PostItem(props) {
  const [title, Body, image, id] = props.post;
  const imagePath = `/public/${image}/${id}`;
  return (
    <li>
      <Link>
        <a>
          <div>
            <Image src={imagePath} alt={title} width={250} height={400} />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{Body}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
