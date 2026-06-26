import { useState } from "react";
import { EVENTS, MAIL, mailto } from "../data/index.js";
import Ermine from "../components/Ermine.jsx";

const VILLES = ["Tous", "Servon-sur-Vilaine", "Saint-Malo"];

export default function Agenda() {
  const [filtre, setFiltre] = useState("Tous");
  const liste = EVENTS.filter((e) => filtre === "Tous" || e.ville === filtre);

  return (
    <>
      <section className="phead">
        <div className="wrap">
          <span className="eyebrow"><Ermine /> Saison 2026</span>
          <h1 style={{ marginTop: 12 }}>Agenda</h1>
          <p>
            Tous les rassemblements Breizh Cars Club.
            Inscription exposant par mail — réponds présent et viens poser ta caisse.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="chips">
            {VILLES.map((v) => (
              <button
                key={v}
                className={"chip" + (filtre === v ? " act" : "")}
                onClick={() => setFiltre(v)}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="agenda">
            {liste.map((e, i) => (
              <article className="arow" key={i}>
                <div className="thumb"><img src={e.img} alt={e.t} /></div>
                <div className="dd">
                  <div className="d">{e.d}</div>
                  <div className="m">{e.m}</div>
                  <div className="j">{e.j}</div>
                </div>
                <div>
                  <h4>{e.t}{e.sub && <em>{e.sub}</em>}</h4>
                  <div className="ameta">
                    <span>{e.lieu}</span>
                    <span>· {e.h}</span>
                    <span>· auto / moto / camion</span>
                  </div>
                </div>
                <div className="aright">
                  <span className="price">{e.prix}</span>
                  <a className="btn btn-w" style={{ padding: "11px 18px" }} href={mailto(e)}>
                    S'inscrire
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="lead" style={{ marginTop: 26 }}>
            Contact &amp; inscriptions :{" "}
            <a href={`mailto:${MAIL}`} style={{ color: "#fff", fontWeight: 600 }}>{MAIL}</a>
          </p>
        </div>
      </section>
    </>
  );
}
