export default function Icon({ n, s = 30 }) {
  const p = {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (n) {
    case "ticket":
      return (
        <svg {...p}>
          <path d="M4 8h16v3a1.6 1.6 0 0 0 0 2v3H4v-3a1.6 1.6 0 0 0 0-2z" />
          <path d="M13 8v9" strokeDasharray="2 2" />
        </svg>
      );
    case "truck":
      return (
        <svg {...p}>
          <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="1.6" />
          <circle cx="17.5" cy="18" r="1.6" />
        </svg>
      );
    case "cup":
      return (
        <svg {...p}>
          <path d="M6 8h12l-1.2 11a1.5 1.5 0 0 1-1.5 1.3H8.7a1.5 1.5 0 0 1-1.5-1.3z" />
          <path d="M5 8h14" />
          <path d="M9 4l-.5 4M15 4l.5 4" />
        </svg>
      );
    case "disc":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 3.5v3M12 17.5v3" />
        </svg>
      );
    case "tent":
      return (
        <svg {...p}>
          <path d="M3 19h18M12 4 4 19M12 4l8 15M12 4v15M8.5 12 12 19l3.5-7" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...p}>
          <path d="M15 4a4 4 0 0 0-1.2 5.4L5 18.2 6.8 20l8.8-8.8A4 4 0 1 0 15 4z" />
        </svg>
      );
    case "tire":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3" />
        </svg>
      );
    default:
      return null;
  }
}
