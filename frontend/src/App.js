import React from "react";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Bookmark from './components/bookmark/bookmarks'

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Bookmark/>}/>
      </Routes>
    </Router>
  );
}

export default App;
