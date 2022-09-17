import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Pagination from "./Pageination";


export default function ShowIndex(){
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const offset = (page - 1) * limit;
    const [total, setTotal] = useState(0);
    useEffect(()=>{
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
                console.log(posts.length);
                setTotal(posts.length);
            })
    }, []);

    return (
        <>
            <div className={"h-screen flex"}>
                <div className={"w-1/6"}>1</div>
                <div className={"w-4/6"}>
                {
                    posts.slice(offset, offset + limit).map((post)=>
                        <div className={"flex border border-black justify-between px-4 h-16 items-center"} key={post.id}>
                            <Link to={'/show/'+post.id} relative="path">Title : {post.title}</Link>
                            <span>{post.userID}</span>
                        </div>
                    )
                }
                </div>
                <div className={"w-1/6"}>1</div>
            </div>
            <Pagination
                total={total}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </>
    )
}
