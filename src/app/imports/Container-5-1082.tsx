import svgPaths from "./svg-4a8efwg2p7";

function Container() {
  return <div className="opacity-90 size-[128px]" data-name="Container" />;
}

function Heading() {
  return (
    <div className="absolute h-[144px] left-[24px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)] top-[160px] w-[905.688px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[42.188px] left-[453px] not-italic text-[42.188px] text-center text-nowrap text-white top-[31.31px] tracking-[1.1268px] translate-x-[-50%] whitespace-pre">High-Precision Stone Setting</p>
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[42.188px] left-[453.26px] not-italic text-[42.188px] text-center text-nowrap text-white top-[84.5px] tracking-[1.1268px] translate-x-[-50%] whitespace-pre">for Luxury Jewelry Houses</p>
      <div className="absolute flex items-center justify-center left-[388.84px] size-[128px] top-[-90px]" style={{ "--transform-inner-width": "128", "--transform-inner-height": "128" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[160.8px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[56px] left-[370.44px] top-[336px] w-[212.805px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[92px] not-italic text-[16px] text-black text-center text-nowrap top-[15.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Request a Quote</p>
      <Icon />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[0.46%] contents left-0 right-[0.35%] top-0">
      <div className="absolute bottom-[0.46%] left-0 right-[0.35%] top-0" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 85">
          <path d={svgPaths.p1cdbe700} fill="var(--fill-0, #D9A441)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[85.016px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-col h-[85.195px] items-start relative w-[85.105px]" data-name="Group">
      <Icon1 />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="relative size-full" data-name="Container">
      <Heading />
      <Button />
      <div className="absolute flex items-center justify-center left-[430.84px] size-[120.421px] top-[37px]" style={{ "--transform-inner-width": "85.09375", "--transform-inner-height": "85.1875" } as React.CSSProperties}>
        <div className="flex-none rotate-[135deg]">
          <Group />
        </div>
      </div>
    </div>
  );
}