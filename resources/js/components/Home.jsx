
import React, {useState, useEffect} from "react";

export default function Home(){
    const [posts, setPosts] = useState([]);

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
            })
    }, [])

    return (
        <div className={"w-2/3 mx-auto py-16"}>
            <div className={"grid grid-cols-3 gap-x-4 gap-y-8 border"}>
                {
                    posts.slice(0, 9).map((post)=>
                        <div className={"w-full h-48 border"}>
                            <p className={"w-full p-2 h-36 border border-red-400"}>IMG</p>
                            <p className={"w-full p-2 h-12 border border-blue-500"}>{post.title}</p>
                        </div>
                    )
                }

                {/*<div className={"w-full h-48 border"}>*/}
                {/*    <p className={"w-full p-2 h-36 border border-red-400"}>IMG</p>*/}
                {/*    <p className={"w-full p-2 h-12 border border-blue-500"}>Title</p>*/}
                {/*</div>*/}
                {/*<div className={"w-full h-48 border"}>*/}
                {/*    <p className={"w-full p-2 h-36 border border-red-400"}>IMG</p>*/}
                {/*    <p className={"w-full p-2 h-12 border border-blue-500"}>Title</p>*/}
                {/*</div>*/}
                {/*<div className={"w-full h-48 border"}>*/}
                {/*    <p className={"w-full p-2 h-36 border border-red-400"}>IMG</p>*/}
                {/*    <p className={"w-full p-2 h-12 border border-blue-500"}>Title</p>*/}
                {/*</div>*/}
                {/*<div className={"w-full h-48 border"}>*/}
                {/*    <p className={"w-full p-2 h-36 border border-red-400"}>IMG</p>*/}
                {/*    <p className={"w-full p-2 h-12 border border-blue-500"}>Title</p>*/}
                {/*</div>*/}
                {/*<div className={"w-full h-48 border"}>*/}
                {/*    <p className={"w-full p-2 h-36 border border-red-400"}>IMG</p>*/}
                {/*    <p className={"w-full p-2 h-12 border border-blue-500"}>Title</p>*/}
                {/*</div>*/}
                {/*<div className={"w-full h-48 border"}>*/}
                {/*    <p className={"w-full p-2 h-36 border border-red-400"}>IMG</p>*/}
                {/*    <p className={"w-full p-2 h-12 border border-blue-500"}>Title</p>*/}
                {/*</div>*/}
                {/*<div className={"w-full h-48 border"}>*/}
                {/*    <p className={"w-full p-2 h-36 border border-red-400"}>IMG</p>*/}
                {/*    <p className={"w-full p-2 h-12 border border-blue-500"}>Title</p>*/}
                {/*</div>*/}
                {/*<div className={"w-full h-48 border"}>*/}
                {/*    <p className={"w-full p-2 h-36 border border-red-400"}>IMG</p>*/}
                {/*    <p className={"w-full p-2 h-12 border border-blue-500"}>Title</p>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
