import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [menu, setMenu] = React.useState('');

    // Detectar tamanho da tela
    const [size, setSize] = React.useState({x: window.innerWidth});
    const updateSize = () =>
        setSize({
          x: window.innerWidth
    });

    // Atualizar tamanho da tela
    React.useEffect(() => { 
        window.onresize = updateSize
            if(size.x >= 550){
                setMenu('menu');
            }else {
                setMenu('menu-mobile')
            }
    }, [size]);

    function handleAbreMenu(){
        // Se menu-mobile ou menu-mobile menu-slideOutLeft, muda o nome da classe para menu-mobile menu-slideInLeft
        if(menu === 'menu-mobile' || menu === 'menu-mobile menu-slideOutLeft'){
            setMenu('menu-mobile menu-slideInLeft'); // Mostra o menu hambuguer
        }else if(menu === 'menu-mobile menu-slideInLeft'){
            setMenu('menu-mobile menu-slideOutLeft'); // Esconde o menu Hamburguer
        }
        
    }


    return(
        <>
            <header>
                <div className="container">
                    <h1>Logo</h1>
                    <div className={menu}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/clientes">Clientes</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </div>
                    <div className="btn-hamburguer">
                            <input  type="checkbox" id="check"/>
                            <label  onClick={handleAbreMenu} htmlFor="check"></label>
                            <span></span>
                    </div>
                </div>
            </header>
        </>
    )

}

export default Header;