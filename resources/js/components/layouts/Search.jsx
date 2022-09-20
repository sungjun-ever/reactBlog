import {useEffect, useState} from "react";
import Page404 from "../error/Page404";

export default function Search(props){
    let [param, setParam] = useState('');
    let [posts, setPost] = useState([]);
    let [isValid, setIsValid] = useState('error');

    if(!props) setParam(props.param);

    if (param !== ''){
        useEffect(()=>{
            axios({
                method: 'GET',
                url: '/api/search',
                data:{param},
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').attributes[1].value,
                }
            })
                .then((res) => {
                    setPost(res.data.post);
                    setIsValid('show');
                })
        }, [])
    }

    return (
        <div className={"w-2/3 mx-auto min-h-screen"}>
            {
                {
                    show:
                        posts.map(post=>
                            <div>{post.title}</div>
                        ),

                    error: <Page404/>
                }[isValid]
            }

        </div>
    )
}
