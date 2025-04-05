import { AbsoluteFill, Sequence, Video, staticFile } from 'remotion';
import { Code } from './Code';
import { PreviewPanel } from './PreviewPanel';
import type { TutorialStep } from './steps';

export default function Tutorial({ steps }: { steps: TutorialStep[] }) {
  let cumulative = 0;

  return (
    <AbsoluteFill className="flex flex-row">
      {/* Left Panel: Code (50% width) */}
      <div className="w-1/2 overflow-auto">
        {steps.map((step) => {
          const from = cumulative;
          cumulative += step.duration;
          return (
            <Sequence
              key={step.title}
              from={from}
              durationInFrames={step.duration}
              name={step.title}
            >
              <Code code={step.code} />
            </Sequence>
          );
        })}
      </div>

      {/* Right Panel: Preview (50% width)  */}
      <div className="relative w-1/2">
        <Video
          src={staticFile('remotion-record1.mp4')}
          startFrom={0}
          endAt={450}
          className="w-full h-full object-cover"
        />
        {steps.map((step) => {
          const from = cumulative;
          cumulative += step.duration;
          const stepIndex = steps.findIndex((s) => s.title === step.title);
          return (
            <Sequence
              key={step.title}
              from={from}
              durationInFrames={step.duration}
              name={step.title}
            >
              <PreviewPanel stepIndex={stepIndex} />
            </Sequence>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}
