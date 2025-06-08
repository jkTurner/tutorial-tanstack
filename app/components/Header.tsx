'use client'
import { useQuery } from "@tanstack/react-query";
 
const Header = () => {
 
    const { data, isLoading } = useQuery({
        queryKey: ['user', 1],
        queryFn: async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
            if (!res.ok) throw new Error("Failed to fetch the user")
                return res.json();
        },
    })
 
    if (isLoading) return <p>Loading header...</p>
 
    return (
        <div className="flex w-full justify-between my-[16px]">
            <span className="font-bold text-lg">My Site</span>
            <div className="flex gap-[16px]">
                <span className="text-sm">Welcome {data.name}</span>
            </div>
        </div>
    )
}
 
export default Header;