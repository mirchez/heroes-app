import { createRoot } from 'react-dom/client';
import './Styles.css';
import { HeroesApp } from './HeroesApp';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <HeroesApp/>
    </BrowserRouter>
    
)

