"use client"

import React, {useState} from 'react';
import '$/home.css';
import Image from 'next/image'
import {Ipad} from "#/Ipad";
import Link from "next/link";
import {Page3} from "#/Page3";

function Page() {
    const [loop, setLoop] = useState(false);

    return (
        <main className={'main'}>
            <Image src={'/images/hero-bar.webp'} alt={'hero bar'} width={100000} height={100000}
                   className={'hero-bar'}/>
            <Ipad/>
            <div className={'welcome-box'}>
                <h1>Welcome to Code King</h1>
                <p>code king is a coding MCQ best platform to help you enhance your skills, expand your knowledge.</p>
                <Link className={'login-button'} href={'/login'} onMouseOver={() => setLoop(true)}
                      onMouseOut={() => setLoop(false)}>
                    <span>Create Account</span>
                    <lord-icon
                        src="https://cdn.lordicon.com/vduvxizq.json"
                        trigger={loop ? "loop" : ""}
                        style={{width: "20px", height: "20px"}}
                    >
                    </lord-icon>
                </Link>
            </div>
            <div className={'page2'}></div>
            <Page3/>
        </main>
    );
}

export default Page;