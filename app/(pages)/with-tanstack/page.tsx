'use client'
import { useQuery } from "@tanstack/react-query";
 
interface Post {
    id: number;
    title: string;
    body: string;
}
 
async function fetchPosts(): Promise<Post[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch posts.");
    return res.json();
}
 
export default function WithTanstackPage() {
 
    const { data: posts, isLoading, isError, error } = useQuery<Post[]>({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });
 
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p className="text-red-500">Error: {(error as Error).message}</p>
 
    return (
        <div className="p-[16px]">
            <h1>Using TanStack</h1>
            <ul className="">
                {posts?.map((post) => (
                    <li key={post.id} className="p-[16px]">
                        <h2 className="font-semibold">{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}