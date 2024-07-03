import React, { useEffect, useRef, useState } from 'react';
import style from "../css component/About_my_work.module.css";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import vid4 from "../assets/vid4.mp4";

const videos = [vid1, vid2, vid3, vid4];

export default function About_my_work() {
    const videoRefs = useRef([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (index === currentVideoIndex) {
                video.style.opacity = 1;
                video.play();
            } else {
                video.style.opacity = 0;
            }
        });
    }, [currentVideoIndex]);

    return (
        <>
            <main className={style.main}>
                <div className={style.shit}>
                    <div>MAKING</div>
                    <div>GOOD</div>
                    <div>SHIT</div>
                    <div>SINCE 2019</div>
                    <h6>let's change the world</h6>
                </div>
                <div className={style.statergey}>
                    <div className={style.videoContainer}>
                        {videos.map((videoSrc, index) => (
                            <video
                                key={index}
                                ref={el => videoRefs.current[index] = el}
                                className={style.video}
                                src={videoSrc}
                                muted
                                preload="auto"
                                loop
                            ></video>
                        ))}
                    </div>
                    <div>
                        OFFERING CREATIVE-LED DESIGN AND DEVELOPMENT FOR AMBITIOUS BRANDS THAT WANT TO EXPAND AND CREATE
                    </div>
                </div>
                <div>
                    <h1 className={style.collebe}>LET'S COLLABORATE</h1>
                </div>
            </main>
        </>
    );
}
