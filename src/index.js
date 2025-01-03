// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store';


// tanstack query
const queryClient = new QueryClient()

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <QueryClientProvider client={queryClient}>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </QueryClientProvider>
// );

ReactDOM.hydrate(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);