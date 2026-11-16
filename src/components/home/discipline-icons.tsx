import { useId } from "react";

export type DisciplineIconId =
  | "medical"
  | "engineering"
  | "law"
  | "management"
  | "nursing"
  | "technology"
  | "professional"
  | "science"
  | "commerce"
  | "arts";

interface DisciplineIconProps {
  id: DisciplineIconId;
  featured?: boolean;
  className?: string;
}

export function DisciplineIcon({
  id,
  featured = false,
  className = "h-7 w-7",
}: DisciplineIconProps) {
  const uid = useId().replace(/:/g, "");
  const gradMain = `grad-main-${uid}`;
  const gradSoft = `grad-soft-${uid}`;

  // High-contrast palette: deep emerald on light cards, bright mint-white on featured dark card
  const primaryStart = featured ? "#FFFFFF" : "#15966F";
  const primaryEnd = featured ? "#A7F3D0" : "#073D32";
  const softFill = featured ? "#6EE7B7" : "#15966F";
  const softOpacity = featured ? 0.28 : 0.18;
  const accentStroke = featured ? "#FFFFFF" : "#073D32";

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradMain} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={primaryStart} />
          <stop offset="100%" stopColor={primaryEnd} />
        </linearGradient>
        <linearGradient id={gradSoft} x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={softFill} stopOpacity={softOpacity + 0.12} />
          <stop offset="100%" stopColor={softFill} stopOpacity={softOpacity} />
        </linearGradient>
      </defs>

      {id === "medical" && (
        <>
          <path
            d="M8.5 6.5V13a5.5 5.5 0 0 0 11 0V6.5"
            stroke={`url(#${gradMain})`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M7.5 6.5h2M18.5 6.5h2"
            stroke={accentStroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M14 18.5v2.75a5.25 5.25 0 0 0 10.5 0V17"
            stroke={`url(#${gradMain})`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="24.5" cy="14.5" r="3.2" fill={`url(#${gradSoft})`} stroke={`url(#${gradMain})`} strokeWidth="2" />
          <circle cx="24.5" cy="14.5" r="1.1" fill={`url(#${gradMain})`} />
        </>
      )}

      {id === "engineering" && (
        <>
          <path
            d="M14.2 5.2h3.6l.6 2.5a7.8 7.8 0 0 1 2.1.9l2.2-1.3 2.5 2.5-1.3 2.2c.4.7.7 1.4.9 2.1l2.5.6v3.6l-2.5.6a7.8 7.8 0 0 1-.9 2.1l1.3 2.2-2.5 2.5-2.2-1.3c-.7.4-1.4.7-2.1.9l-.6 2.5h-3.6l-.6-2.5a7.8 7.8 0 0 1-2.1-.9l-2.2 1.3-2.5-2.5 1.3-2.2a7.8 7.8 0 0 1-.9-2.1l-2.5-.6v-3.6l2.5-.6c.2-.7.5-1.4.9-2.1L6.8 9.8l2.5-2.5 2.2 1.3c.7-.4 1.4-.7 2.1-.9l.6-2.5Z"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="16" r="4.2" fill="#FFFFFF" fillOpacity={featured ? 0.15 : 0.85} stroke={`url(#${gradMain})`} strokeWidth="2" />
          <circle cx="16" cy="16" r="1.6" fill={`url(#${gradMain})`} />
        </>
      )}

      {id === "law" && (
        <>
          <path d="M16 5.5v20.5" stroke={`url(#${gradMain})`} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M10.5 26h11" stroke={`url(#${gradMain})`} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M7.5 9.5h17" stroke={`url(#${gradMain})`} strokeWidth="2.1" strokeLinecap="round" />
          <path
            d="M8.5 9.5 5.5 16.5h6L8.5 9.5Z"
            stroke={accentStroke}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M5.2 16.5a3.3 3.3 0 0 0 6.6 0H5.2Z"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M23.5 9.5 20.5 16.5h6l-3-7Z"
            stroke={accentStroke}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M20.2 16.5a3.3 3.3 0 0 0 6.6 0h-6.6Z"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </>
      )}

      {id === "management" && (
        <>
          <path
            d="M12 9.5V7.6A1.6 1.6 0 0 1 13.6 6h4.8A1.6 1.6 0 0 1 20 7.6v1.9"
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="5"
            y="9.5"
            width="22"
            height="16.5"
            rx="3.2"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
          />
          <path
            d="M5 14.5c3.2 1.8 6.9 2.7 11 2.7s7.8-.9 11-2.7"
            stroke={`url(#${gradMain})`}
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <rect x="14" y="15.2" width="4" height="3.2" rx="1" fill={`url(#${gradMain})`} />
        </>
      )}

      {id === "nursing" && (
        <>
          <path
            d="M16 26.2s-9.5-5.6-9.5-12.5A5.5 5.5 0 0 1 16 10.1a5.5 5.5 0 0 1 9.5 3.6c0 6.9-9.5 12.5-9.5 12.5Z"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M16 12.5v6M13 15.5h6"
            stroke={accentStroke}
            strokeWidth="2.3"
            strokeLinecap="round"
          />
        </>
      )}

      {id === "technology" && (
        <>
          <rect
            x="4.5"
            y="6.5"
            width="23"
            height="15.5"
            rx="2.8"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
          />
          <path
            d="M9.5 12.2h6.5M9.5 15.8h10.5"
            stroke={accentStroke}
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <circle cx="21.5" cy="12.2" r="1.2" fill={`url(#${gradMain})`} />
          <path
            d="M16 22v4M11 26h10"
            stroke={`url(#${gradMain})`}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </>
      )}

      {id === "professional" && (
        <>
          <path
            d="M16 6.5 4.5 12.2 16 17.8l11.5-5.6L16 6.5Z"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 14.6v5.7c0 1.8 3.1 3.7 7 3.7s7-1.9 7-3.7v-5.7"
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M26 13.2v7.2" stroke={accentStroke} strokeWidth="2" strokeLinecap="round" />
          <circle cx="26" cy="21.2" r="1.3" fill={`url(#${gradMain})`} />
        </>
      )}

      {id === "science" && (
        <>
          <path d="M12.2 6h7.6" stroke={`url(#${gradMain})`} strokeWidth="2.2" strokeLinecap="round" />
          <path
            d="M13.5 6v6.2L7.3 22.8A2.2 2.2 0 0 0 9.2 26h13.6a2.2 2.2 0 0 0 1.9-3.2L18.5 12.2V6"
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.6 19.2h12.8l2.1 3.6a1.8 1.8 0 0 1-1.6 2.7H9.1a1.8 1.8 0 0 1-1.6-2.7l2.1-3.6Z"
            fill={`url(#${gradSoft})`}
          />
          <circle cx="14.5" cy="21.5" r="1.2" fill={`url(#${gradMain})`} />
          <circle cx="18.2" cy="22.8" r="1" fill={`url(#${gradMain})`} />
        </>
      )}

      {id === "commerce" && (
        <>
          <rect
            x="6.5"
            y="5"
            width="19"
            height="22"
            rx="3"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
          />
          <rect
            x="10"
            y="8.5"
            width="12"
            height="4.5"
            rx="1.2"
            fill={`url(#${gradMain})`}
          />
          <circle cx="11.5" cy="16.8" r="1.25" fill={accentStroke} />
          <circle cx="16" cy="16.8" r="1.25" fill={accentStroke} />
          <circle cx="20.5" cy="16.8" r="1.25" fill={accentStroke} />
          <circle cx="11.5" cy="21.3" r="1.25" fill={accentStroke} />
          <circle cx="16" cy="21.3" r="1.25" fill={accentStroke} />
          <rect x="19.3" y="20.1" width="2.4" height="2.4" rx="0.8" fill={`url(#${gradMain})`} />
        </>
      )}

      {id === "arts" && (
        <>
          <path
            d="M16 8.5c-2.3-1.8-5.7-2.4-9.5-1.9v16.9c3.8-.5 7.2.1 9.5 1.9 2.3-1.8 5.7-2.4 9.5-1.9V6.6c-3.8-.5-7.2.1-9.5 1.9Z"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M16 8.5v16.9" stroke={`url(#${gradMain})`} strokeWidth="2" strokeLinecap="round" />
          <path
            d="M9.5 11.8h3.5M9.5 15.2h3.5M19 11.8h3.5M19 15.2h3.5"
            stroke={accentStroke}
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
