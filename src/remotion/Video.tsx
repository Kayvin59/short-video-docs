import { AbsoluteFill, Sequence } from 'remotion';
import { Code } from './Code';
import { PreviewPanel } from './PreviewPanel';
import { TutorialStep } from './steps';


export default function Video({ steps }: { steps: TutorialStep[] }) {
  let cumulative = 0;

  return (
    <AbsoluteFill className="flex">
      {/* Left Panel: Code (70% width) */}
      <div className="w-[70%] bg-[#1e1e1e] p-6 overflow-auto">
        {steps.map((step, index) => {
          const from = cumulative;
          cumulative += step.duration;
          return (
            <Sequence
              key={index}
              from={from}
              durationInFrames={step.duration}
              name={step.title}
            >
              <Code code={step.code} />
            </Sequence>
          );
        })}
      </div>
      
      {/* Right Panel: Preview (30% width) */}
      <div className="w-[30%] bg-gray-900 p-6 flex items-center justify-center">
        {steps.map((step, index) => {
          const from = rightCumulative;
          rightCumulative += step.duration;
          return (
            <Sequence
              key={index}
              from={from}
              durationInFrames={step.duration}
              name={step.title}
            >
              <PreviewPanel stepIndex={index} />
            </Sequence>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}
