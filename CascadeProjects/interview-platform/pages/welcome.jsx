import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import OralInterview from '../components/OralInterview';
import TechnicalInterview from '../components/TechnicalInterview';
import ResultsReport from '../components/ResultsReport';

export default function Welcome() {
  const [section, setSection] = useState('hero');
  const router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) setUserName(user.displayName || user.email?.split('@')[0] || 'Utilisateur');
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <div className="font-sans bg-gray-50">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Poppins', sans-serif;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Timeline horizontale */
        .timeline-horizontal {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 60px auto;
          max-width: 900px;
        }
        
        .timeline-horizontal::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 10%;
          right: 10%;
          height: 4px;
          background: linear-gradient(90deg, #1e40af 0%, #3b82f6 100%);
          transform: translateY(-50%);
          z-index: 1;
        }
        
        .timeline-step {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .timeline-circle {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          border: 5px solid #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(30, 64, 175, 0.3);
          transition: all 0.3s ease;
          font-size: 24px;
          color: white;
        }
        
        .timeline-circle:hover {
          transform: scale(1.15);
          box-shadow: 0 12px 30px rgba(30, 64, 175, 0.5);
        }
        
        .timeline-content {
          position: absolute;
          width: 250px;
          text-align: center;
        }
        
        .timeline-content.top {
          bottom: 90px;
        }
        
        .timeline-content.bottom {
          top: 90px;
        }
        
        /* Glassy effect */
        .glassy {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Navbar - Texte simple uniquement */}
      <nav className="bg-white/95 backdrop-blur-sm p-8 text-gray-800 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold text-gray-900">
            Bonjour {userName}
          </div>
          <div className="flex items-center space-x-10 text-base font-medium text-gray-700">
            <span className="cursor-default">À propos</span>
            <span className="cursor-default">Entretien Oral</span>
            <span className="cursor-default">Entretien Technique</span>
            <span className="cursor-default">Rapports</span>
            <span className="cursor-default">Déconnexion</span>
          </div>
        </div>
      </nav>

      {/* Grand espace entre navbar et hero */}
      <div className="h-20"></div>

      {/* Hero Section */}
      {section === 'hero' && (
        <>
          <section
            className="min-h-screen relative flex flex-col items-center justify-center text-center text-white"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Flou très prononcé sur toute l'image */}
            <div className="absolute inset-0 backdrop-blur-[25px] bg-black/40"></div>
            
            {/* Paragraphe centré en grande police */}
            <div className="relative z-10 max-w-5xl px-8 animate-fade-in">
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                Simulez, évaluez et améliorez vos compétences pour atteindre vos objectifs professionnels avec notre plateforme d'entretiens.
              </p>
            </div>
          </section>

          {/* Section Objectifs - Grilles 3x2 avec effet glassy */}
          <section className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-bold text-center text-gray-900 mb-6 animate-fade-in">
                Nos Objectifs
              </h2>
              <p className="text-center text-gray-600 mb-20 text-xl max-w-3xl mx-auto animate-fade-in">
                Une plateforme conçue pour vous préparer efficacement aux entretiens
              </p>
              
              {/* Grilles horizontales 3x2 */}
              <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  { 
                    title: "Pratique immersive", 
                    desc: "Simulez des entretiens réalistes avec des scénarios variés", 
                    icon: "🎤",
                    gradient: "from-blue-500 to-blue-700"
                  },
                  { 
                    title: "Évaluation précise", 
                    desc: "Analysez vos performances avec des métriques détaillées", 
                    icon: "📊",
                    gradient: "from-indigo-500 to-indigo-700"
                  },
                  { 
                    title: "Recommandations IA", 
                    desc: "Recevez des conseils personnalisés par intelligence artificielle", 
                    icon: "🤖",
                    gradient: "from-purple-500 to-purple-700"
                  },
                  { 
                    title: "Confiance & aisance", 
                    desc: "Développez votre assurance en toute situation", 
                    icon: "🔥",
                    gradient: "from-blue-600 to-blue-800"
                  },
                  { 
                    title: "Accessibilité", 
                    desc: "Plateforme intuitive accessible à tous les niveaux", 
                    icon: "🌍",
                    gradient: "from-indigo-600 to-indigo-800"
                  },
                  { 
                    title: "Progression rapide", 
                    desc: "Améliorez-vous rapidement grâce à un suivi continu", 
                    icon: "📈",
                    gradient: "from-purple-600 to-purple-800"
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`glassy rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-fade-in bg-gradient-to-br ${item.gradient} group cursor-pointer`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section Comment ça se passe - Timeline horizontale */}
          <section className="py-24 px-8 bg-white">
            <h2 className="text-5xl font-bold mb-16 text-center text-gray-900 animate-fade-in">
              Comment ça fonctionne
            </h2>
            
            <div className="timeline-horizontal">
              {[
                { 
                  title: "Entretien Oral", 
                  icon: "🎙️", 
                  desc: "Simulations avec questions variées et évaluation vocale en temps réel",
                  position: "top"
                },
                { 
                  title: "Entretien Technique", 
                  icon: "💻", 
                  desc: "Pratiquez vos compétences techniques avec des questions adaptées à votre niveau",
                  position: "bottom"
                },
                { 
                  title: "Rapports Détaillés", 
                  icon: "📋", 
                  desc: "Rapports personnalisés pour analyser vos progrès et identifier vos axes d'amélioration",
                  position: "top"
                },
              ].map((item, idx) => (
                <div key={idx} className="timeline-step animate-fade-in" style={{ animationDelay: `${idx * 0.3}s` }}>
                  {/* Cercle */}
                  <div className="timeline-circle">
                    <span>{item.icon}</span>
                  </div>
                  
                  {/* Contenu décalé */}
                  <div className={`timeline-content ${item.position}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Sections Interviews / Reports */}
      {section === 'oral' && (
        <section className="min-h-screen p-12 bg-white/90">
          <OralInterview />
        </section>
      )}
      {section === 'technical' && (
        <section className="min-h-screen p-12 bg-white/90">
          <TechnicalInterview />
        </section>
      )}
      {section === 'report' && (
        <section className="min-h-screen p-12 bg-white/90">
          <ResultsReport />
        </section>
      )}
    </div>
  );
}
