import { useId } from "react";

export type EcosystemIconId = "university" | "support" | "counselling" | "admission";

interface EcosystemIconProps {
  id: EcosystemIconId;
  darkSurface?: boolean;
  className?: string;
}

export function EcosystemIcon({
  id,
  darkSurface = false,
  className = "h-6 w-6",
}: EcosystemIconProps) {
  const uid = useId().replace(/:/g, "");
  const gradMain = `eco-main-${uid}`;
  const gradSoft = `eco-soft-${uid}`;

  const primaryStart = darkSurface ? "#FFFFFF" : "#15966F";
  const primaryEnd = darkSurface ? "#A7F3D0" : "#073D32";
  const softFill = darkSurface ? "#6EE7B7" : "#15966F";
  const softOpacity = darkSurface ? 0.28 : 0.18;
  const accentStroke = darkSurface ? "#FFFFFF" : "#073D32";

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

      {id === "university" && (
        <>
          <path
            d="M16 5.2 5.5 10.5h21L16 5.2Z"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 13.5v9M13.5 13.5v9M18.5 13.5v9M23.5 13.5v9"
            stroke={`url(#${gradMain})`}
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <path
            d="M5.5 23.5h21M4.5 26.5h23"
            stroke={accentStroke}
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </>
      )}

      {id === "support" && (
        <>
          <path
            d="M7 17v-1.5a9 9 0 0 1 18 0V17"
            stroke={`url(#${gradMain})`}
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <rect
            x="5.5"
            y="15.5"
            width="4.2"
            height="7.5"
            rx="2.1"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
          />
          <rect
            x="22.3"
            y="15.5"
            width="4.2"
            height="7.5"
            rx="2.1"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
          />
          <path
            d="M24.5 23v1.2a2.8 2.8 0 0 1-2.8 2.8H17"
            stroke={accentStroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="16" cy="27" r="1.4" fill={`url(#${gradMain})`} />
        </>
      )}

      {id === "counselling" && (
        <>
          <circle
            cx="12.5"
            cy="11.5"
            r="3.8"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
          />
          <path
            d="M5.5 24.5c.4-3.7 3.3-6 7-6s6.6 2.3 7 6"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="21.8"
            cy="12.8"
            r="2.8"
            fill={`url(#${gradSoft})`}
            stroke={accentStroke}
            strokeWidth="1.9"
          />
          <path
            d="M21 18.8c2.8.4 5 2.3 5.5 5.2"
            stroke={accentStroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}

      {id === "admission" && (
        <>
          <rect
            x="6.5"
            y="5.5"
            width="16"
            height="21"
            rx="2.8"
            fill={`url(#${gradSoft})`}
            stroke={`url(#${gradMain})`}
            strokeWidth="2"
          />
          <path
            d="M10.5 11.5h8M10.5 16h5.5M10.5 20.5h4"
            stroke={accentStroke}
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <circle
            cx="22.5"
            cy="21.5"
            r="4.5"
            fill={darkSurface ? "#15966F" : "#073D32"}
            stroke="#FFFFFF"
            strokeWidth="1.8"
          />
          <path
            d="m20.5 21.5 1.3 1.4 2.7-2.8"
            stroke="#FFFFFF"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}
