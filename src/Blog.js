import React from 'react'

export default function Blog(){
    return (
        <section className="my-blog">
        <h2>My most recent<span class="bold-text">article</span></h2>
            <h3>My story</h3>
            <p className="small-text">Written by <span class="name">F8 Makinde</span> on <time datetime="2022-08-10">September 17 2022</time></p>
            <p>The month of September marks the fourth (4th) month of my journey in tech and I am so exicited to be exposed to technologies that solve human problems. I ventured into frontend development and I have been able to learn HTML, CSS, JAVASCRIPT. One of my achievement during this 4 months of learning is building a portfolio website which is highly responsive. I look forward to learning more and making proper implementations of what I have learnt.Thank you for visiting my page.</p>
            <a href="https://ng.linkedin.com/in/faith-makinde-7556b3239" target="_blank" className="btn-links">See all my posts</a>
        </section>
    )
}