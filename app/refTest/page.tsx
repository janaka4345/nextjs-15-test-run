'use client'

import Divt from "@/components/custom/Div"
import { useEffect, useRef } from "react"

const page = () => {
    const divRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        console.log(divRef);
        return () => {
        }
    }, [])

    return (
        <>
            <div >page</div>
            <Divt ref={divRef} />
        </>

    )
}
export default page