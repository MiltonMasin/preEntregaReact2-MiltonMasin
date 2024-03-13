import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


    const Navbar = (props)=>{
        return(
            <header className={classes.header}>
            <h4>Barberia Don Jose</h4>
            <nav>
            <Link to={'/category/cabello'} className={`${classes.link} btn btn-primary`}>{props.texto1}</Link>
            <Link to={'/category/barba'} className={`${classes.link} btn btn-primary`} >{props.texto2}</Link>
            <Link to={'/category/afeitado'} className={`${classes.link} btn btn-primary`}>{props.texto3}</Link>
            </nav>

            
            <CartWidget/>

            </header>
        )
    }

export default Navbar