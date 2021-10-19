import {Switch, Route} from 'react-router-dom';


//paginas
import Home from '../pages/home';
import Clientes from '../pages/clientes';
import Contato from '../pages/contato';


function Routes() {
    return(

        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/clientes" component={Clientes} />
                <Route exact path="/contato" component={Contato} />
            </Switch>
        </>
    )

}

export default Routes;