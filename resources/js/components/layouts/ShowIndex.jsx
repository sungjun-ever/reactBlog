import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Pagination from "./Pageination";
import SideMenu from "./SideMenu";

export default function ShowIndex(){
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0);
    const offset = (page - 1) * limit;

    useEffect( ()=>{
        axios({
            method: 'GET',
            url: '/api/show',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').attributes[1].value,
            }
        })
            .then(response => {
                setPosts(response.data.post);
                setTotal(response.data.post.length);
            })
    }, [])

    return (
        <div className={"flex min-h-screen max-h-fit py-16"}>
            <div className={"w-1/6"}>
                <SideMenu/>
            </div>
            <div className={"w-4/6 min-h"}>
                <div className={"flex pb-6 align-middle"}>
                    <span className={"pr-2"}>per page : </span>
                    <select name="page" className={"text-black rounded-md w-12"} onChange={({target: {value}}) => setLimit(value)}>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            {
                posts.slice(offset, offset + limit).map((post)=>
                    <div className={"flex border border-black justify-between px-4 h-16 items-center"} key={post.id}>
                        <Link to={'/show/'+post.id} relative="path">Title : {post.title}</Link>
                        <span>{post.userID}</span>
                    </div>
                )
            }
            <Pagination
                total={total}
                limit={limit}
                page={page}
                setPage={setPage}
            />
            </div>
            <div className={"w-1/6"}>1</div>
        </div>
    )
}

