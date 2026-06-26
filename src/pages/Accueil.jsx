import { LOGO, P_TAT } from "../assets.js";
import { ACTS, EVENTS, STATS, mailto } from "../data/index.js";
import Ermine from "../components/Ermine.jsx";
import Icon from "../components/Icon.jsx";

export default function Accueil({ go }) {
  return (
    <>
      <header className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${P_TAT})` }} />
        <div className="wrap hero-top">
          <div className="row">
            <span className="eyebrow" style={{ color: "#fff" }}>Breizh Cars Club</span>
            <div className="tagr">Event<br />Auto / Moto / Camion</div>
          </div>
        </div>
        <div className="wrap hero-in">
          <h1 className="reveal d1">Breizh<br />Cars Club</h1>
          <p className="subline reveal d2">
            La communauté event auto · moto · camion d'Ille-et-Vilaine.
            Rassemblements, stands, challenges et bonne ambiance — toute l'année en Bretagne.
          </p>
          <div className="hero-cta reveal d3">
            <button className="btn btn-w" onClick={() => go("agenda")}>Prochains events</button>
            <button className="btn btn-o" onClick={() => go("connexion", "signup")}>Devenir exposant</button>
          </div>
        </div>
      </header>

      <div className="gwenn" />

      <section className="section">
        <div className="wrap intro">
          <div>
            <span className="eyebrow"><Ermine /> Le club</span>
            <h2 className="h2" style={{ marginTop: 16 }}>On rassemble<br />ceux qui roulent</h2>
            <p>
              Le Breizh Cars Club organise des events autour de la passion auto, moto et camion en Bretagne.
              Stance, JDM, supercars, youngtimers, poids lourds customisés — peu importe ta monture,
              la place est sur le parking.
            </p>
            <p>
              Chaque event, c'est exposants à 2 €, entrée visiteurs et une vraie ambiance :
              musique, foodtrucks et challenges entre passionnés.
            </p>
            <div style={{ marginTop: 26 }}>
              <button className="btn btn-w" onClick={() => go("connexion", "signup")}>Rejoindre le club</button>
            </div>
          </div>
          <div className="badge-wrap">
            <img src={LOGO} alt="Logo Breizh Cars Club" />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow"><Ermine /> Sur place</span>
              <h2 className="h2" style={{ marginTop: 12 }}>Ce qu'on y trouve</h2>
            </div>
          </div>
          <div className="acts">
            {ACTS.map(([label, icon]) => (
              <div className="act" key={label}>
                <Icon n={icon} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow"><Ermine /> Agenda</span>
              <h2 className="h2" style={{ marginTop: 12 }}>Prochains events</h2>
            </div>
            <button className="btn btn-o" onClick={() => go("agenda")}>Tout l'agenda →</button>
          </div>
          <div className="ecards">
            {EVENTS.map((e, i) => (
              <article className="ecard" key={i}>
                <div className="pimg"><img src={e.img} alt={e.t} /></div>
                <div className="ebody">
                  <div className="edate">{e.j} {e.d} {e.m} · {e.h}</div>
                  <h4>{e.t}{e.sub && <em>{e.sub}</em>}</h4>
                  <div className="eplace">{e.ville}</div>
                  <div className="efoot">
                    <span className="price">{e.prix}</span>
                    <a className="btn btn-w" style={{ padding: "10px 16px" }} href={mailto(e)}>S'inscrire</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap stats-in">
          {STATS.map(([num, label], i) => (
            <div className="stat" key={i}>
              <div className="num">{num}</div>
              <div className="lab">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="join">
            <div className="gwenn v bands" />
            <div>
              <h3>Expose ta caisse au prochain event</h3>
              <p>Crée ton compte, ajoute ton véhicule et reçois les infos des prochains rassemblements en avant-première.</p>
            </div>
            <button className="btn btn-w" onClick={() => go("connexion", "signup")}>Créer mon compte</button>
          </div>
        </div>
      </section>
    </>
  );
}
