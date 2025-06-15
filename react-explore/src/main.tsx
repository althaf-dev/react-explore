import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from '../store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PostList from './componets/PostList.tsx';
import Post from './componets/Post.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<PostList/>
  },
  {
    path:"/post/:id",
    element:<Post/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
);
