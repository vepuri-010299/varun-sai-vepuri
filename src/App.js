import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from "./Components/Header"
import FeedbackList from "./Components/FeedbackList"
import Feedbackstats from "./Components/Feedbackstats"
import Feedbackform from "./Components/Feedbackform"
import AboutIconLink from './Components/AboutIconLink';
import AboutPage from './Pages/AboutPage';
import {FeedbackProvider} from './Context/FeedbackContext';
export default function App(){
    return(
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <Feedbackform/>
                                <Feedbackstats/>
                                <FeedbackList/>
                            </>
                        }>     
                            
                        </Route>
                        <Route path='/about' element={<AboutPage/>}/>        
                    </Routes>        
                    
                    
                        
                    <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
    )
}
