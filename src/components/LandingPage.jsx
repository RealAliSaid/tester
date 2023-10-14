"use client";

import { useState } from "react";
import Image from 'next/image'
import Link from "next/link"

import { AiOutlineInstagram } from "react-icons/ai"
import { FaTwitterSquare, FaMailBulk } from 'react-icons/fa'
import CalendlyWidget from "./CalendlyWidget";

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <section className="grid rounded-xl bg-white dark:bg-white dark:text-black shadow-2xl p-3 px-12 max-w-3xl">
                <h1 className="font-semibold my-4 justify-self-center text-center text-4xl w-9/12">One-on-One Consultancy with John Doe</h1> {/* Replace this with the name */}
                <div className="flex flex-col-reverse items-center gap-3 my-8 md:flex-row">
                    <p className="max-w-md text-lg">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        <br /><br />
                        Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                        <br /><br />
                        Pellentesque commodo lacus at sodales sodales. Quisque.
                    </p>
                    <Image width={400} height={612} src="/owner.png" className="hidden my-8 md:block md:my-0" alt="Owner and Consultant" />
                </div>

                <button className="justify-self-center mb-8 bg-black dark:bg-black px-3 py-1 text-white dark:text-white text-lg font-bold w-fit rounded-full" onClick={() =>
                    setShowModal(true)
                }>
                    Book Now
                </button>
                {showModal &&
                    <div className="absolute inset-0 grid justify-center">
                        <div className="modal-container" onClick={() => setShowModal(false)}></div>
                        <CalendlyWidget showModal={showModal} setShowModal={setShowModal} />
                    </div>

                }
                <div className="flex gap-6 items-center">
                    <span>Contact me @</span>
                    <a href="https://www.instagram.com/">
                        <AiOutlineInstagram size={24} />
                    </a>
                    <a href="https://twitter.com/">
                        <FaTwitterSquare size={24} />
                    </a>
                    <a href="mailto:someone@gmail.com">
                        <FaMailBulk size={24} />
                    </a>
                </div>
            </section>
            <div className="svg-container">
                <Image width={100} height={86} src="/triangle.svg" alt="triangle background" />
                <Image width={100} height={86} src="/circle.svg" alt="triangle background" />
                <Image width={100} height={86} src="/square-fill.svg" alt="triangle background" />
                <Image width={100} height={86} src="/circle-fill.svg" alt="triangle background" />
                <Image width={100} height={86} src="/square.svg" alt="triangle background" />
            </div>
            <footer className="text-sm text-center">
                Add the Privacy policy and Terms of Service here,
                <Link className="underline font-semibold" href={"https://addthelinkhere.com"}>
                    I will add link element that navigates to them
                </Link>.......................
                <Link className="underline font-semibold" href={"https://addthelinkhere.com"}>
                    ofcourse change as you wish
                </Link>

            </footer>
        </>
    )
}

export default LandingPage