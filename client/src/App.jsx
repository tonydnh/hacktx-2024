import { Outlet } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';


function App() {

  return (
    <div className="flex flex-col h-screen">
      <Outlet />
    </div>
  )
}

export default App
