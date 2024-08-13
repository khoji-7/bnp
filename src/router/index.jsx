// router/index.js
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/index.jsx';
import AboutPage from '../pages/About/index.jsx';
import ContactPage from '../pages/Contact/index.jsx';
import Collection from '../pages/Collection/index.jsx';
import News from '../pages/news';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/collection" element={<Collection/>}/>
      <Route path="/news" element={<News/>}/>

    </Routes>
  );
};

export default AppRouter;
