import {useEffect, useState} from "react";
import Page404 from "../error/Page404";
import queryString from 'query-string';

export default function Search(props){
    const [posts, setPost] = useState([]);
    const [isValid, setIsValid] = useState('search');

    const search = window.location.search;
    const query = queryString.parse(search);

    if (search !== ''){
        useEffect(()=>{
            axios({
                method: 'GET',
                url: '/api/search',
                params:query,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').attributes[1].value,
                }
            })
                .then((res) => {
                    if (res.data.post.length !== 0){
                        setPost(res.data.post);
                        setIsValid('show');
                    } else {
                        setIsValid('no');
                    }
                })
        }, [])
    }

    return (
        <div className={"w-2/3 mx-auto min-h-screen max-h-fit text-center"}>
            {
                {
                    show:
                        posts.map(post=>
                            <div>{post.title}</div>
                        ),
                    no:
                        <div>
                            검색 결과를 찾을 수 없습니다.
                        </div>,
                    search:
                        <div>
                            검색
                        </div>
                }[isValid]
            }

        </div>
    )
}
