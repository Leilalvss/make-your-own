
import {
  Code2,
  Palette,
  GitBranch,
  FileCode,
} from 'lucide-react';

import StudentMainHeader from '../components/StudentMainHeader';
import Footer from '../components/Footer';

import './Parcours.css';

function Parcours() {
  return (
    <div className="parcours-layout">
      <StudentMainHeader />

      <main className="parcours-page">
        <div className="parcours-container">

          {/* Zone 2 - Liste des parcours de formation */}
          <section
            className="parcours-section"
            aria-labelledby="parcours-title"
          >
            <div className="parcours-heading">
              <h1 id="parcours-title">
                Découvrez nos parcours de formation
              </h1>

              <p>
                Choisissez votre prochain objectif d’apprentissage
              </p>
            </div>

            <div className="parcours-grid">

              {/* JavaScript */}
              <article className="formation-card">
                <div className="formation-icon javascript-icon">
                  <Code2 size={20} strokeWidth={1.8} />
                </div>

                <h2>JavaScript</h2>

                <p className="formation-description">
                  Apprenez les bases de JavaScript et découvrez
                  la programmation.
                </p>

                <a
                  href="/parcours/javascript"
                  className="formation-button"
                >
                  Voir le parcours
                </a>
              </article>

              {/* HTML / CSS */}
              <article className="formation-card">
                <div className="formation-icon html-icon">
                  <Palette size={20} strokeWidth={1.8} />
                </div>

                <h2>HTML/CSS</h2>

                <p className="formation-description">
                  Apprenez à créer et à styliser des pages web.
                </p>

                <a
                  href="/parcours/html-css"
                  className="formation-button"
                >
                  Voir le parcours
                </a>
              </article>

              {/* Git / GitHub */}
              <article className="formation-card">
                <div className="formation-icon git-icon">
                  <GitBranch size={20} strokeWidth={1.8} />
                </div>

                <h2>Git/GitHub</h2>

                <p className="formation-description">
                  Découvrez la gestion de versions et le travail
                  collaboratif.
                </p>

                <a
                  href="/parcours/git-github"
                  className="formation-button"
                >
                  Voir le parcours
                </a>
              </article>

              {/* Python */}
              <article className="formation-card">
                <div className="formation-icon python-icon">
                  <FileCode size={20} strokeWidth={1.8} />
                </div>

                <h2>Python</h2>

                <p className="formation-description">
                  Découvrez les bases de Python à travers
                  des exercices pratiques.
                </p>

                <a
                  href="/parcours/python"
                  className="formation-button"
                >
                  Voir le parcours
                </a>
              </article>

            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Parcours;
