import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route} from "react-router-dom"
import TopBar from './scenes/global/TopBar';
import SideBar from './scenes/global/SideBar';
// import Dashboard from './scenes/dashboard';
// import Team from './scenes/team';
// import Invoices from './scenes/invoices';
// import Contacts from './scenes/contacts';
// import Bar from './scenes/bar';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Calendar from './scenes/calendar';
// import Geography from './scenes/geography';


function App() {
  const [theme, ColorMode] = useMode()
  return (
    <ColorModeContext.Provider value={ColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="app">
      <SideBar/>
      <main className='content'>
        <TopBar/>
        <Routes>
          {/* <Route path='/' element={<Dashboard/>}/> */}
          {/* <Route path='/team' element={<Team/>}/> */}
          {/* <Route path='/contacts' element={<Contacts/>}/> */}
          {/* <Route path='/form' element={<Form/>}/> */}
          {/* <Route path='/calendar' element={<Calendar/>}/> */}
          {/* <Route path='/line' element={<Line/>}/> */}
          {/* <Route path='/pie' element={<Pie/>}/> */}
          {/* <Route path='/bar' element={<Bar/>}/> */}
          {/* <Route path='/far' element={<FAQ/>}/> */}
          {/* <Route path='/invoices' element={<Invoices/>}/> */}
          {/* <Route path='/geography' element={<Geography/>}/> */}
        </Routes>
       
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
