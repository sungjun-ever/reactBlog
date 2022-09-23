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

    function search(e){
        e.preventDefault();
        const p = document.getElementById('search').value;
        window.location.href=`/search?param=`+p;
    }

    function openSideMenu(){
        const sideMenu = document.getElementById('sideMenu');
        sideMenu.style.display = 'flex';
        sideMenu.classList.remove('w-0');
        sideMenu.classList.add('w-full');
    }

    function closeSideMenu(){
        const sideMenu = document.getElementById('sideMenu');
        sideMenu.style.display = 'none';
        sideMenu.classList.remove('w-full');
        sideMenu.classList.add('w-0');
    }

    return (
        <div className={"border-b-2 border-b-zinc-500"}>
            <div id={"sideMenu"} className={"flex min-h-screen w-0 bg-transparent top-0 left-0 overflow-x-hidden z-1 fixed transition duration-1000"} style={{display:"none"}}>
                <div className={"flex flex-col px-6 py-20 w-1/6 transition duration-1000"} style={{backgroundColor:"#192a56"}}>
                    <Link to={"/show"} className={"text-lg"}>전체 보기(N)</Link>
                    <Link to={"/"}>SUB DIR</Link>
                    <Link to={"/"}>SUB DIR</Link>
                </div>
                <div onClick={closeSideMenu} className={"w-5/6"}></div>
            </div>
            <div className={"flex flex-auto justify-evenly h-16 items-center w-2/3 mx-auto"}>
                <div className={"flex w-1/2 gap-x-12"}>
                    <div>
                        <button className={"text-3xl"} onClick={openSideMenu}><i className={"xi-bars"}></i></button>
                    </div>
                    <Link to={"/"} className={"text-2xl"}>LOGO</Link>
                </div>

                <div className={"flex w-1/2"}>
                    <form method={'GET'} className={"flex w-full align-middle justify-end"}>
                        <input id={"search"}
                               type={'text'}
                               name={'search'}
                               className={"border-2 border-white rounded-md p-1 w-1/2 transition-all"}
                               style={{backgroundColor:'#2d3436'}}
                               placeholder={'검색..'}
                               autoComplete={'off'}
                               onFocus={longSearchBox}
                               onBlur={shortSearchBox}
                        />
                        <button type={"submit"} className={"text-2xl pl-4"} onClick={search}>
                            <i className={"xi-search"}></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
