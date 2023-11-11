import {useState} from 'react'
import data from './dataGlasses.json'
import './style.css'
import Header from './Header'
import GlassList from './GlassList'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Preview from './Preview';

export default function TryGlassesApp() {
  const [selectedGlass,setSelectedGlass] = useState(null);
  const handleSelectedGlass = (glass)=> {
    setSelectedGlass(glass);
  }
  return (
    <div className="container">
     <Header/>
     <Preview  glassPreview={selectedGlass}/>
     <GlassList data={data} onSelect={handleSelectedGlass} selectedGlass={selectedGlass}/>
     </div>
 
  )
}
