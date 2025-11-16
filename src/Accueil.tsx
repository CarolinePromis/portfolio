import { useState } from "react";

export function Accueil() {
  const [filtre, setFiltre] = useState("tout");

  const projets = [
    { id: 1, categorie: "web", nom: "Site web créatif", img_ill: "SitePoissons.png" },
    { id: 2, categorie: "logi", nom: "Guerre de pixels", img_ill: "" },
    { id: 3, categorie: "tuto", nom: "Tutoriel React" },
    { id: 4, categorie: "web", nom: "E-commerce" },
  ];

  const projetsFiltres = filtre === "tout" ? projets : projets.filter(p => p.categorie === filtre);

  const boutonClasse = (valeur: string) =>
    `cursor-pointer transition-colors hover:text-emerald-200 ${filtre === valeur 
      ? "text-emerald-200 font-semibold" : ""
    }`;

  return (
    <>
      <div className="flex justify-evenly mx-5">
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

      <div className="flex flex-wrap justify-center">
        {projetsFiltres.map(p => (
          <div key={p.id} className="m-3 proj show flex flex-col items-center">
            {p.img_ill && <img src={p.img_ill} alt={p.nom} className="w-70 rounded-xl" />}
            <span>{p.nom}</span>
          </div>
        ))}
      </div>

      <p className="m-10 text-center">D'autres projets sont à venir !</p>
    </>
  );
}