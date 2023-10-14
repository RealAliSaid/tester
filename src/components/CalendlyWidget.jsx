"use client";
import { useEffect, useState, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { AiOutlineClose } from "react-icons/ai"
const CalendlyWidget = ({ showModal, setShowModal }) => {
    const modalRef = useRef(undefined);


    useEffect(() => {
        if (modalRef.current) {
            if (showModal) {
                disableBodyScroll(modalRef.current);
            } else {
                enableBodyScroll(modalRef.current);
            }
        }
        return () => {
            clearAllBodyScrollLocks();
        }
    }, [showModal])


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Load the Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;

        // Add the Calendly script to the document body
        document.body.appendChild(script);

        // Cleanup when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div ref={modalRef} className="relative bg-white dark:bg-white dark:text-black p-8 rounded-lg">
            <AiOutlineClose size={24} className="absolute top-4 right-4 z-20 cursor-pointer" onClick={() => setShowModal(false)} />
            <div className="calendly-inline-widget" data-url="https://calendly.com/awab-webdev/one-on-one-consultation" style={{ width: "75vw", maxWidth: "700px", height: "100%" }}></div>
        </div>
    );
};

export default CalendlyWidget;
