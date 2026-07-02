import svgPaths from "./svg-dpyvvzgyat";

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] ml-[60.18px] mt-[3.31px] not-italic place-items-start relative text-[18.954px] text-neutral-100 text-nowrap whitespace-pre">
      <p className="[grid-area:1_/_1] font-['Maison_Neue:Bold',sans-serif] ml-[0.54px] mt-0 relative tracking-[0.5686px]">{`Stone Art `}</p>
      <p className="[grid-area:1_/_1] font-['Maison_Neue:Light',sans-serif] ml-0 mt-[17.34px] relative">{`Precision GmbH `}</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <div className="[grid-area:1_/_1] h-[44.329px] ml-0 mt-0 relative w-[44.25px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <path d={svgPaths.p34f7780} fill="var(--fill-0, #D9A441)" id="Union" />
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[24px] relative shrink-0 w-[43.648px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[43.648px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[22.5px] not-italic text-[16px] text-center text-neutral-100 text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">About</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[62.102px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[62.102px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[31.5px] not-italic text-[16px] text-center text-neutral-100 text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Services</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50.305px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[50.305px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[25.5px] not-italic text-[16px] text-center text-neutral-100 text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Design</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[67.805px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[67.805px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[34.5px] not-italic text-[16px] text-center text-neutral-100 text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Workflow</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50.68px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[50.68px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[25px] not-italic text-[16px] text-center text-neutral-100 text-nowrap top-[-0.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Gallery</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 bg-black grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[53.5px] not-italic text-[16px] text-center text-nowrap text-white top-[7.5px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[40px] relative shrink-0 w-[540.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[40px] items-center relative w-[540.156px]">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="bg-[#071e20] relative size-full" data-name="Navbar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[75px] py-0 relative size-full">
          <Group1 />
          <Container />
        </div>
      </div>
    </div>
  );
}