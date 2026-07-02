export function ChannelSettingIconCustom({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg 
        className="w-full h-full" 
        fill="none" 
        viewBox="0 0 32 15"
        preserveAspectRatio="xMidYMid meet"
      >
        <g clipPath="url(#clip0_channel)">
          <circle cx="4" cy="7.2" fill="white" r="3.4" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="12" cy="7.2" fill="white" r="3.4" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="20" cy="7.2" fill="white" r="3.4" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="28" cy="7.2" fill="white" r="3.4" stroke="currentColor" strokeWidth="1.2" />
          <g>
            <line stroke="currentColor" strokeWidth="1.2" x2="32" y1="3.6" y2="3.6" />
            <line stroke="currentColor" strokeWidth="1.2" x2="32" y1="0.6" y2="0.6" />
          </g>
          <g>
            <line stroke="currentColor" strokeWidth="1.2" x2="32" y1="13.6" y2="13.6" />
            <line stroke="currentColor" strokeWidth="1.2" x2="32" y1="10.6" y2="10.6" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_channel">
            <rect fill="white" height="15" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}