import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-h.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logo'
import LogoH from '../../assets/images/outline.svg'
import Loader from 'react-loaders'

export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "osein".split("")
    const jobArray = "web developer".split("")

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>FullStack Developer / React, Next, C# Expert</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            {/* <Logo /> */}
            <img src={LogoH} className='logo-box' alt='developer'/>
        </div>
        <Loader type='pacman' />
        </>

    )
}