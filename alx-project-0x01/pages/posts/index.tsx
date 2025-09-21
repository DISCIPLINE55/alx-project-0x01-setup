import React, { useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import { PostProps } from "@/interfaces"; // ✅ Required import
import { PostData } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [postsList, setPostsList] = useState<PostProps[]>(posts);
  const [post, setPost] = useState<PostData | null>(null);

  const handleAddPost = (newPost: PostData) => {
    const id = postsList.length > 0 ? Math.max(...postsList.map((p) => p.id)) + 1 : 1;
    const postToAdd: PostProps = { ...(newPost as PostProps), id };
    setPostsList((prev) => [postToAdd, ...prev]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 container mx-auto">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Posts</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 px-4 py-2 text-white rounded-full"
          >
            Add Post
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {postsList.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await response.json();
  return { props: { posts } };
}

export default Posts;
