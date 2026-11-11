import {Composition} from 'remotion';
import {ElPliegueDelPapel} from './ElPliegueDelPapel';

export function RemotionRoot() {
  return (
    <Composition
      id="Video001"
      component={ElPliegueDelPapel}
      durationInFrames={120}
      fps={30}
      width={1280}
      height={720}
    />
  );
}
