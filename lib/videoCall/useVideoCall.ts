import { useEffect, useState } from "react";
import { VideoCallStrategy } from "./strategy";
import { VideoCallProps } from "./types/VideoCallProps";
import { resolveVideoStrategy } from "./resolver";

export function useVideoCall() {
  const strategy = resolveVideoStrategy()
  const [Component, setComponent] = useState<React.FC<VideoCallProps> | null>(null);

  useEffect(() => {
    strategy.init().then(() => {
      setComponent(() => strategy.getComponent());
    });
  }, [strategy]);

  return {
    Component,
    join: strategy.join.bind(strategy),
    leave: strategy.leave.bind(strategy),
  };
}
