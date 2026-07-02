export function ProngSettingIconCustom({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg 
        className="w-full h-full" 
        fill="none" 
        viewBox="0 0 27 25"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clipPath="url(#clip0_prong_setting)">
          <circle cx="13.5" cy="12.5" r="8" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="13.5" cy="12.5" r="8" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="20.5" cy="5.5" fill="white" r="2.5" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="20.5" cy="19.5" fill="white" r="2.5" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="6.5" cy="19.5" fill="white" r="2.5" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="6.5" cy="5.5" fill="white" r="2.5" stroke="currentColor" strokeWidth="1.2" />
        </g>
        <defs>
          <clipPath id="clip0_prong_setting">
            <rect fill="white" height="25" width="27" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}