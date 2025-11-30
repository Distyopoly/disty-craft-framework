import { JitsyJAASStrategy } from "./implementations/jitsyJAAS";
import { VideoCallStrategy } from "./strategy";

export function resolveVideoStrategy(): VideoCallStrategy {
    return new JitsyJAASStrategy;
}