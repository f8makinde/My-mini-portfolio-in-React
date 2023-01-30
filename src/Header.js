import React from 'react'
import myImage from './my portfolio pics.png'
export default function Header(){
    return(
        <header className="intro">
            <h1>Hello, my name is
                <span className="bold-text">Faith</span></h1>
            <img className="image"src={myImage} alt="portrait of faith" />
        </header>
    )
}