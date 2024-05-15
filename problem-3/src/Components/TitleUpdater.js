import { useEffect, useState } from "react";

function TitleUpdates(){
    const [count, setCount] = useState(0)


    useEffect(() => {
        document.title = `count ${count}`
    },[count])

    return(
        <div>
            <h1>Title Updates</h1>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Title</button>
        </div>
    )
}

export default TitleUpdates;