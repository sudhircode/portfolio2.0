import React, { useEffect, useRef } from 'react';
import bg from '../assets/download (1).png';
import style from '../Style.module.css';

export default function ImageRow() {
    const images = new Array(15).fill(bg);
    const observerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    alert(`Image ${entry.target.dataset.index} is in the center of the screen`);
                    observerRef.current.disconnect();
                }
            });
        }, options);

        const targetImages = document.querySelectorAll(`.${style.image}`);
        targetImages.forEach((img, index) => {
            img.dataset.index = index + 1; // Add data-index attribute to each image
            observerRef.current.observe(img);
        });

        return () => {
            observerRef.current.disconnect();
        };
    }, []);

    return (
        <div className={style.imageRow}>
            <div style={{ position: 'absolute', top: '-7vh' }}>
                {images.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`img-${index}`} className={style.image} />
                ))}
            </div>
            <div style={{ position: 'absolute', top: '29vh', left: '-170px' }}>
                {images.map((imgSrc, index) => (
                    <div key={index} className={style.imageWrapper}>
                        <img
                            src={imgSrc}
                            alt={`img-${index}`}
                            className={style.image}
                        />
                        <span>{index + 1}</span>
                    </div>
                ))}
            </div>
            <div style={{ position: 'absolute', top: '65vh' }}>
                {images.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`img-${index}`} className={style.image} />
                ))}
            </div>
        </div>
    );
}
