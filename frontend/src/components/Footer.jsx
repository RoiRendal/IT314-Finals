import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
            <h3 className="text-white text-xl font-bold mb-4">🦁 BigCatsWiki</h3>
            <p className="text-sm leading-relaxed">
                A static React application built with Vite and Tailwind CSS. 
                Dedicated to the preservation and education of the world's wild cats.
            </p>
        </div>

        {/* Quick Links */}
        <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                <li><Link to="/quiz" className="hover:text-orange-500 transition-colors">Quiz</Link></li>
                <li><Link to="/add" className="hover:text-orange-500 transition-colors">Add a Cat</Link></li>
            </ul>
        </div>

        {/* Credits */}
        <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Project Info</h4>
            <p className="text-sm">
                IT-314 Finals Project<br/>
                Built by Roi C. Rendal<br/>
                &copy; {currentYear} All rights reserved.
            </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
