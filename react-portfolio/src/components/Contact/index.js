import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    const form = useRef()

    useEffect(() => {
        let isMounted = true;
        const timeoutId = setTimeout(() => {
            if (isMounted) {
                setLetterClass('text-animate-hover');
            }
        }, 3000);
        
        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, []);


    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('gmail', 'service_sevqp3n', form.current, 'z1LSA0xdCrRlH-pLJ')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
        )
    }


    return (
        <>
            <div className='contact contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','M','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious opportunities or 
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below from either.
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />

                                </li>

                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>

                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required/>
                                </li>

                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>

                                <li>
                                    <input type='submit' className='flat-button' value="Send"/>
                                </li>
                            </ul>

                        </form>


                    </div>
                </div>

                <div className='info-map'>
                    Abhishek Pawar,
                    <br/>
                    India,
                    <br/>
                    Aurangabad, Cidco, N-6
                    <br/>
                    <span>abhishekpawar1060@gmail.com</span>
                </div>

                <div className='map-wrap'>
                    <MapContainer center={[44.96366,19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[44.96366,19.61045]}>
                            <Popup>Abhishek lives here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
           </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact