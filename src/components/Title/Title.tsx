import Link from 'next/link';
import './title.css';

export default function Title() {
    return (
    <div className='title' >
        <h1>
            Welcome to my portfolio !
        </h1>
        <h2 className='titleash2'>
            I&apos;m a front-end dev.
        </h2>
        <Link  href="/pdf/CV_2023-12-29_Maxime_Capette"><button className="monCV">CV (fr)</button></Link>
        <Link  href="/html/resume.html"><button className="monCV">Resume</button></Link>
    </div>
    )}