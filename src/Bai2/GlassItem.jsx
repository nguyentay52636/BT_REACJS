import React from 'react';

export default function GlassItem({ glass, onSelect, selectedGlass }) {
  const { id, url, name } = glass;
  const handleRenderSelected = () => {
    if (!selectedGlass) return;
    return selectedGlass.id === id ? 'selectedGlass' : '';
  };
  return (
    <div className={handleRenderSelected()}>
      <img
        style={{ cursor: 'pointer' }}
        src={url}
        alt={name}
        height={60}
        onClick={() => onSelect(glass)}
      />
    </div>
  );
}