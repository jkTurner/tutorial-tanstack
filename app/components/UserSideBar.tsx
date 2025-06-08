'use client'
import { useQuery } from "@tanstack/react-query";
 
const UserSideBar = () => {
 
    const { data, isLoading } = useQuery({
        queryKey: ['user', 1],
        queryFn: async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
            if (!res.ok) throw new Error("Failed to fetch user.");
            return res.json();
        },
        staleTime: Infinity, // ensures it's cached forever unless refetched
    })
 
    if (isLoading) return <p>Loading sidebar...</p>
 
    return (
        <div>
            <h2 className="font-bold text-lg">Sidebar</h2>
            <p className="text-sm">{data.name}</p>
            <p className="text-sm">{data.email}</p>
        </div>
    )
}
 
export default UserSideBar;