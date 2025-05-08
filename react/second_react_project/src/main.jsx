import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Example1 from './states/Example1.jsx'
import Example2 from './states/Example2.jsx'
import Example3 from './states/Example3.jsx'
import Parent from './props/Parent.jsx'
import Parent2 from './props/Parent2.jsx'
import Parent3 from './props/Parent3.jsx'
import Parent4 from './props/Parent4.jsx'
import GrandParent from './props/PropsDrilling.jsx'
import GrandParentContext from './context/ContextParent.jsx'
import Login from './context/Application.jsx'
import Container from './components/Presentational_Container.jsx'
import EventTask1 from './Events/EventTask1.jsx'
import InlineStyle from './Styles/InlineStyle.jsx'
import ExternalStyle from './Styles/ExternalStyle.jsx'
import BootStrapTask1 from './Styles/BootStrapTask1.jsx'
import BootstrapTask2 from './Styles/BootstrapTask2.jsx'
import EventTask2 from './Events/EventTask2.jsx'
import Controlled from './components/Controlled.jsx'
import UnControlled from './components/UnControlled.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Header/>
   <Footer/> */}
   {/* <Example1/> */}
   {/* <Example2/> */}
   {/* <Example3/> */}
   {/* <Parent/> */}
   {/* <Parent2/> */}
   {/* <Parent3/> */}
   {/* <Parent4/> */}
   {/* <GrandParent/> */}
   {/* <GrandParentContext/> */}
   {/* <Login/> */}
   {/* <EventTask1/> */}
   {/* <Container/> */}
   {/* <InlineStyle/> */}
   {/* <ExternalStyle/> */}
   {/* <BootStrapTask1/> */}
   {/* <BootstrapTask2/> */}
   {/* <EventTask2/> */}
   {/* <Controlled/> */}
   <UnControlled/>
  </StrictMode>,
)
