function Group() {
  return (
    <div className="absolute h-[13px] left-0 top-px w-[32px]">
      <div className="absolute bottom-0 left-0 right-0 top-[-9.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 15">
          <g id="Group 100">
            <circle cx="4" cy="7.2" fill="var(--fill-0, white)" id="Ellipse 26" r="3.4" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" />
            <circle cx="12" cy="7.2" fill="var(--fill-0, white)" id="Ellipse 27" r="3.4" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" />
            <circle cx="20" cy="7.2" fill="var(--fill-0, white)" id="Ellipse 28" r="3.4" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" />
            <circle cx="28" cy="7.2" fill="var(--fill-0, white)" id="Ellipse 29" r="3.4" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" />
            <g id="Group 98">
              <line id="Line 1" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" x2="32" y1="3.6" y2="3.6" />
              <line id="Line 2" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" x2="32" y1="0.6" y2="0.6" />
            </g>
            <g id="Group 99">
              <line id="Line 1_2" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" x2="32" y1="13.6" y2="13.6" />
              <line id="Line 2_2" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" x2="32" y1="10.6" y2="10.6" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}