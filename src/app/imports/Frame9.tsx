function Group() {
  return (
    <div className="absolute h-[25px] left-0 top-0 w-[23px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 25">
        <g id="Group 97">
          <circle cx="11.5" cy="12.5" id="Ellipse 21" r="10.9" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" />
          <circle cx="19" cy="4" fill="var(--fill-0, white)" id="Ellipse 22" r="3.4" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" />
          <circle cx="19" cy="21" fill="var(--fill-0, white)" id="Ellipse 23" r="3.4" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" />
          <circle cx="4" cy="21" fill="var(--fill-0, white)" id="Ellipse 24" r="3.4" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" />
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 25" r="3.4" stroke="var(--stroke-0, #D9A441)" strokeWidth="1.2" />
        </g>
      </svg>
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