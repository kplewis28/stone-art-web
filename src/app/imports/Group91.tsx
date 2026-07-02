import svgPaths from "./svg-gacmppkesl";

function Group1() {
  return (
    <div className="absolute contents leading-[normal] left-[296.89px] text-[88px] text-neutral-100 text-nowrap top-[33px] whitespace-pre">
      <p className="absolute font-['Maison_Neue:Bold',sans-serif] left-[299.39px] not-italic top-[33px] tracking-[2.64px]">{`Stone Art `}</p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal left-[296.89px] top-[113.5px]">{`Precision GmbH `}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[180.291px] relative w-[178.907px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179 181">
        <g id="Group 16">
          <rect fill="var(--fill-0, #071E20)" height="169" id="Rectangle 11" width="169" x="7.47811e-05" y="0.000191892" />
          <path d={svgPaths.p4498e00} fill="var(--fill-0, #D9A441)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents h-[253.967px] left-0 top-0 w-[253.932px]">
      <div className="absolute flex h-[253.967px] items-center justify-center left-0 top-0 w-[253.932px]" style={{ "--transform-inner-width": "178.90625", "--transform-inner-height": "180.28125" } as React.CSSProperties}>
        <div className="flex-none rotate-[43.962deg]">
          <Group />
        </div>
      </div>
    </div>
  );
}

export default function Group3() {
  return (
    <div className="relative size-full">
      <Group1 />
      <Group2 />
    </div>
  );
}