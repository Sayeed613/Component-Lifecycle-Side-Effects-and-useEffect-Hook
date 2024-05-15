import { useEffect, useState } from "react";

function MouseTracker(){
    const [positon, setPositon] = useState({y:0, x:0});

    useEffect(() => {
        function handleMouseMove(e){
            setPositon({x:e.clientX, y:e.clientY})
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    },[])

    return(
        <div>
            <h1>The mouse position is ({positon.x}, {positon.y})</h1>
        </div>
    )
}
export default MouseTracker;