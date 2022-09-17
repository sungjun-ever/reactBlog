import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Page404 from "../error/Page404";

export default function Show(){
    let param = useParams();
    let [post, setPost] = useState([]);
    let [isValid, setIsValid] = useState('all');

    if (param.id === undefined) {
        param.id = '';
    }

    useEffect(()=>{
        axios({
            method: 'GET',
            url: '/api/show/'+param.id,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').attributes[1].value,
            }
        })
            .then(response => {
                if(response.data.post === null){
                    setIsValid('notFound');
                } else {
                    setIsValid('show');
                    setPost(response.data.post);
                }
            })
    }, []);

    return (
        <div>
            {
                {
                    show :
                        <div className={"h-screen flex"}>}
                            <div className={"w-1/6 border border-white"}>1</div>
                            <div className={"w-4/6 border border-green-300 py-16 px-32"}><div id={"title"} className={"font-bold text-3xl"}>{post.title}</div>
                                <div id={"story"} className={"py-8"}>
                                    {post.story}
                                </div>
                            </div>
                            <div className={"w-1/6 border border-red-400"}>1</div>
                        </div>,

                    notFound : <Page404/>
                }[isValid]
            }
        </div>

    )
}
