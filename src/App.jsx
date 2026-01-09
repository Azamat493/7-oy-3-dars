import { Routes, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

import HomeView from './views/HomeView';
import CatalogView from './views/CatalogView';
import CompanyView from './views/CompanyView';
import PartnersView from './views/PartnersView';
import NewsView from './views/NewsView';
import ContactsView from './views/ContactsView';

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/catalog" element={<CatalogView />} />
        <Route path="/about" element={<CompanyView />} />
        <Route path="/partners" element={<PartnersView />} />
        <Route path="/news" element={<NewsView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Route>
    </Routes>
  );
}