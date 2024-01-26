import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faGitAlt, faGolang, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import {Loader} from 'react-loaders'
const About = () => {
    
    const [letterClass,setLetterClass] = useState('text-animate')

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

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm very ambitious front-end developer looking for a role in established IT company with
                    the opportunity to work with the latest technologies on challenging and diverse projects    
                 </p>
                <p>
                    I'm quietly confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time
                </p>
                <p>
                    If I need to define myself in one sentence that would be a tech-obsessed!!!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color='#28A4D9'/>
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faGolang} color='#28A4D9'/>
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='EC4D28'/>
                    </div>

                </div>

            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About