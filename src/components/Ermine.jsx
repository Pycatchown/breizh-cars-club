export default function Ermine({ size = 15, color = "#fff" }) {
  return (
    <svg
      viewBox="0 0 24 28"
      width={size}
      height={(size / 24) * 28}
      aria-hidden="true"
      style={{ flex: "none" }}
    >
      <g fill={color}>
        <circle cx="12" cy="5" r="2.2" />
        <circle cx="6" cy="11" r="2.2" />
        <circle cx="18" cy="11" r="2.2" />
        <path d="M12 12 C13 18 16 20.5 19 26.5 L12 23.4 L5 26.5 C8 20.5 11 18 12 12 Z" />
      </g>
    </svg>
  );
}
