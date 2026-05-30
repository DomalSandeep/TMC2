import React, {useEffect} from 'react';
import './SideBar.scss';
import { Link } from "react-router-dom";
import Menudata from './Menudata.json';
import { useLocation } from "react-router-dom";


const SideBar = () => {

    const location = useLocation();

    const linkActive = location.pathname;

    const linkActiveText = linkActive.split('/');

    const textAlign = (text) => {
        const split_text = text.split('. ');
        return <>
            <span>{`${split_text[0] + '.'}`}</span> <span>{split_text[1]}</span>
        </>;
    };

    const handleClick = () => {
        console.log(document.getElementById('Sidebar'));
        // console.log(document.getElementById(ele).getBoundingClientRect());
        // window.scrollTo(0, 4000);
        const element = document.getElementById('Sidebar');
        console.log('element', element);
        // element.scrollTop = 200;
        
    }

    useEffect(() => {
        console.log(linkActiveText);
    });

    return (
        <div id="Sidebar" className='Sidebar custom-scroll'>
            
            <ul className='links'>
                {Menudata.map((res, index) => {
                    const {name, url, childrens } = res; 

                    return (
                        <li key={index}><Link to={url} className={linkActiveText[1] === url ? 'active' : ''}>{name}</Link>
                            {childrens && 
                            <ul>
                                {childrens.map((item, ind) => {
                                    return <li key={ind} id={item.link} onClick={() => handleClick(item.link)}><Link to={`/${url}/${item.link}`} className={linkActiveText[2] === item.link ? 'active' : ''}>{textAlign(item.title)}</Link></li>;
                                })}
                            </ul>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBar;