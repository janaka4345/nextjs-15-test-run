'use client'
import Product from "@/components/custom/Product"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const page = () => {
    'use memo'
    const [count, setCount] = useState(0)
    console.log('compiler page ran');

    return (
        <>
            <Product />
            <div>{count}</div>
            <Button onClick={() => setCount(prev => prev + 1)}>click</Button>
        </>
    )
}
export default page