import { AbsoluteFill, Sequence } from 'remotion';
import { Code } from './Code';
import { PreviewPanel } from './PreviewPanel';
import type { TutorialStep } from './steps';

export default function Video({ steps }: { steps: TutorialStep[] }) {
  let cumulative = 0;

  return (
    <AbsoluteFill className="flex">
      {/* Left Panel: Code (70% width) */}
      <div className="w-[70%] overflow-auto bg-[#1e1e1e] p-6">
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

      {/* Right Panel: Preview (30% width)  */}
      <div className="flex w-[30%] items-center justify-center bg-gray-900 p-6">
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
