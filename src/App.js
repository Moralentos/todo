import Header from './components/Header';
import CategoryPage from './pages/CategoryPage';
import NotesPage from './pages/NotesPage.jsx';
import { store } from './Redux/store';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header></Header>
          <Routes>
            <Route path='/' element={<NotesPage></NotesPage>} />
            <Route path='/category' element={<CategoryPage></CategoryPage>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
