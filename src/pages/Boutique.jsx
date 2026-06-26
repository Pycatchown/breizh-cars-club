import { useState } from "react";
import { PRODUCTS, SIZES, MAIL, mailtoMerch } from "../data/index.js";
import Ermine from "../components/Ermine.jsx";
import Garment from "../components/Garment.jsx";

// Coloris du vêtement : un tissu noir ou blanc, avec le contour adapté.
const COLORS = {
  noir:  { fill: "#1b1b1f", stroke: "rgba(255,255,255,.55)" },
  blanc: { fill: "#ececef", stroke: "rgba(0,0,0,.45)" },
};

function ProductCard({ p }) {
  const [taille, setTaille] = useState("");
  const couleur = COLORS[p.colorKey] ?? COLORS.noir;

  return (
    <article className="pcard">
      <div className={"pvisual " + p.colorKey}>
        <Garment type={p.type} fill={couleur.fill} stroke={couleur.stroke} />
        <div className={"pprint " + p.colorKey}>
          <Ermine size={18} color={p.colorKey === "blanc" ? "#0A0A0B" : "#fff"} />
          <span>BCC</span>
        </div>
      </div>

      <div className="pbody">
        <div className="pcat">{p.cat}</div>
        <h4>{p.name}<em>{p.color}</em></h4>

        <div className="psizes" role="group" aria-label="Choix de la taille">
          {SIZES.map((s) => (
            <button
              key={s}
              className={"psize" + (taille === s ? " act" : "")}
              onClick={() => setTaille(s)}
              aria-pressed={taille === s}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="pfoot">
          <span className="price">{p.prix} €</span>
          <a className="btn btn-w" style={{ padding: "11px 18px" }} href={mailtoMerch(p, taille)}>
            Commander
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Boutique() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <span className="eyebrow"><Ermine /> Boutique</span>
          <h1 style={{ marginTop: 12 }}>Le merch</h1>
          <p>
            T-shirts et sweats Breizh Cars Club. Choisis ton modèle et ta taille,
            la commande part par mail — on te recontacte pour le règlement et le retrait sur un event.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="shop">
            {PRODUCTS.map((p, i) => <ProductCard key={i} p={p} />)}
          </div>

          <p className="lead" style={{ marginTop: 30 }}>
            Une question sur une taille ou un coloris ?{" "}
            <a href={`mailto:${MAIL}`} style={{ color: "#fff", fontWeight: 600 }}>{MAIL}</a>
          </p>
          <div className="mocknote" style={{ justifyContent: "flex-start", marginTop: 12 }}>
            <Ermine size={12} /> Maquette — paiement en ligne non disponible, commande par mail.
          </div>
        </div>
      </section>
    </>
  );
}
