import { useState } from 'react';
import data from './data.json';
import DetailsItem from './DetailsItem';
import ListItem from './ListItem';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default function ShoeShop() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectedProduct = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };
  const closeModal = () => {
    setSelectedProduct(null);
    setIsOpen(false);
  }
  return (
    <div>
      <h1 className="text-center">ShoeShop</h1>
      <ListItem product={data} onSelect={handleSelectedProduct} />
      <br />
      <DetailsItem onClose={closeModal} isOpen={isOpen} product={selectedProduct} />
    </div>
  );
}
