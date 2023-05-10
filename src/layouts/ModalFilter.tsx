import { useState } from 'react';

import type PeriodType from '@/types/periodType';

import Button from './Button';
import Modal from './Modal';

interface ModalFilterProps {
  onFilterChange: (searchTerm: string, filterType: PeriodType) => void;
}

const ModalFilter: React.FC<ModalFilterProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<PeriodType>(1);
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value) as PeriodType;
    setFilterType(value);
  };

  const handleApplyFilter = () => {
    onFilterChange(searchTerm, filterType);
    setShowModal(false);
  };

  return (
    <div>
      <Button text="Filter" handlerClickButton={() => setShowModal(true)} />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="mb-4 text-lg font-semibold">Filter Modal</h2>

        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <select
            value={filterType}
            onChange={handleFilterChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value={1}>1 day</option>
            <option value={7}>7 days</option>
            <option value={30}>30 days</option>
          </select>
        </div>

        <div className="flex justify-end">
          <Button
            text="Filter"
            handlerClickButton={() => handleApplyFilter()}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalFilter;
