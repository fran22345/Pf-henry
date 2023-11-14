// En FilterModal.tsx
import React, { useEffect } from 'react';
import FavoriteCard from './favorites';
import { useGetFavoritesQuery } from '@/redux/services/favorite';

interface FilterModalProps {
  onClose: () => void;
}



const FilterModal: React.FC<FilterModalProps> = ({ onClose }) => {
  return (
    <div className="fixed bottom-0 right-0 m-4">
      <div className="bg-white p-4 w-96 rounded-lg shadow-lg">
        <div>
          <h2 className="text-xl font-semibold">Propiedades Favoritas</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            Cerrar
          </button>
        </div>
        <div className="p-4">
          <FavoriteCard />
        </div>
      </div>
    </div>
  );
};

export default FilterModal;


