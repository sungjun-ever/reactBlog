import {useState} from "react";

export default function Search(props){
    let [param, setParam] = useState('');
    setParam(props.param);

    return (
        <div className={"w-2/3 mx-auto min-h-screen"}>

        </div>
    )
}
