'use client'

import Image from "next/image";
import styles from './style.module.css'
import { useVideoCall } from "lib/videoCall/useVideoCall";
import { Center, Heading, Splitter } from "@chakra-ui/react";
 
type Params = Promise<{ slug: string }>;

export default function Session({params}: {params: Params}) {
    const { Component, join, leave } = useVideoCall();
    // const { slug } = await params;
    return (
        <>
            <Heading>Welcome</Heading>
            <Splitter.Root
                panels={[{ id: "videocall" }, { id: "b" }]}
                borderWidth="1px"
                minH="90vh"
                orientation="vertical"
            >
                 <Splitter.Panel id="videocall">
                    <Center boxSize="full" textStyle="2xl">
                        {Component && <Component roomName="Distyopoly"/>}
                    </Center>
                </Splitter.Panel>
                <Splitter.ResizeTrigger id="videocall:b" />
                <Splitter.Panel id="b">
                    <Center boxSize="full" textStyle="2xl">
                    Game State
                    </Center>
                </Splitter.Panel>

            </Splitter.Root>
        </>);
}
