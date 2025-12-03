"use client"
// lib/videoCall/sdkA.ts
import { VideoCallStrategy } from "../../strategy";
import dynamic from "next/dynamic";
import { VideoCallProps } from "../../types/VideoCallProps";
// import { env } from "@/src/env/client";
import { get_jwt } from "./jwt-provider";


const JaaSMeeting = dynamic(
  () =>
    import("@jitsi/react-sdk").then((module) => module.JaaSMeeting),
  { ssr: false }
);


function VideoCallComponent(props: VideoCallProps) {
  const jwt = get_jwt();
  console.log("process.env at build time:", process.env);

  const jitsiJaasAppId = process.env.NEXT_PUBLIC_JITSI_JAAS_APP_ID;

  if (jitsiJaasAppId === undefined) {
    throw new Error("Environment variable NEXT_PUBLIC_JITSI_JAAS_APP_ID is missing");
  }

  return (<JaaSMeeting
                appId = { jitsiJaasAppId }
                roomName = { props.roomName }
                jwt = { jwt }
                configOverwrite = {{
                    disableLocalVideoFlip: true,
                    backgroundAlpha: 0.5
                }}
                interfaceConfigOverwrite = {{
                    VIDEO_LAYOUT_FIT: 'nocrop',
                    MOBILE_APP_PROMO: false,
                    TILE_VIEW_MAX_COLUMNS: 4
                }}
                getIFrameRef = { (iframeRef) => { iframeRef.style.height = '1000%'; iframeRef.style.width = '100%'; } }
            />)
  
};

export class JitsiJAASStrategy implements VideoCallStrategy {
  async init() {
    // await import("sdk-a"); // dynamic import for client-only SDK
  }

  async join(roomId: string) {
    console.log("Joining room in SDK A", roomId);
  }

  async leave() {
    console.log("Leaving room in SDK A");
  }

  getComponent() {
    return VideoCallComponent;
  }
}
