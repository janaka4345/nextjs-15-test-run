import { type RefObject } from "react"

const Divt = ({ ref }: { ref: RefObject<HTMLDivElement> }) => {
    return (
        <div ref={ref}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta magni a delectus, suscipit optio exercitationem hic perspiciatis amet ad nihil pariatur eum dolore nemo, enim debitis repudiandae minus veniam sed!
                Quasi eos harum eius nesciunt quo exercitationem illum molestias est, quis, sunt delectus sed ex perferendis nisi dolorem pariatur nostrum? Quasi aut quis voluptatum libero accusamus ab nesciunt aliquam tempore.</p>
        </div>
    )
}
export default Divt