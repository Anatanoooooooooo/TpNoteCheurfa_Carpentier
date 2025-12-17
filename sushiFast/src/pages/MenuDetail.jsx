import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBoxes } from '../api/methods';

/**
 * Page de détails d'un menu
 * Affiche les informations complètes d'un menu spécifique
 * Cette page récupère l'ID du menu depuis l'URL et affiche toutes ses informations
 */
function MenuDetail() {
    // Récupère l'ID du menu depuis les paramètres de l'URL (ex: /menu/1 -> id = "1")
    const { id } = useParams();

    // État pour stocker les données du menu sélectionné
    const [menu, setMenu] = useState(null);

    // État pour gérer l'affichage du chargement
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMenu() {
            try {
                const data = await getBoxes();

                // Cherche le menu correspondant à l'ID (convertit l'ID en nombre)
                const foundMenu = data.find(m => m.id === parseInt(id));
                setMenu(foundMenu);
            } catch (error) {
                console.error("Erreur:", error);
            } finally {
                // Dans tous les cas, arrête l'affichage du chargement
                setLoading(false);
            }
        }

        // Appelle la fonction de chargement
        loadMenu();
    }, [id]); // Se ré-exécute si l'ID change

    // Affichage pendant le chargement
    // Si les données sont en cours de chargement, affiche un spinner
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="spinner"></div>
            </div>
        );
    }

    // Affichage si le menu n'existe pas
    // Si aucun menu n'a été trouvé avec cet ID, affiche un message d'erreur
    if (!menu) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">😕</div>
                    <h2 className="text-2xl font-bold mb-4">Menu introuvable</h2>
                    <Link to="/" className="btn-primary">
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        );
    }

    // Construit le chemin vers l'image du menu (ex: /images/tasty-blend.jpg)
    const imagePath = `/images/${menu.image}.jpg`;

    // Affichage principal du menu
    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Fil d'Ariane (Breadcrumb) - Lien de retour */}
                <nav className="mb-8 fade-in">
                    <Link to="/" className="text-pink-600 hover:text-pink-700 font-medium">
                        ← Retour aux menus
                    </Link>
                </nav>

                {/* Grille responsive : 1 colonne sur mobile, 2 colonnes sur grand écran */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fade-in">

                    {/* Section gauche : Image du menu */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={imagePath}
                            alt={menu.nom}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                // Si l'image ne charge pas, utilise une image par défaut
                                e.target.src = '/images/tasty-blend.jpg';
                            }}
                        />
                    </div>

                    {/* Section droite : Informations du menu */}
                    <div>
                        {/* En-tête : Nom et Prix */}
                        <div className="mb-6">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                {menu.nom}
                            </h1>
                            <div className="flex items-center gap-4 mb-4">
                                {/* Badge affichant le nombre de pièces */}
                                <span className="badge badge-pink text-lg px-4 py-2">
                                    {menu.pieces} pièces
                                </span>
                                {/* Prix du menu avec 2 décimales */}
                                <span className="text-4xl font-bold text-orange-600">
                                    {menu.prix.toFixed(2)}€
                                </span>
                            </div>
                        </div>

                        {/* Section saveurs */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Saveurs
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {/* Boucle sur toutes les saveurs du menu */}
                                {menu.saveurs.map((saveur, index) => (
                                    <span
                                        key={index}
                                        className="badge badge-purple text-base px-4 py-2"
                                    >
                                        {saveur}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Section composition */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Composition
                            </h2>
                            {/* Tableau des aliments avec en-tête coloré */}
                            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                                <table className="w-full">
                                    <thead className="gradient-pink text-white">
                                        <tr>
                                            <th className="px-6 py-3 text-left font-semibold">
                                                Aliment
                                            </th>
                                            <th className="px-6 py-3 text-right font-semibold">
                                                Quantité
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {/* Boucle sur tous les aliments du menu */}
                                        {menu.aliments.map((aliment, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-pink-50 transition-colors"
                                            >
                                                <td className="px-6 py-4 text-gray-900">
                                                    {aliment.nom}
                                                </td>
                                                <td className="px-6 py-4 text-right font-semibold text-pink-600">
                                                    {aliment.quantite}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuDetail;
