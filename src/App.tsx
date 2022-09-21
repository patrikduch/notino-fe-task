import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import Layout from './components/skeleton/Layout';
import TodoDetailPage from './pages/Todo-Detail-Page';
import TodoPage from './pages/Todo-Page';

/**
 * @function App Entry component where all injection starts.
 * @author Patrik Duch
 * @returns JSX for entry component (contains client-side routing).
 */
const App: React.FC = () => {
  return (
        <Routes>
          <Route path="/" element={
              <Layout />          
          }>
            <Route index element={ <TodoPage />} />
            <Route path="/todo-detail" element={
              <TodoDetailPage />
            }></Route>
        </Route>
      </Routes>
  );
}

export default App;