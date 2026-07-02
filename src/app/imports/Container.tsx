function Iframe() {
  return <div className="absolute h-[961.875px] left-0 top-[-36.94px] w-[1710px]" data-name="Iframe" />;
}

function Container() {
  return <div className="absolute bg-[rgba(7,30,32,0.6)] h-[888px] left-0 top-0 w-[1710px]" data-name="Container" />;
}

export default function Container1() {
  return (
    <div className="relative size-full" data-name="Container">
      <Iframe />
      <Container />
    </div>
  );
}