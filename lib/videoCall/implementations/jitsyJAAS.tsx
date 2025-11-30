// lib/videoCall/sdkA.ts
import { VideoCallStrategy } from "../strategy";
import dynamic from "next/dynamic";
import { VideoCallProps } from "../types/VideoCallProps";



const JaaSMeeting = dynamic(
  () =>
    import("@jitsi/react-sdk").then((module) => module.JaaSMeeting),
  { ssr: false }
);


function VideoCallComponent(props: VideoCallProps) {

  return (<JaaSMeeting
                appId = { "vpaas-magic-cookie-f466dd70740f420b8d25cfc96e6718da" }
                roomName = "PleaseUseAGoodRoomName"
                jwt = { props.jwt }
                configOverwrite = {{
                    disableLocalVideoFlip: true,
                    backgroundAlpha: 0.5
                }}
                interfaceConfigOverwrite = {{
                    VIDEO_LAYOUT_FIT: 'nocrop',
                    MOBILE_APP_PROMO: false,
                    TILE_VIEW_MAX_COLUMNS: 4
                }}
                getIFrameRef = { (iframeRef) => { iframeRef.style.height = '1000px'; } }
            />)
  
};

export class JitsyJAASStrategy implements VideoCallStrategy {
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
