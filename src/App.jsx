import { useState } from "react";
import { LOGO } from "./assets.js";
import { MAIL } from "./data/index.js";
import Accueil from "./pages/Accueil.jsx";
import Agenda from "./pages/Agenda.jsx";
import Album from "./pages/Album.jsx";
import Boutique from "./pages/Boutique.jsx";
import Connexion from "./pages/Connexion.jsx";
import "./styles/global.css";

const NAV_LINKS = [
  ["accueil", "Accueil"],
  ["agenda", "Agenda"],
  ["album", "Album"],
  ["boutique", "Boutique"],
];

export default function App() {
  const [page, setPage] = useState("accueil");
  const [authMode, setAuthMode] = useState("login");
  const [menuOuvert, setMenuOuvert] = useState(false);

  const go = (p, mode) => {
    if (mode) setAuthMode(mode);
    setPage(p);
    setMenuOuvert(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="bcc">
      <nav className="nav">
        <div className="wrap nav-in">
          <button className="brand" onClick={() => go("accueil")} aria-label="Accueil">
            <img src={LOGO} alt="BCC" />
            <span className="wm">
              <b>BREIZH CARS CLUB</b>
              <span>Event · Auto / Moto / Camion</span>
            </span>
          </button>

          <div className="nav-links">
            {NAV_LINKS.map(([key, label]) => (
              <button key={key} className={page === key ? "act" : ""} onClick={() => go(key)}>
                {label}
              </button>
            ))}
          </div>

          <div className="nav-cta">
            <button className="btn btn-o" style={{ padding: "10px 16px" }} onClick={() => go("connexion", "login")}>
              Connexion
            </button>
            <button className="btn btn-w" style={{ padding: "10px 16px" }} onClick={() => go("connexion", "signup")}>
              Adhérer
            </button>
          </div>

          <button className="burger" onClick={() => setMenuOuvert(!menuOuvert)} aria-label="Menu">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>

        <div className={"mob" + (menuOuvert ? " open" : "")}>
          {NAV_LINKS.map(([key, label]) => (
            <button key={key} onClick={() => go(key)}>{label}</button>
          ))}
          <button onClick={() => go("connexion", "login")}>Connexion</button>
          <button onClick={() => go("connexion", "signup")} style={{ color: "#fff" }}>Adhérer</button>
        </div>
      </nav>

      <main>
        {page === "accueil"   && <Accueil go={go} />}
        {page === "agenda"    && <Agenda />}
        {page === "album"     && <Album />}
        {page === "boutique"  && <Boutique />}
        {page === "connexion" && <Connexion mode={authMode} setMode={setAuthMode} />}
      </main>

      {page !== "connexion" && (
        <footer className="foot">
          <div className="gwenn" />
          <div className="wrap">
            <div className="foot-in">
              <div>
                <div className="brand">
                  <img src={LOGO} alt="BCC" style={{ borderRadius: "50%", border: "1px solid var(--line)" }} />
                  <span className="wm">
                    <b style={{ fontFamily: "var(--disp)", fontSize: 18, letterSpacing: ".05em" }}>
                      BREIZH CARS CLUB
                    </b>
                  </span>
                </div>
                <p>Event auto · moto · camion en Ille-et-Vilaine. Kenavo et à la prochaine.</p>
              </div>
              <div>
                <h5>Navigation</h5>
                <button onClick={() => go("agenda")}>Agenda</button>
                <button onClick={() => go("album")}>Album</button>
                <button onClick={() => go("boutique")}>Boutique</button>
                <button onClick={() => go("connexion", "signup")}>Adhérer</button>
              </div>
              <div>
                <h5>Contact</h5>
                <a href={`mailto:${MAIL}`}>{MAIL}</a>
                <span style={{ color: "var(--gris)", fontSize: 14 }}>Servon-sur-Vilaine · Saint-Malo</span>
              </div>
            </div>
            <div className="foot-bot">
              <small>© 2026 Breizh Cars Club</small>
              <small>Maquette — non officielle</small>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
