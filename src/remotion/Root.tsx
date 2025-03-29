import { Composition } from 'remotion';
import Video from './Video';
import { STEPS } from './steps';
import './tailwind.css';

const totalDuration = STEPS.reduce((acc, step) => acc + step.duration, 1);

export default function RemotionRoot() {
  return (
    <Composition
      id="WalletTutorial"
      component={Video}
      defaultProps={{ steps: STEPS }}
      durationInFrames={totalDuration}
      fps={30} // e.g., 1800 frames for 60s at 30fps
      width={1280}
      height={720}
    />
  );
}
