import { useEffect, useState } from "react";
import { PostType } from "../types/types";
import PostCard from "./PostCard";

const PostLists = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [posts, setPosts] = useState<PostType[] | null>(null);

  useEffect(() => {
    setIsFetching(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          setIsFetching(false);
          setPosts(null);
          return;
        }
        return res.json();
      })
      .then((data) => {
        setIsFetching(false);
        setPosts(data);
      })
      .catch(() => setPosts(null));
  }, []);

  if (isFetching) return <div>Fetching all the posts.....</div>;

  if (!posts)
    return (
      <div className="text-rose-400">
        No Post found... (Failed to fecth the posts)
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.slice(0, 10).map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostLists;
