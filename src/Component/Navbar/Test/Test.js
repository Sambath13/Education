import './Test.css';
import React, { useRef } from 'react';

const Test = () => {
    const slider = useRef(null); 
    let tx=0;

    const slideforward = () => {
        
        if (tx>-50) {
            tx -= 25;  
        }
        slider.current.style.transform = `translateX(${tx}%)`
    };

    const slidebackward = () => {
       
        if (tx> 0) {
            tx += 25;  
        }
        slider.current.style.transform = `translateX(${tx}%)`
    };

    return (
        <div className='test'>
            <img src='image/next-icon.png' alt='' className='next-btn' onClick={slideforward} />
            <img src='image/back-icon.png' alt='' className='back-btn' onClick={slidebackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src='image/user-1.png' alt='' />
                                <div>
                                    <h3>Abi</h3>
                                    <span>Education, India</span>
                                </div>
                            </div>
                            <p>It seems you may be referring to Deezer, a popular music streaming service launched in 2007. 
                                Deezer offers access to a vast library of over 120 million tracks, along with podcasts and various 
                                playlists that cater to different moods and activities. It also has a feature called Flow, which curates 
                                personalized music recommendations based on your listening habits.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src='image/user-2.png' alt='' />
                                <div>
                                    <h3>Gokul</h3>
                                    <span>Education, India</span>
                                </div>
                            </div>
                            <p>It seems you may be referring to Deezer, a popular music streaming service launched in 2007. 
                                Deezer offers access to a vast library of over 120 million tracks, along with podcasts and various 
                                playlists that cater to different moods and activities. It also has a feature called Flow, which curates 
                                personalized music recommendations based on your listening habits.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src='image/user-3.png' alt='' />
                                <div>
                                    <h3>Moni</h3>
                                    <span>Education, India</span>
                                </div>
                            </div>
                            <p>It seems you may be referring to Deezer, a popular music streaming service launched in 2007. 
                                Deezer offers access to a vast library of over 120 million tracks, along with podcasts and various 
                                playlists that cater to different moods and activities. It also has a feature called Flow, which curates 
                                personalized music recommendations based on your listening habits.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src='image/user-4.png' alt='' />
                                <div>
                                    <h3>Aravind</h3>
                                    <span>Education, India</span>
                                </div>
                            </div>
                            <p>It seems you may be referring to Deezer, a popular music streaming service launched in 2007. 
                                Deezer offers access to a vast library of over 120 million tracks, along with podcasts and various 
                                playlists that cater to different moods and activities. It also has a feature called Flow, which curates 
                                personalized music recommendations based on your listening habits.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Test;
