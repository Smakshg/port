import React, { Suspense, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ShowcaseGallery from './components/ShowcaseGallery';
import SaaSSkeleton from './components/skeletons/SaaSSkeleton';
import StudioSkeleton from './components/skeletons/StudioSkeleton';
import DashboardSkeleton from './components/skeletons/DashboardSkeleton';
import BusinessSkeleton from './components/skeletons/BusinessSkeleton';
import StoreSkeleton from './components/skeletons/StoreSkeleton';
import HelixSkeleton from './components/skeletons/HelixSkeleton';
import JewelrySkeleton from './components/skeletons/JewelrySkeleton';
import Contact from './components/Contact';

// Dynamically import the 3D Background to avoid initial blocking
const Background3D = React.lazy(() => import('./components/Background3D'));

function App() {
  const [view, setView] = useState('home'); 
  const templateSkeletons = ['saas', 'studio', 'dashboard', 'business', 'store', 'helix', 'jewelry'];
  const isTemplateSkeleton = templateSkeletons.includes(view);

  // Main pages are Home (default), About, Projects, Showcase Gallery, and Contact
  const isMainPage = !isTemplateSkeleton;


  // Handle back button / hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setView(hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top on every view change since all are now distinct pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);


  const renderContent = () => {
    switch (view) {
      case 'showcase':
        return <ShowcaseGallery />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'saas':
        return <SaaSSkeleton onBack={() => window.location.hash = 'showcase'} />;
      case 'studio':
        return <StudioSkeleton onBack={() => window.location.hash = 'showcase'} />;
      case 'dashboard':
        return <DashboardSkeleton onBack={() => window.location.hash = 'showcase'} />;
      case 'business':
        return <BusinessSkeleton onBack={() => window.location.hash = 'showcase'} />;
      case 'store':
        return <StoreSkeleton onBack={() => window.location.hash = 'showcase'} />;
      case 'helix':
        return <HelixSkeleton onBack={() => window.location.hash = 'showcase'} />;
      case 'jewelry':
        return <JewelrySkeleton onBack={() => window.location.hash = 'showcase'} />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Services />
          </>
        );
    }
  };


  return (
    <>
      {/* Background and Navbar for all Main Pages (Home, About, Projects, Gallery, Contact) */}
      {isMainPage ? (
        <>
          <Suspense fallback={<div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#050505', zIndex: -1 }} />}>
            <Background3D />
          </Suspense>
          <Navbar setView={(v) => window.location.hash = v} currentView={view} />
        </>
      ) : null}

      <main>
        {renderContent()}
      </main>

      {isMainPage && (
        <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)', marginTop: '50px' }}>
          <p>&copy; {new Date().getFullYear()} NEXUS. All rights reserved.</p>
        </footer>
      )}
    </>
  );
}

export default App;
