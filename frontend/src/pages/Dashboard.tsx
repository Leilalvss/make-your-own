import {
  Zap,
  Trophy,
  BookOpen,
  Code2,
  Palette,
  GitBranch,
  FileCode,
  ArrowRight,
} from 'lucide-react';

import StudentHeader from '../components/StudentHeader';
import Footer from '../components/Footer';

import './Dashboard.css';

function Dashboard() {
  const progress = 75;

  return (
    <>
      <StudentHeader />

      <main className="dashboard">
        <div className="dashboard-container">

          {/* Zone 2 - Message d'accueil */}
          <section className="welcome-section">
            <div>
              <h1>Bonjour, User !</h1>
              <p>
                Continue ton apprentissage et atteins tes objectifs.
              </p>
            </div>
          </section>

          {/* Zone 3 - Statistiques de progression */}
          <section
            className="dashboard-section"
            aria-labelledby="statistics-title"
          >
            <div className="section-heading">
              <h2 id="statistics-title">
                Statistiques de progression
              </h2>
            </div>

            <div className="statistics-grid">
              <article className="stat-card">
                <div className="stat-icon xp-icon">
                  <Zap size={22} />
                </div>
                <div>
                  <p className="stat-label">XP Total</p>
                  <p className="stat-value">375 XP</p>
                </div>
              </article>

              <article className="stat-card">
                <div className="stat-icon level-icon">
                  <Trophy size={22} />
                </div>
                <div>
                  <p className="stat-label">Niveau</p>
                  <p className="stat-value">Niveau 3</p>
                </div>
              </article>

              <article className="stat-card">
                <div className="stat-icon lessons-icon">
                  <BookOpen size={22} />
                </div>
                <div>
                  <p className="stat-label">Leçons terminées</p>
                  <p className="stat-value">5 leçons</p>
                </div>
              </article>
            </div>
          </section>

          {/* Zone 4 - Ma progression */}
          <section
            className="dashboard-section progress-section"
            aria-labelledby="progress-title"
          >
            <div className="section-heading">
              <h2 id="progress-title">Ma progression</h2>
            </div>

            <div className="progress-card">
              <div className="progress-info">
                <div>
                  <span className="progress-label">
                    Niveau actuel
                  </span>
                  <strong>Niveau 3</strong>
                </div>

                <div className="next-level">
                  <span className="progress-label">
                    Prochain niveau
                  </span>
                  <strong>Niveau 4</strong>
                </div>
              </div>

              <div className="progress-description">
                <span>Progression vers le niveau suivant</span>
                <strong>{progress}%</strong>
              </div>

              <div
                className="progress-track"
                role="progressbar"
                aria-label="Progression vers le niveau 4"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="progress-xp">
                375 / 500 XP
              </p>
            </div>
          </section>

          {/* Zone 5 - Mes parcours de formation */}
          <section
            className="dashboard-section paths-section"
            aria-labelledby="paths-title"
          >
            <div className="section-heading">
              <h2 id="paths-title">
                Mes parcours de formation
              </h2>
              <a href="/parcours" className="view-all-link">
                Voir tous les parcours
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="paths-grid">

              {/* JavaScript */}
              <article className="path-card">
                <div className="path-icon lavender">
                  <Code2 size={20} strokeWidth={1.8}/>
                </div>

                <div className="path-content">
                  <h3>JavaScript débutant</h3>
                  <p className="path-percentage">
                    Progression : 40 %
                  </p>

                  <div className="path-progress-track">
                    <div
                      className="path-progress-fill"
                      style={{ width: '40%' }}
                    />
                  </div>
                </div>

                <a
                  href="/parcours/javascript"
                  className="path-button"
                >
                  Continuer
                  <ArrowRight size={16} />
                </a>
              </article>

              {/* HTML / CSS */}
              <article className="path-card">
                <div className="path-icon mint">
                  <Palette size={20} strokeWidth={1.8} />
                </div>

                <div className="path-content">
                  <h3>HTML / CSS</h3>
                  <p className="path-percentage">
                    Progression : 20 %
                  </p>

                  <div className="path-progress-track">
                    <div
                      className="path-progress-fill"
                      style={{ width: '20%' }}
                    />
                  </div>
                </div>

                <a
                  href="/parcours/html-css"
                  className="path-button"
                >
                  Continuer
                  <ArrowRight size={16} />
                </a>
              </article>

              {/* Git / GitHub */}
              <article className="path-card">
                <div className="path-icon blue">
                  <GitBranch size={20} strokeWidth={1.8} />
                </div>

                <div className="path-content">
                  <h3>Git / GitHub</h3>
                  <p className="path-not-started">
                    Pas encore commencé
                  </p>
                </div>

                <a
                  href="/parcours/git-github"
                  className="path-button"
                >
                  Commencer
                  <ArrowRight size={16} />
                </a>
              </article>

              {/* Python */}
              <article className="path-card">
                <div className="path-icon peach">
                  <FileCode size={20} strokeWidth={1.8} />
                </div>

                <div className="path-content">
                  <h3>Python débutant</h3>
                  <p className="path-not-started">
                    Pas encore commencé
                  </p>
                </div>

                <a
                  href="/parcours/python"
                  className="path-button"
                >
                  Commencer
                  <ArrowRight size={16} />
                </a>
              </article>

            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;