import React from 'react';
import '../../css/app.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {createRoot} from "react-dom/client";
import * as ReactDOMClient from 'react-dom/client';
import Home from './Home';
import Header from "./layouts/Header";
import Create from "./admin/Create";
import Footer from "./layouts/Footer";
import Index from "./admin/Index";
import Show from "./layouts/Show";
import Page404 from "./error/Page404";
import ShowIndex from "./layouts/ShowIndex";

export default function App() {
    return (
        <div className="w-full mx-auto">
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path={"/*"} element={<Page404 />} />
                <Route path={"/show"} element={<ShowIndex />} />
                <Route path={"/show/:id"} element={<Show />} />
                <Route path={"/show/*"} element={<Page404 />} />

                <Route path={"/admin"} element={<Index />} />
                <Route path={"/admin/create"} element={<Create />} />
            </Routes>
            <Footer/>
        </div>
    )
}

const rootElement = document.getElementById("app");
const app = createRoot(rootElement);

app.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
