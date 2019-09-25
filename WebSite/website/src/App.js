import React from 'react';

import Layout from './hoc/Layout/Layout';
import IndexPages from './containers/IndexPages/IndexPages';


function App() {
  return (
      <Layout>
          <IndexPages/>
      </Layout>  
  );
}

export default App;
