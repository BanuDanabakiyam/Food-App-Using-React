import {Fragment} from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';//so that react understand its image not js file.

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ChudaChuda Items</h1>
                <HeaderCartButton onClick = {props.onShowCart}/>
            </header>
            {/* main-image here dash sysmbol present so cant put . notation */}
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of traditional foods"/>
            </div>
        </Fragment>
    );
}

export default Header;