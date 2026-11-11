import {Composition} from 'remotion';
import {PaperFold} from './PaperFold';

export function RemotionRoot() {
  return (
    <Composition
      id="Video001"
      component={PaperFold}
      durationInFrames={120}
      fps={30}
      width={1280}
      height={720}
    />
  );
}
