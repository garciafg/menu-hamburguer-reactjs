import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
    *{
        list-style: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        color: #ffffff;
    }

    body{
        background-color: #13293D;

    }
  
    header{
        background-color: #006494;
        border-bottom: 6px solid white;
    }

    header .container{
        background-color: #006494;
        margin: 0 10% 0 10%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 30px 20px 30px;
        align-items: center;
    }

    header .container .menu ul{
        display: flex;
        flex-direction: row;
        background-color: #13293D;
        margin: auto;
        padding: 10px;
        border-radius: 5px;
    }

    header .container .menu ul li{
        margin: 0 5px 0 5px;
    }

    main .container{
        margin: 0 10% 0 10%;
        padding: 50px 0 50px 0;
        background-color: #00324A;
        text-align: center;
        box-shadow: 0 0 .5em 0 #000000;

    }

    /*
    * Botão Hamburguer 
    */
    .btn-hamburguer{
        display: none;
        width: 4rem;
        height: 5rem;
        position: relative;
        top: .5rem;
    }
    .btn-hamburguer label{
      width: 3.7rem;
      height: 3.7rem;
      background-color: #00324A;
      position: absolute;
      transition: all .3s linear;
    }
    .btn-hamburguer span{
      width: 30px;
      height: 5px;
      top: 29px;
      left: 15px;
      position: absolute;
      background-color: #ffffff;
      transition: all .3s linear;
    }
    #check{
      position: absolute;
      z-index: 1;
      display: none;
    }
    .btn-hamburguer span:before{
      content: '';
      width: 30px;
      height: 5px;
      bottom: -15px;
      position: absolute;
      background-color: white;
      transition: all .3s linear;
    }
    .btn-hamburguer span:after{
      content: '';
      width: 30px;
      height: 5px;
      top: -15px;
      position: absolute;
      background-color: white;
      transition: all .3s linear;
    }
    #check:checked ~ span{
      background-color: transparent;
    }

    #check:checked ~ span:before{
      transform: translate(0px, -15px) rotate(-45deg);
    }
    #check:checked ~ span:after{
      transform: translate(0px, 15px) rotate(45deg);
    }
    #check:checked ~ label{
      border-radius: 50%;
    }

  /* Media Queries */
  @media screen and (max-width: 550px) {
    header .container{
      margin: 0 2% 0 2%;
    }

    main .container{
        margin: 0 2% 0 2%;
    }

    /*
    * Menu mobile Hamburguer 
    */
    .btn-hamburguer{
      display: block;
    }

    .menu-mobile {
        background-color: #001D2B;
        z-index: 1000;
        -webkit-transform: translateX(-350%);
        transform: translateX(-350%);
        visibility: visible;
        margin-top: 16.0rem;
        margin-left: -13px; 
        position:fixed;
        flex-direction: column !important;
        padding: 10px 0 20px 0;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    .menu-mobile li{
      margin-top: .7rem;
    }

    .menu-mobile li a{
      font-size: 1.2rem;
      margin-left: 1.3rem;
      margin-right: .5rem;
      color: white;
      text-decoration: none;
      padding-left: .7rem;
      padding-right: .7rem;
      border-radius: 5px;
    }

    .menu-mobile a:hover{
      color: #1B80B8;
      font-weight: 400;
      background-color: white;
    }
}


/*  Animações do menu Hamburguer
*   Exibe o menu hamburguer 
*/
.menu-slideInLeft {
    -webkit-animation-name: menu-slideInLeft;
    animation-name: menu-slideInLeft;
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    left: 0;
}
    @-webkit-keyframes menu-slideInLeft {
    0% {
    -webkit-transform: translateX(-270%);
    transform: translateX(-270%);
    visibility: visible;
    }
    100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    }
    }
    @keyframes menu-slideInLeft {
    0% {
    -webkit-transform: translateX(-270%);
    transform: translateX(-270%);
    visibility: visible;
    }
    100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    }
    }

    /* Esconde o menu a esquerda */
    .menu-slideOutLeft {
      -webkit-animation-name: menu-slideOutLeft;
      animation-name: menu-slideOutLeft;
      -webkit-animation-duration: 0.5s;
      animation-duration: 0.5s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      left: 0;
    }
      @-webkit-keyframes menu-slideOutLeft {
      0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      }
      100% {
      visibility: visible;
      -webkit-transform: translateX(-270%);
      transform: translateX(-270%);
      }
      }
      @keyframes menu-slideOutLeft {
      0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      }
      100% {
      visibility: visible;
      -webkit-transform: translateX(-270%);
      transform: translateX(-270%);
      }
      
}
`;