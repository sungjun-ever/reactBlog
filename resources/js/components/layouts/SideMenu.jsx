import {Link} from "react-router-dom";

export default function SideMenu({state}){
    return (
        <>
        {
            {
                open:
                    <div id={"sideMenu"} className={"flex min-h-screen w-full bg-transparent top-0 left-0 overflow-x-hidden z-1 fixed"}>
                        <div className={"flex flex-col w-3/12 bg-gray-500"}>
                            <Link to={"/show"}>전체 게시글</Link>
                            <Link to={"/"}>SUB DIR</Link>
                            <Link to={"/"}>SUB DIR</Link>
                        </div>
                        <div onClick={()=>{document.getElementById('sideMenu').remove();}} className={"w-3/4"}></div>
                </div>,
                close: <div></div>,
            }[state]
        }
        </>

    )
}


