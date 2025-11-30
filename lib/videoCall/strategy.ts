// lib/videoCall/strategy.ts
import { VideoCallProps } from "./types/VideoCallProps";

export interface VideoCallStrategy {
  init(): Promise<void>;
  join(roomId: string): Promise<void>;
  leave(): Promise<void>;
  getComponent(): React.FC<VideoCallProps>;
}
