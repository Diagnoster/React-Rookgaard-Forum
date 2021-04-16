import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';

const Routes = () => { // criando componente
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>)
}

export default Routes;

// SWITCH -> APENAS UM COMPONENTE POR PAGINA
// EXACT -> SER EXATAMENTE A ROTA PASSADA.