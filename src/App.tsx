import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { Accueil } from './Accueil';
import { Contact } from './Contact';

const pages = [
  { name: 'Portfolio', href: '/portfolio/' },
  { name: 'Contact', href: '/portfolio/contact' },
]

export default function App() {

  return (
    <>
      <BrowserRouter>
        <nav className="mx-4 my-2">
          <div className="flex items-center relative justify-between">

            {/* Logo et nom du site */}
            <a href="/portfolio/">
              <img src={"logo.png"} alt="Logo du site, 'PC' en blanc et gras sur fond bleu foncé" width="50" />
            </a>

            <div className="flex items-center m-5 space-x-10">
              {pages.map((item) => (
                <NavLink key={item.name} to={item.href} end
                  className={({ isActive }) =>
                    isActive
                      ? "text-cyan-200 font-semibold"
                      : "hover:text-cyan-200"
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <a href=""> {/* à implémenter */}
                <img src="eng.png"
                  alt="changement de langue"
                  className="w-10" />
              </a>
            </div>
          </div>
        </nav>

        {/* Liens vers les pages */}
        <main>
          <Routes>
            <Route path="/portfolio/" element={<Accueil />} />
            <Route path="/portfolio/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>

      <footer className="m-5">
        <p>Réalisé par Caroline Promis© 2025. Tous droits réservés.</p>
      </footer>
    </>
  );
}