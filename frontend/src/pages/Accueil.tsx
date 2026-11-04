import './Accueil.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import {
  Code2,
  Palette,
  GitBranch,
  FileCode,
} from 'lucide-react';

const parcours = [
  {
    title: 'JavaScript débutant',
    description: 'Découvrez les variables, les conditions et les boucles.',
    icon: Code2,
    color: 'lavender',
    lessons: '10 leçons',
  },
  {
    title: 'HTML / CSS',
    description: 'Apprenez à créer et à mettre en forme des pages web.',
    icon: Palette,
    color: 'mint',
    lessons: '10 leçons',
  },
  {
    title: 'Git / GitHub',
    description: 'Découvrez les bases du versionnement de votre code.',
    icon: GitBranch,
    color: 'blue',
    lessons: '8 leçons',
  },
  {
    title: 'Python débutant',
    description: 'Faites vos premiers pas en programmation avec Python.',
    icon: FileCode,
    color: 'peach',
    lessons: '10 leçons',
  },
];

function App() {
  return (
    <div className="app">

      <Header />

      <main id="accueil">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">APPRENEZ À VOTRE RYTHME</span>

            <h1>
              Apprenez à coder,
              <span> pas à pas.</span>
            </h1>

            <p className="hero-description">
              Progressez en programmation grâce à des leçons courtes,
              des exercices interactifs et des défis motivants.
            </p>

            <a className="primary-button" href="#parcours">
              Commencer à apprendre
              <span aria-hidden="true">→</span>
            </a>

            <p className="hero-note">
              Apprenez à votre rythme, une étape après l’autre.
            </p>
          </div>

          <div className="hero-illustration" aria-hidden="true">
            <div className="floating-tag tag-top">console.log("Hello !")</div>

            <div className="code-card">
              <div className="code-card-header">
                <span></span><span></span><span></span>
                <small>premier-code.js</small>
              </div>
              <div className="code-lines">
                <p><span className="line-number">1</span> <span className="code-purple">let</span> prenom = <span className="code-green">"Marie"</span>;</p>
                <p><span className="line-number">2</span></p>
                <p><span className="line-number">3</span> console.log(prenom);</p>
              </div>
              <div className="code-output">
                <span>Résultat</span>
                <strong>Marie ✓</strong>
              </div>
            </div>

            <div className="floating-tag tag-bottom">+10 XP ✨</div>
          </div>
        </section>

        <section className="learning-section" id="parcours">
          <div className="section-heading">
            <div>
              <span className="eyebrow">VOTRE PROCHAINE ÉTAPE</span>
              <h2>Choisissez votre parcours</h2>
              <p>Commencez par un sujet qui vous intéresse.</p>
            </div>
          </div>

          <div className="path-grid">
            {parcours.map((path) => (
              <article className="path-card" key={path.title}>
                <div className={`path-icon ${path.color}`}>
                    <path.icon size={16} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <div className="path-card-footer">
                  <span className="lesson-count">
                    <span aria-hidden="true">▤</span> {path.lessons}
                  </span>
                  <a
                    className="card-link"
                    href="#parcours"
                    aria-label={`Découvrir le parcours ${path.title}`}
                  >
                    Découvrir <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;