import React,{Component} from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux/Aux";
import Styles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDraw from "../../components/Navigation/SideDraw/SideDraw";

class Layout extends Component {
    state = {
        showSideDrawer:false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
    })}

    render () {
        return(
            <Aux>
                <Toolbar 
                    isAuth= {this.props.isAuthenticated}
                    drawerTogglerClicked={this.sideDrawerToggleHandler}/>
                <SideDraw 
                    isAuth= {this.props.isAuthenticated}
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer} />
                <div>Toolbar</div>
                <main className={Styles.Content}>
                    {this.props.children}
                </main>
            </Aux>   
        )
    } 
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);