import { PostType } from "../types/types";

const PostCard = ({ title, body }: PostType) => {
  return (
    <div className="rounded-md bg-teal-500 bg-opacity-50 p-4 shadow-md">
      <p className="text-xl font-semibold">Title : {title}</p>
      <p className="mt-4 text-slate-300">Desc : {body}</p>
    </div>
  );
};

export default PostCard;
