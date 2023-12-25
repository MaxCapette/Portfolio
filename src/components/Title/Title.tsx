import Link from 'next/link';
import './title.css';

export default function Title() {
    return (
    <div className='title' >
        <h1>
            Welcome to my portfolio !
        </h1>
        <h2>
            I&apos;m a front-end developper.
        </h2>
        <Link  href="/pdf/CV_2023.pdf"><button className="monCV">CV (fr)</button></Link>
        <Link  href="/html/resume.html"><button className="monCV">Resume</button></Link>
    </div>
    )}