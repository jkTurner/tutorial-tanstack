'use client'
import { useUser } from "@/hooks/useUser";
 
const BodyComponent = () => {
 
    const {data, isLoading} = useUser(1);
    
    if (isLoading) return <p>Loading Body Component...</p>
    return (
        <div>
            <p>This is the body with user&apos;s name: <span>{data?.name}</span></p>
        </div>
    )
}
 
export default BodyComponent;