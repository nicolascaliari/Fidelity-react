import '../../style/components/layout/Header.css'
import programacion from '../../img/programacion.jpg'
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <div className="contenedor">
            <header className="header">
                <nav className="nav">
                    <Link className='logo' to='/'>Fidelity <strong className="code">Code</strong></Link>
                   
                    <button className="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul className="nav-menu">
                        <li className="nav-menu-item">
                            <Link className="nav-menu-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-menu-item">
                        <Link className="nav-menu-link" to='/servicios'>Servicios</Link>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-menu-link" href="https://github.com/nicolascaliari" target='_blank'>GitHub Nicolas</a>
                        </li>
                        <li className="nav-menu-item">
                        <Link className="nav-menu-link" to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>

             <div className="titulo-header">
                <h1>{props.h1}</h1>
                <p>
                    {props.p}
                </p>
            </div> 

            <img src={programacion} className="img-fluid" alt="" />


        </div>

    )
}

export default Header;