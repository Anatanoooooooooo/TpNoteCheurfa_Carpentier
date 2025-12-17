import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBoxes } from '../api/methods';

/**
 * Page des extrêmes
 * Affiche le menu le plus cher et le menu le moins cher
 */
function Extremes() {
    const [mostExpensive, setMostExpensive] = useState(null);
    const [leastExpensive, setLeastExpensive] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getBoxes();

                if (data.length > 0) {
                    // Trouver le menu le plus cher
                    const maxPriceMenu = data.reduce((max, menu) =>
                        menu.prix > max.prix ? menu : max
                    );
                    setMostExpensive(maxPriceMenu);

                    // Trouver le menu le moins cher
                    const minPriceMenu = data.reduce((min, menu) =>
                        menu.prix < min.prix ? menu : min
                    );
                    setLeastExpensive(minPriceMenu);
                }
            } catch (error) {
                console.error("Erreur:", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="spinner"></div>
            </div>
        );
    }

    const MenuCard = ({ menu, type }) => {
        const imagePath = `/images/${menu.image}.jpg`;
        const isExpensive = type === 'expensive';

        return (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden card-hover fade-in">
                {/* Badge */}
                <div className={`${isExpensive ? 'gradient-pink' : 'gradient-purple'} text-white py-4 px-6 text-center`}>
                    <div className="text-sm font-semibold uppercase tracking-wide">
                        {isExpensive ? 'Menu le Plus Cher' : 'Menu le Moins Cher'}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 p-8">
                    {/* Image */}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={imagePath}
                            alt={menu.nom}
                            className="w-full h-64 object-cover"
                            onError={(e) => {
                                e.target.src = '/images/tasty-blend.jpg';
                            }}
                        />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                {menu.nom}
                            </h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                                    <span className="text-gray-600 font-medium">Prix</span>
                                    <span className={`text-3xl font-bold ${isExpensive ? 'text-orange-600' : 'text-amber-600'}`}>
                                        {menu.prix.toFixed(2)}€
                                    </span>
                                </div>

                                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                                    <span className="text-gray-600 font-medium">Pièces</span>
                                    <span className="text-2xl font-bold text-gray-900">
                                        {menu.pieces}
                                    </span>
                                </div>


                            </div>

                            {/* Saveurs */}
                            <div className="mb-4">
                                <div className="text-sm font-semibold text-gray-700 mb-2">Saveurs:</div>
                                <div className="flex flex-wrap gap-2">
                                    {menu.saveurs.map((saveur, index) => (
                                        <span
                                            key={index}
                                            className={`badge ${isExpensive ? 'badge-pink' : 'badge-purple'}`}
                                        >
                                            {saveur}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            to={`/menu/${menu.id}`}
                            className="btn-primary w-full text-center"
                        >
                            Voir les détails
                        </Link>
                    </div>
                </div>


            </div>
        );
    };

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Badge */}
                <div className="mb-12 text-center">
                    <div className="inline-block gradient-pink text-white px-6 py-2 rounded-full">
                        <span className="font-semibold">Comparaison</span>
                    </div>
                </div>

                {/* Menu Cards */}
                <div className="space-y-12">
                    {mostExpensive && (
                        <MenuCard menu={mostExpensive} type="expensive" />
                    )}

                    {leastExpensive && (
                        <MenuCard menu={leastExpensive} type="cheap" />
                    )}
                </div>


            </div>
        </div>
    );
}

export default Extremes;
