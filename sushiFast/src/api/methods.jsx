/**
 * Récupère la liste des menus depuis le fichier JSON
 * @returns {Promise<Array>} Liste des menus
 */
export async function getBoxes() {
    const res = await fetch('/data/boxes.json');
    const data = await res.json();
    return data;
}