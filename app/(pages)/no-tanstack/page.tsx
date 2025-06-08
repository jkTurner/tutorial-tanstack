'use client'
import { useEffect, useState } from "react";
 
interface Post {
    id: number;
    title: string;
    body: string;
}
 
export default function NoTanstackPage() {
 
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
 
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!res.ok) throw new Error('Failed to fetch posts');
                const data: Post[] = await res.json();
                setPosts(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Unknown error occurred.")
                }
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [])
 
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>
 
    return (
        <div className="p-[16px]">
            <h1>No TanStack</h1>
            <ul className="">
                {posts.map((post) => (
                    <li key={post.id} className="p-[16px]">
                        <h2 className="font-semibold">{post.title}</h2>
                        <p className="">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}