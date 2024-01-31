import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export default function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
        'service_qnt3ifa',
        'template_e548zla',
        refForm.current,
        '8SXvS5hy9AYqFZZZU'
    )
    .then(
        () => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send message, Please try again')
        }
    )
}

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                        I am interested in new opportunities and challenges - especially on ambitious or large projects. However, if you have any other requests or questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='Send'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    MohamadHosein Kardouni,
                    <br />
                    Tehran, Iran <br />
                    <span>h.kardouni@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[35.736785, 51.303316]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[35.736785, 51.303316]}>
                            <Popup>You can find me here. Let's grab a cup of coffee</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}