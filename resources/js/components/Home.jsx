import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function Home(){
    const [posts, setPosts] = useState([]);

    useEffect( ()=>{
        axios({
            method: 'GET',
            url: '/api/show',
            params:{limit: 9},
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').attributes[1].value,
            }
        })
            .then(response => {
                setPosts(response.data.post);
            })
    }, [])

    return (
        <div className={"w-2/3 min-h-screen mx-auto py-16"}>
            <div className={"grid grid-cols-3 gap-x-4 gap-y-8"}>
                {
                    posts.map((post)=>
                        <div className={"w-full h-60 border"} key={post.id}>
                            <Link to={"/show/"+post.id}>
                            {
                                post.url
                                    ? <p className={"w-full h-48"}>IMG</p>
                                    : <p className={"w-full h-48"}>
                                        <img src={"../asset/noImage.jpg"} className={"w-full h-48"} loading={"lazy"}/>
                                    </p>
                            }
                            <p className={"w-full py-2 px-1 h-12"}>{post.title}</p>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
