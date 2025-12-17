import React, { useEffect, useState } from 'react';
import { getBoxes } from '../api/methods';
import MenuCard from '../components/MenuCard';

/**
 * Page des menus sans California Saumon Avocat
 * Affiche les menus ne contenant pas l'aliment "California Saumon Avocat"
 */
function SansCalifornia() {
    const [boxes, setBoxes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getBoxes();
                // Filtrer les menus qui ne contiennent PAS "California Saumon Avocat"
                const filtered = data.filter(menu =>
                    !menu.aliments.some(aliment =>
                        aliment.nom === "California Saumon Avocat"
                    )
                );
                setBoxes(filtered);
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
                {/* Header */}
                <div className="mb-12 text-center fade-in">
                    <div className="inline-block gradient-purple text-white px-6 py-2 rounded-full">
                        <span className="font-semibold">Sélection Alternative</span>
                    </div>
                </div>

                {/* Menus Grid */}
                {boxes.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🍱</div>
                        <p className="text-gray-600 text-lg">
                            Tous nos menus contiennent du California Saumon Avocat
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                        {boxes.map((box) => (
                            <MenuCard key={box.id} menu={box} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default SansCalifornia;
