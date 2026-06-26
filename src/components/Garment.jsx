// Silhouettes de vêtements en SVG, dans l'esprit monochrome du club.
// `type` : "tshirt" ou "hoodie". Les couleurs s'adaptent au coloris choisi.
export default function Garment({ type = "tshirt", fill = "#1b1b1f", stroke = "rgba(255,255,255,.5)" }) {
  const shell = { fill, stroke, strokeWidth: 3, strokeLinejoin: "round" };
  const detail = { fill: "none", stroke, strokeWidth: 2.5, strokeLinecap: "round" };

  if (type === "hoodie") {
    return (
      <svg viewBox="0 0 200 210" width="100%" height="100%" aria-hidden="true">
        <path {...shell} d="M70 52 C70 38 130 38 130 52 L150 46 L184 80 L160 106 L142 90 L142 178 L58 178 L58 90 L40 106 L16 80 L50 46 Z" />
        <path {...detail} d="M84 54 C92 74 108 74 116 54" />
        <path {...detail} d="M78 132 L122 132 L122 160" />
        <line x1="96" y1="56" x2="96" y2="76" {...detail} />
        <line x1="104" y1="56" x2="104" y2="76" {...detail} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" width="100%" height="100%" aria-hidden="true">
      <path {...shell} d="M64 38 L96 38 C96 52 104 52 104 38 L136 38 L176 70 L156 96 L138 82 L138 168 L62 168 L62 82 L44 96 L24 70 Z" />
    </svg>
  );
}
