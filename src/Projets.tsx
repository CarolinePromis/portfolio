import { useState } from "react";
import projets from "./projets.json";

export function Accueil() {
  const [filtre, setFiltre] = useState("tout");

  const projetsFiltres = [...projets]
    // tri par année (descendant) puis par titre (ascendant)
    .sort((a, b) =>
      b.annee - a.annee || a.titre.localeCompare(b.titre)
    )
    .filter(p => filtre === "tout" || p.categorie === filtre);

  const boutonClasse = (valeur: string) =>
    `hover:text-emerald-200 ${filtre === valeur
      ? "text-emerald-200 font-semibold" : ""
    }`;

  return (
    <>
      <div className="flex justify-evenly mx-5 my-8">
        <button className={boutonClasse("tout")} onClick={() => setFiltre("tout")}>
          Tout
        </button>
        <button className={boutonClasse("web")} onClick={() => setFiltre("web")}>
          Web
        </button>
        <button className={boutonClasse("logi")} onClick={() => setFiltre("logi")}>
          Logiciel
        </button>
        <button className={boutonClasse("tuto")} onClick={() => setFiltre("tuto")}>
          Tutoriel
        </button>
      </div>

      <div className="columns-2 md:columns-3 xl:columns-5">
        {projetsFiltres.map(p => (
          <div key={p.id} className="mx-2 md:mx-5 my-5 break-inside-avoid text-center hover:opacity-75">
            <img src={p.img_cov} alt={p.titre} className="w-full rounded-xl border border-slate-500" />
            <span>{p.titre}</span>
          </div>
        ))}
      </div>

      <p className="m-10 text-center">D'autres projets sont à venir !</p>
    </>
  );
}