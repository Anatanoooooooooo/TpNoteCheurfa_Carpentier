import React, { useEffect, useState } from 'react';
import { getBoxes } from '../api/methods';

/**
 * Page de calcul de prix
 * Affiche le prix total des menus avec moins de 13 pièces
 */
function Prix() {
    const [boxes, setBoxes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getBoxes();
                // Filtrer les menus avec moins de 13 pièces
                const filtered = data.filter(menu => menu.pieces < 13);
                setBoxes(filtered);

                // Calculer le prix total
                const total = filtered.reduce((sum, menu) => sum + menu.prix, 0);
                setTotalPrice(total);
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

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre */}
                <div className="mb-12 text-center">
                    <div className="inline-block gradient-pink text-white px-6 py-2 rounded-full">
                        <span className="font-semibold">Calcul de Prix</span>
                    </div>
                </div>

                {/* Simple Menus List */}
                {boxes.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">📦</div>
                        <p className="text-gray-600 text-lg">
                            Aucun menu avec moins de 13 pièces
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mb-12">
                            {boxes.map((box) => {
                                const imagePath = `/images/${box.image}.jpg`;
                                return (
                                    <div key={box.id} className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm mx-auto">
                                        {/* Image */}
                                        <div className="relative overflow-hidden h-56">
                                            <img
                                                className="w-full h-full object-cover"
                                                src={imagePath}
                                                alt={box.nom}
                                                onError={(e) => {
                                                    e.target.src = '/images/tasty-blend.jpg';
                                                }}
                                            />
                                            <div className="absolute top-3 right-3">
                                                <span className="badge badge-pink">
                                                    {box.pieces} pièces
                                                </span>
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {box.nom}
                                            </h3>

                                            {/* Saveurs */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {box.saveurs && box.saveurs.slice(0, 3).map((saveur, index) => (
                                                    <span
                                                        key={index}
                                                        className="badge badge-purple text-xs"
                                                    >
                                                        {saveur}
                                                    </span>
                                                ))}
                                                {box.saveurs && box.saveurs.length > 3 && (
                                                    <span className="badge badge-purple text-xs">
                                                        +{box.saveurs.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Prix */}
                                            <div className="text-3xl font-bold text-orange-600">
                                                {box.prix.toFixed(2)}€
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Total */}
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl p-8 text-white text-center max-w-md mx-auto">
                            <div className="text-lg opacity-90 mb-2">Prix Total</div>
                            <div className="text-5xl font-bold">
                                {totalPrice.toFixed(2)}€
                            </div>
                        </div>
                    </>
                )}


            </div>
        </div>
    );
}

export default Prix;
