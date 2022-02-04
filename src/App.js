import logo from './logo.svg';
import './App.css';
import Homepage from './view/page/Homepage';
import MajorPage from './view/page/MajorPage';
import Universitypage from './view/page/Universitypage';
import MajorDetail from './view/page/Majordetail';
import Searchpage from './view/page/Searchpage';
import {
  BrowserRouter as Router,
  Switch as SW,
  Route,
  Link
} from "react-router-dom";
import UniversityDetail from './view/page/Universitydetail';
import Aboutpage from './view/page/AboutPage';
import Feedback from './view/page/Feedback';
import { SearchProvider } from './contexts/SearchContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { useEffect } from 'react';
import { UniversityProvider } from './contexts/UniversityData';
function App() {
  return (
    <div>
      <LanguageProvider>
        <UniversityProvider>
          <Router>
              <Route exact path="/" >
                <Homepage></Homepage>
              </Route>
              <Route path="/Major">
                <MajorPage></MajorPage>
              </Route>
              <Route path="/University">
                <Universitypage></Universitypage>
              </Route>
              <Route path="/UniversityDetail">
                <UniversityDetail></UniversityDetail>
              </Route>
              <Route path="/MajorDetail">
                <MajorDetail></MajorDetail>
              </Route>
              <Route path="/SearchPage">
                <SearchProvider>
                  <Searchpage></Searchpage>
                </SearchProvider>
              </Route>
              <Route path="/About">
                <Aboutpage></Aboutpage>
              </Route>
              <Route path="/Feedback">
                <Feedback></Feedback>
              </Route>
        </Router>
        </UniversityProvider>
          
      </LanguageProvider>
    </div>
  );
}
export default App;
