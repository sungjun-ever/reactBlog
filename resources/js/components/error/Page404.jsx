import {Link} from "react-router-dom";
export default function Page404(){
    return (
        <div className={"w-2/3 mx-auto"}>
            <div className={"py-16"}>
                <a href="http://www.freepik.com" target={"_blank"}>
                    <img src="../asset/2231.jpg" alt="Designed by catalyststuff" className={"w-1/3 mx-auto rounded-lg"}/>
                </a>
                <div className={"mx-auto w-1/3 text-center text-xl py-8"}>페이지를 찾을 수 없습니다!</div>
                <div className={"mx-auto w-1/3 text-center py-4"}>
                    <Link to={"/"}><button className={"bg-gray-500 px-4 py-2 rounded-md"}>홈으로</button></Link>
                </div>
            </div>
        </div>
    )
}
