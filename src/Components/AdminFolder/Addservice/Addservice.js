import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../logos/logo.png';
import AddserviceSub from './AddserviceSub';

const Addservice = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container">
            <div className="row pt-5">
                <div>
                <img className="loginimg" src={logo} width="150" height="30" alt=""/>
                </div> 
            <div className="ml-auto"><h5>{loggedInUser.name}</h5></div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <li style={{listStyle:'none'}}><Link to="/admin/servicelist">Service List</Link></li>
                    <li style={{listStyle:'none'}}><Link to="/admin/addservice">Add Service</Link></li>
                    <li style={{listStyle:'none'}}><Link to="/admin/makeadmin">Make Admin</Link></li>
                </div>
                <div className="col-md-10">
                    <AddserviceSub></AddserviceSub>
                </div>
            </div>   
        </div>
    );
};

export default Addservice;