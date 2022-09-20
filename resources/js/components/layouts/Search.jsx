import {useEffect, useState} from "react";
import queryString from 'query-string';
import {Link} from "react-router-dom";

export default function Search(props){
    const [posts, setPost] = useState([]);
    const [isValid, setIsValid] = useState('');

    const search = window.location.search;
    const query = queryString.parse(search);

    if (search !== ''){
        useEffect(()=>{
            axios({
                method: 'GET',
                url: '/api/search',
                params: query,
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
    } else {
        setIsValid('search');
    }

    return (
        <div className={"w-2/3 mx-auto min-h-screen max-h-fit"}>
            <div className={"border w-full max-h-fit py-8"}>
                <div className={"flex text-2xl items-center justify-center py-6"}>"{query.param}" 검색 결과</div>
            {
                {
                    show:
                            posts.map(post=>
                                <div className={"border w-2/3 mx-auto py-6 px-2"} key={post.id}>
                                    <Link to={"/show/"+post.id}>
                                        <div className={"text-xl"}>{post.title}</div>
                                        <div className={"text-md py-1 text-gray-300"}>{post.story}</div>
                                    </Link>
                                </div>
                            ),

                    no:
                        <div className={"flex text-2xl min-h-screen max-h-fit items-start justify-center"}>
                            <div>검색 결과를 찾을 수 없습니다.</div>
                        </div>,

                    search:
                        <div className={"flex text-2xl min-h-screen max-h-fit items-start justify-center"}>
                            <div>검색어를 입력해주세요.</div>
                        </div>,
                }[isValid]
            }
            </div>
        </div>
    )
}
