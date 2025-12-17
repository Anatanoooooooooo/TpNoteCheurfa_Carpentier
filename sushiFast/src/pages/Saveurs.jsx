import React, { useEffect, useState } from 'react';
import { getBoxes } from '../api/methods';
import MenuCard from '../components/MenuCard';

/**
 * Page des menus avec saveurs spéciales
 * Affiche les menus contenant avocat ou coriandre
 */
function Saveurs() {
    const [boxes, setBoxes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getBoxes();
                // Filtrer les menus contenant "avocat" ou "coriandre" dans les saveurs
                const filtered = data.filter(menu =>
                    menu.saveurs.some(saveur =>
                        saveur.toLowerCase().includes('avocat') ||
                        saveur.toLowerCase().includes('coriandre')
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
                {/* Badge */}
                <div className="mb-12 text-center">
                    <div className="inline-block gradient-pink text-white px-6 py-2 rounded-full">
                        <span className="font-semibold">Saveurs Spéciales</span>
                    </div>
                </div>

                {/* Menus Grid */}
                {boxes.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <p className="text-gray-600 text-lg">
                            Aucun menu avec ces saveurs pour le moment
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

export default Saveurs;
