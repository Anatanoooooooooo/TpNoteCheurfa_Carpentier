import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Composant carte de menu
 * Affiche les informations d'un menu avec image, nom, prix et nombre de pièces
 * Utilisé dans la liste des menus sur la page d'accueil
 * @param {Object} menu - Les données du menu (id, nom, prix, pieces, saveurs, image, etc.)
 */
function MenuCard({ menu }) {
    // Construit le chemin vers l'image (ex: /images/tasty-blend.jpg)
    const imagePath = `/images/${menu.image}.jpg`;

    return (
        // Carte avec animation au survol (card-hover) et apparition en fondu (fade-in)
        <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover fade-in w-full max-w-sm mx-auto">

            {/* Image du menu */}
            <Link to={`/menu/${menu.id}`}>
                <div className="relative overflow-hidden h-56">
                    {/* Image avec effet de zoom au survol (hover:scale-110) */}
                    <img
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        src={imagePath}
                        alt={menu.nom}
                        onError={(e) => {
                            // Si l'image ne charge pas, utilise une image par défaut
                            e.target.src = '/images/tasty-blend.jpg';
                        }}
                    />
                    {/* Badge du nombre de pièces positionné en haut à droite */}
                    <div className="absolute top-3 right-3">
                        <span className="badge badge-pink">
                            {menu.pieces} pièces
                        </span>
                    </div>
                </div>
            </Link>

            {/* Informations du menu */}
            <div className="p-6">
                {/* Titre du menu avec lien cliquable */}
                <Link to={`/menu/${menu.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-pink-600 transition-colors">
                        {menu.nom}
                    </h3>
                </Link>

                {/* Liste des saveurs */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {/* Affiche les 3 premières saveurs */}
                    {menu.saveurs && menu.saveurs.slice(0, 3).map((saveur, index) => (
                        <span
                            key={index}
                            className="badge badge-purple text-xs"
                        >
                            {saveur}
                        </span>
                    ))}
                    {/* Si plus de 3 saveurs, affiche un badge "+X" */}
                    {menu.saveurs && menu.saveurs.length > 3 && (
                        <span className="badge badge-purple text-xs">
                            +{menu.saveurs.length - 3}
                        </span>
                    )}
                </div>

                {/* Prix et bouton */}
                <div className="flex items-center justify-between">
                    {/* Prix avec 2 décimales */}
                    <div className="text-3xl font-bold text-orange-600">
                        {menu.prix.toFixed(2)}€
                    </div>
                    {/* Bouton pour voir les détails */}
                    <Link
                        to={`/menu/${menu.id}`}
                        className="btn-primary text-sm px-4 py-2 inline-flex items-center gap-2"
                    >
                        Détails
                        {/* Note: Il manque un SVG ici dans le code original */}
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />

                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MenuCard;
