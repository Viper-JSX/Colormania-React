import './App.css';
import Layout from './components/Layout/Layout';
import { changeColorMode } from './redux/action_functions';

function App() {
    console.log(changeColorMode("rgb"))

    return (
        <div className="App">
            <Layout />
        </div>
    );
}

export default App;
