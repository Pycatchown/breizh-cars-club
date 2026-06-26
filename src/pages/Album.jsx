import { P_NIGHT, P_TAT, P_FEB } from "../assets.js";
import Ermine from "../components/Ermine.jsx";

const ITEMS = [
  { img: P_NIGHT, t: "Transports Frereux · By Night", n: "Servon-sur-Vilaine", size: "big" },
  { img: P_TAT,   t: "BCC × Gone Tattoo",             n: "Saint-Malo",         size: "tall" },
  { img: P_FEB,   t: "Transports Frereux Event",       n: "Servon-sur-Vilaine"               },
];

export default function Album() {
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <span className="eyebrow"><Ermine /> Galerie</span>
          <h1 style={{ marginTop: 12 }}>Album</h1>
          <p>
            Les affiches et les clichés de nos events. Survole une image pour la voir en couleur.
            Les photos des exposants sont ajoutées après chaque rassemblement.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="gal">
            {ITEMS.map((a, i) => (
              <figure className={"gtile" + (a.size ? " " + a.size : "")} key={i}>
                <img src={a.img} alt={a.t} />
                <div className="gv" />
                <figcaption className="gcap">
                  <h4>{a.t}</h4>
                  <span>{a.n}</span>
                </figcaption>
              </figure>
            ))}
            <div className="gtile gempty">
              <Ermine size={20} color="#fff" />
              <b>Tes photos ici</b>
              <small>Membres : déposez vos clichés après l'event.</small>
            </div>
            <div className="gtile gempty">
              <Ermine size={20} color="#fff" />
              <b>Album à venir</b>
              <small>Prochain rassemblement en préparation.</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
