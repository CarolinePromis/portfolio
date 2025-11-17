export function Contact() {
  return (
    <div className="flex flex-col place-items-center">

      {/* photo */}
      <div className="relative w-1/2 xl:w-1/4 aspect-[7/8] mt-5">
        <img src="moi_ok.jpeg"
          alt="Mon délicieux faciès"
          className="absolute rounded-xl" />
        <img src="moi_fun.jpeg"
          alt="Mon délicieux faciès"
          className="absolute rounded-xl opacity-0 hover:opacity-100" />
      </div>

      <div className="flex px-10 flex-col md:flex-row text-center space-y-10 justify-evenly">

        {/* présentation */}
        <div className="space-y-3">
          <h1 className="font-bold text-2xl">Caroline Promis</h1>
          <p>En troisième année de BUT informatique, j'ai eu l'occasion de travailler sur plusieurs technologies.</p>
          <p>Vous trouverez davantage d'informations dans mon CV.</p>
          <p>Je vais vous présenter ici quelques-uns de mes projets qui, selon moi, méritent votre attention.</p>
          <p>Mes langages de prédilection sont TypeScript (React), Java et Python.</p>
          <a href="CV_FR.pdf" target="_blank">
            <button className="border font-bold py-2 px-3 rounded">Mon CV</button>
          </a>
        </div>

        {/* contacts */}
        <div className="md:pl-5 space-y-3">
          <h1 className="font-bold text-2xl">Contact</h1>

          {/* github */}
          <a href="https://github.com/CarolinePromis" target="_blank" className="flex items-center gap-3 text-slate-400">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 64 64" fill="currentColor" className="w-9">
                <path d="M32.029,8.345c-13.27,0 -24.029,10.759 -24.029,24.033c0,10.617 6.885,19.624 16.435,22.803c1.202,0.22 1.64,-0.522 1.64,-1.16c0,-0.569 -0.02,-2.081 -0.032,-4.086c-6.685,1.452 -8.095,-3.222 -8.095,-3.222c-1.093,-2.775 -2.669,-3.514 -2.669,-3.514c-2.182,-1.492 0.165,-1.462 0.165,-1.462c2.412,0.171 3.681,2.477 3.681,2.477c2.144,3.672 5.625,2.611 6.994,1.997c0.219,-1.553 0.838,-2.612 1.526,-3.213c-5.336,-0.606 -10.947,-2.669 -10.947,-11.877c0,-2.623 0.937,-4.769 2.474,-6.449c-0.247,-0.608 -1.072,-3.051 0.235,-6.36c0,0 2.018,-0.646 6.609,2.464c1.917,-0.533 3.973,-0.8 6.016,-0.809c2.041,0.009 4.097,0.276 6.017,0.809c4.588,-3.11 6.602,-2.464 6.602,-2.464c1.311,3.309 0.486,5.752 0.239,6.36c1.54,1.68 2.471,3.826 2.471,6.449c0,9.232 -5.62,11.263 -10.974,11.858c0.864,0.742 1.632,2.208 1.632,4.451c0,3.212 -0.029,5.804 -0.029,6.591c0,0.644 0.432,1.392 1.652,1.157c9.542,-3.185 16.421,-12.186 16.421,-22.8c0,-13.274 -10.76,-24.033 -24.034,-24.033" />
              </svg>
            </div>
            <span>GitHub</span>
          </a>

          {/* linkedin */}
          <a href="https://www.linkedin.com/in/caroline-promis/" target="_blank" className="flex items-center gap-3 text-sky-600">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 640 640" fill="currentColor" className="w-9">
                <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
              </svg>
            </div>
            <span>LinkedIn</span>
          </a>

          {/* mail */}
          <a href="mailto:caropromis250@gmail.com" className="flex items-center gap-3 text-amber-200">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 640 640" fill="currentColor" className="w-8">
                <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" />
              </svg>
            </div>
            <span>caropromis250@gmail.com</span>
          </a>

          {/* tel */}
          <a href="tel:06-23-47-99-59" className="flex items-center gap-3 text-red-300">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 640 640" fill="currentColor" className="w-8">
                <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
              </svg>
            </div>
            <span>06 23 47 99 59</span>
          </a>
        </div>
      </div>
    </div>
  )
}