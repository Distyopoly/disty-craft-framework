'use client'

import Image from "next/image";
import styles from './style.module.css'
import { useVideoCall } from "@/lib/videoCall/useVideoCall";
 
type Params = Promise<{ slug: string }>;

export default function Session({params}: {params: Params}) {
    const { Component, join, leave } = useVideoCall();
    const jwt = process.env.NEXT_PUBLIC_JITSY_JWT!;
    // const { slug } = await params;
    return (
        <>
            <h1>Welcome</h1>
            <div className={styles.video} >

                {Component && <Component jwt={jwt}/>}
            </div>
        </>);
}
