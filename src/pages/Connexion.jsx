import { LOGO } from "../assets.js";
import Ermine from "../components/Ermine.jsx";

export default function Connexion({ mode, setMode }) {
  const su = mode === "signup";

  return (
    <section className="auth">
      <aside className="auth-brand">
        <div className="gwenn v bands" />
        <div style={{ position: "relative", zIndex: 2 }}>
          <img className="logobig" src={LOGO} alt="Breizh Cars Club" />
          <div className="tagr" style={{ marginTop: 18 }}>Event · Auto / Moto / Camion</div>
        </div>
        <div>
          <span className="eyebrow" style={{ color: "#fff" }}><Ermine /> Espace membres</span>
          <h2 style={{ marginTop: 14 }}>{su ? "Rejoins\nle club" : "De retour\nau paddock"}</h2>
          <p className="sub">
            {su
              ? "Crée ton compte, ajoute ton véhicule et inscris-toi aux prochains events."
              : "Connecte-toi pour gérer ton garage et tes inscriptions."}
          </p>
          <ul className="feat">
            <li><Ermine size={14} /> Inscription exposant en un clic</li>
            <li><Ermine size={14} /> Infos des events en avant-première</li>
            <li><Ermine size={14} /> Galerie réservée aux membres</li>
          </ul>
        </div>
        <div className="tagr">Breizh Cars Club · Ille-et-Vilaine (35)</div>
      </aside>

      <div className="auth-form">
        <div className="fbox">
          <div className="toggle">
            <button className={!su ? "act" : ""} onClick={() => setMode("login")}>Se connecter</button>
            <button className={su ? "act" : ""} onClick={() => setMode("signup")}>Rejoindre</button>
          </div>
          <h3>{su ? "Créer un compte" : "Connexion"}</h3>
          <p className="hint">{su ? "Quelques infos et c'est parti." : "Content de te revoir au club."}</p>

          {su && (
            <div className="row2">
              <div className="field"><label>Prénom</label><input placeholder="Yann" /></div>
              <div className="field"><label>Nom</label><input placeholder="Le Bras" /></div>
            </div>
          )}

          <div className="field">
            <label>E-mail</label>
            <input type="email" placeholder="yann@exemple.bzh" />
          </div>
          <div className="field">
            <label>Mot de passe</label>
            <input type="password" placeholder="••••••••" />
          </div>

          {su && (
            <div className="row2">
              <div className="field">
                <label>Ton véhicule</label>
                <input placeholder="BMW M2 · Lambo · 240SX…" />
              </div>
              <div className="field">
                <label>Catégorie</label>
                <select defaultValue="">
                  <option value="" disabled>Choisir…</option>
                  <option>Auto</option>
                  <option>Moto</option>
                  <option>Camion</option>
                </select>
              </div>
            </div>
          )}

          {!su && (
            <div className="subrow">
              <label style={{ display: "flex", gap: 7, alignItems: "center" }}>
                <input type="checkbox" style={{ width: "auto" }} /> Se souvenir de moi
              </label>
              <a href="#">Mot de passe oublié ?</a>
            </div>
          )}
          {su && <div style={{ height: 6 }} />}

          <button className="btn btn-w full">
            {su ? "Rejoindre le Breizh Cars Club" : "Se connecter"}
          </button>
          <div className="mocknote">
            <Ermine size={12} /> Maquette — aucune donnée n'est envoyée.
          </div>
        </div>
      </div>
    </section>
  );
}
