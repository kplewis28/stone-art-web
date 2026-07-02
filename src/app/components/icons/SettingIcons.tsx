// Custom SVG icons for different stone setting types
// Minimalist Swiss design aesthetic

export function PaveSettingIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Multiple small stones in a row - Pavé style */}
      <ellipse cx="16" cy="20" rx="6" ry="8" fill="currentColor" opacity="0.9"/>
      <ellipse cx="32" cy="20" rx="6" ry="8" fill="currentColor" opacity="0.9"/>
      <ellipse cx="48" cy="20" rx="6" ry="8" fill="currentColor" opacity="0.9"/>
      <ellipse cx="64" cy="20" rx="6" ry="8" fill="currentColor" opacity="0.9"/>
      
      {/* Base line */}
      <line x1="4" y1="32" x2="76" y2="32" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function ProngSettingIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Center stone */}
      <polygon points="30,12 36,20 30,28 24,20" fill="currentColor" opacity="0.9"/>
      
      {/* Four prongs */}
      <line x1="20" y1="35" x2="24" y2="22" stroke="currentColor" strokeWidth="2"/>
      <line x1="40" y1="35" x2="36" y2="22" stroke="currentColor" strokeWidth="2"/>
      <line x1="20" y1="35" x2="24" y2="18" stroke="currentColor" strokeWidth="2"/>
      <line x1="40" y1="35" x2="36" y2="18" stroke="currentColor" strokeWidth="2"/>
      
      {/* Base */}
      <line x1="15" y1="42" x2="45" y2="42" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function ChannelSettingIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Channel walls */}
      <line x1="15" y1="10" x2="15" y2="38" stroke="currentColor" strokeWidth="2"/>
      <line x1="65" y1="10" x2="65" y2="38" stroke="currentColor" strokeWidth="2"/>
      
      {/* Stones in channel */}
      <rect x="22" y="16" width="10" height="10" transform="rotate(45 27 21)" fill="currentColor" opacity="0.85"/>
      <rect x="34" y="16" width="10" height="10" transform="rotate(45 39 21)" fill="currentColor" opacity="0.85"/>
      <rect x="46" y="16" width="10" height="10" transform="rotate(45 51 21)" fill="currentColor" opacity="0.85"/>
      
      {/* Base */}
      <line x1="10" y1="42" x2="70" y2="42" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function BezelSettingIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bezel rim (circle) */}
      <circle cx="30" cy="22" r="12" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      
      {/* Center stone */}
      <circle cx="30" cy="22" r="7" fill="currentColor" opacity="0.9"/>
      
      {/* Base/shank */}
      <path d="M 22 34 L 20 44 L 40 44 L 38 34" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}

export function CustomWorkIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Custom geometric pattern - diamond grid */}
      <path d="M 20 10 L 30 20 L 20 30 L 10 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M 40 10 L 50 20 L 40 30 L 30 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M 60 10 L 70 20 L 60 30 L 50 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      
      {/* Accent stones */}
      <circle cx="20" cy="20" r="3" fill="currentColor"/>
      <circle cx="40" cy="20" r="3" fill="currentColor"/>
      <circle cx="60" cy="20" r="3" fill="currentColor"/>
      
      {/* Base line */}
      <line x1="10" y1="42" x2="70" y2="42" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function QualityControlIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Magnifying glass */}
      <circle cx="30" cy="24" r="14" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <line x1="40" y1="34" x2="52" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      
      {/* Stone being inspected */}
      <polygon points="30,18 33,21 30,24 27,21" fill="currentColor" opacity="0.9"/>
      
      {/* Checkmark for quality */}
      <polyline points="56,18 60,22 68,14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
