import {useState} from "react";
import Demo from "./LifeCircle/Demo";
import CodeGym from "./FunctionComponent/CodeGym";


function App() {
    let [isShow, setIsShow] = useState(false);
    return (
        <>
            {isShow && <CodeGym/>}
            <button onClick={() => {setIsShow(!isShow)}}>Show Demo</button>
        </>
    );


    // return (
    //     <>
    //         <CodeGym name={"Trang"}/>
    //     </>
    // )
}

export default App;
