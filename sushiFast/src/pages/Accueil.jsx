import React, { useEffect, useState } from 'react';
import { getBoxes } from '../api/methods';
import MenuCard from '../components/MenuCard';

/**
 * Page d'accueil
 * Affiche tous les menus disponibles
 */
function Accueil() {
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await getBoxes();
        console.log("✅ Données chargées:", data);

        // Le JSON est un tableau direct
        if (Array.isArray(data)) {
          setBoxes(data);
        } else {
          console.error("Format inattendu:", data);
          setError("Format de données invalide");
        }
      } catch (error) {
        console.error("❌ Erreur:", error);
        setError("Impossible de charger les menus");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des menus...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oups !</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">

      {/* Menus Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Menus
          </h2>
          <p className="text-lg text-gray-600">
            Explorez notre collection complète de menus sushi
          </p>
        </div>

        {boxes.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍱</div>
            <p className="text-gray-600">Aucun menu disponible pour le moment</p>
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

export default Accueil;
