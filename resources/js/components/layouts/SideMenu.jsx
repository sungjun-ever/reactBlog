import {Link} from "react-router-dom";

export default function SideMenu(){
    return (
        <div className={"flex flex-col pl-16"}>
            <Link to={"/show"}>전체 게시글</Link>
            <Link to={"/"}>SUB DIR</Link>
            <Link to={"/"}>SUB DIR</Link>
        </div>
    )
}


