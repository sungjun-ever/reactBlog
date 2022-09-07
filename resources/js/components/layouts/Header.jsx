
import {Link} from "react-router-dom";

export default function Header(){
    function longSearchBox(e){
       e.target.classList.remove('w-1/2');
       e.target.classList.add('w-full');
    }

    function shortSearchBox(e){
        e.target.classList.remove('w-full');
        e.target.classList.add('w-1/2');
    }

    return (
        <div className={"flex flex-auto border-b-2 border-b-zinc-500 justify-evenly h-16 items-center"}>
            <div className={"w-1/4 text-center"}><Link to={"/"}>LOGO</Link></div>
            <div className={"flex w-1/2 text-left"}>
                <form action="" method={'GET'} className={"flex w-1/2 align-middle"}>
                    <input type={'text'}
                           name={'search'}
                           className={"border-2 border-white rounded-md p-1 w-1/2 transition-all"}
                           style={{backgroundColor:'#2d3436'}}
                           placeholder={'Search..'}
                           autoComplete={'off'}
                           onFocus={longSearchBox}
                           onBlur={shortSearchBox}
                    />
                    <button type={"submit"} className={"text-2xl pl-4"}><i className={"xi-search"}></i></button>
                </form>
            </div>
            <div className="w-1/4 text-center">
                <div>
                    <button className={"text-3xl"}><i className={"xi-bars"}></i></button>
                </div>
            </div>
        </div>
    )
}
