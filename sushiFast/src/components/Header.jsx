import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Composant Header avec navigation
 * Affiche le menu de navigation principal de l'application
 * Gère l'affichage responsive avec menu hamburger sur mobile
 */
function Header() {
    // État pour gérer l'ouverture/fermeture du menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        // Barre de navigation fixe en haut de l'écran (sticky top-0)
        <nav className="bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* ========================================
                        LOGO ET NOM DE L'APPLICATION
                        ======================================== */}
                    <Link to="/" className="flex items-center space-x-2">
                        {/* Icône emoji dans un carré avec dégradé */}
                        <div className="w-10 h-10 gradient-pink rounded-lg flex items-center justify-center">
                            <span className="text-white text-xl font-bold">🍣</span>
                        </div>
                        {/* Nom de l'application */}
                        <span className="text-2xl font-bold text-orange-500">
                            SushiFast
                        </span>
                    </Link>

                    {/* ========================================
                        NAVIGATION DESKTOP (cachée sur mobile)
                        ======================================== */}
                    {/* hidden md:flex = caché sur mobile, visible à partir de md (tablette) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/"
                            className="px-5 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-all font-medium"
                        >
                            Accueil
                        </Link>
                        <Link
                            to="/saveurs"
                            className="px-5 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-all font-medium"
                        >
                            Saveurs Spéciales
                        </Link>
                        <Link
                            to="/sans-california"
                            className="px-5 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-all font-medium"
                        >
                            Sans California
                        </Link>
                        <Link
                            to="/prix"
                            className="px-5 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-all font-medium"
                        >
                            Calcul Prix
                        </Link>
                        <Link
                            to="/extremes"
                            className="px-5 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-all font-medium"
                        >
                            Min/Max
                        </Link>
                    </div>

                    {/* ========================================
                        BOUTON MENU HAMBURGER (visible uniquement sur mobile)
                        ======================================== */}
                    {/* md:hidden = visible sur mobile, caché à partir de md (tablette) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)} // Inverse l'état ouvert/fermé
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 focus:outline-none"
                    >
                        {/* Icône SVG qui change selon l'état du menu */}
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {/* Si le menu est ouvert, affiche une croix (X) */}
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                // Sinon, affiche trois lignes horizontales (hamburger)
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* ========================================
                    MENU MOBILE DÉROULANT
                    ======================================== */}
                {/* Affiche le menu seulement si isMenuOpen est true (&&) */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 slide-in bg-gray-900">
                        <div className="flex flex-col space-y-2">
                            {/* Chaque lien ferme le menu au clic (onClick) */}
                            <Link
                                to="/"
                                className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-all font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Accueil
                            </Link>
                            <Link
                                to="/saveurs"
                                className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-all font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Saveurs Spéciales
                            </Link>
                            <Link
                                to="/sans-california"
                                className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-all font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Sans California
                            </Link>
                            <Link
                                to="/prix"
                                className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-all font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Calcul Prix
                            </Link>
                            <Link
                                to="/extremes"
                                className="px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-all font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Min/Max
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header;