import React from 'react';
import GlassItem from './GlassItem';

export default function GlassList({ data, onSelect, selectedGlass }) {
  return (
    <div className="glass_list container">
      <div className="row text-center">
        {data.map((glass) => {
          return (
            <div className="col-md-2" key={glass.id}>
              <GlassItem
                glass={glass}
                onSelect={onSelect}
                selectedGlass={selectedGlass}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}