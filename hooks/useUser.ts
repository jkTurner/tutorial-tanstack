'use client'
import { useQuery } from "@tanstack/react-query";
 
interface User {
    id: number;
    name: string;
    email: string;
}
 
export function useUser(userId: number) {
    return useQuery<User>({
        queryKey: ['user', userId],
        queryFn: async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/user/${userId}`)
            if (!res.ok) throw new Error("Failed to fetch user");
            return res.json();
        },
        staleTime: Infinity,
    })
}