import React from 'react';

/**
 * Composant Footer
 * Affiche le pied de page de l'application
 * Contient le logo, le nom de l'application et les informations de copyright
 */
function Footer() {
  // Récupère l'année actuelle automatiquement pour le copyright
  const currentYear = new Date().getFullYear();

  return (
    // Footer avec bordure supérieure et ombre
    <footer className="bg-white shadow-lg mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Disposition flexible : colonne sur mobile, ligne sur desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Logo et nom de l'application */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            {/* Icône dans un carré avec dégradé */}
            <div className="w-8 h-8 gradient-pink rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">🍣</span>
            </div>
            {/* Nom de l'application */}
            <span className="text-lg font-bold text-orange-600">
              SushiFast
            </span>
          </div>

          {/* copyright */}
          <div className="text-center md:text-right">
            {/* Copyright avec année dynamique */}
            <p className="text-gray-600 text-sm">
              © {currentYear} SushiFast. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;