import Button from "../buttons/Button";
import React, { useState } from 'react';

export default function Form(props) {
    let [title, setTitle] = useState('');
    let [story, setStory] = useState('');

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeTextarea = (e) => {
        setStory(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target.closest('#form'));
        const url = '/api'+props.url;
        axios({
            method: 'POST',
            url,
            data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').attributes[1].value,
            }
        })
            .then(function (response){
                if(response.data.message === '201'){
                    setTitle(response.data.message);
                    setStory(response.data.message);
                }
            })
            .catch(function (error){
                console.log(error);
            })
    }
    return (
        <div className={"py-8"}>
            <form id={"form"} className={"shadow-md shadow-white rounded-sm p-4 min-h-max pb-16 text-black"}>
                <p>
                    <label htmlFor={"title"}></label>
                    <input type="text" id={"title"} name={"title"} className={"w-full rounded-sm p-2"} placeholder={"제목..."} onChange={changeTitle} value={title}/>
                </p>
                <p className={"pt-4"}>
                    <label htmlFor={"story"}></label>
                    <textarea id={"story"}
                              name={"story"}
                              style={{height:"800px"}}
                              className={"w-full resize-none rounded-sm p-2"}
                              placeholder={"내용...."}
                              onChange={changeTextarea}
                              value={story}/>
                </p>
                <p className={"flex py-2 justify-evenly"}>
                    <button type="button" className={"bg-green-600 py-2 px-8 rounded-sm text-lg"} onClick={submit}>작성</button>
                    <button type="button" className={"bg-red-600 py-2 px-8 rounded-sm text-lg"}>취소</button>
                </p>
            </form>
        </div>
    )
}
