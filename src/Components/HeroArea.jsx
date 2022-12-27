import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import CaseManagement from './CaseManagement';

import { useNavigate } from 'react-router-dom';

const HeroArea = () => {

    const url = window.location.href;
    const navigate = useNavigate()

    return (
        <div className='heroAreaContainer'>
            <div className="leftContainer">
                <div className="paraLeft">

                    <h3> <ion-icon name="checkmark-circle-outline"></ion-icon> Efficient, intuitive, no-code</h3>
                    <p>console empowers operational teams work and collaborate more effectively and faster </p>
                </div>
                <div className="paraLeft">
                    <h3> <ion-icon name="checkmark-circle-outline"></ion-icon> Endless capabilities, easily configurable</h3>
                    <p>Console enables compliance and fraud teams to be independent and make faster, more reliable decisions</p>
                </div>
                <div className="paraLeft">
                    <h3> <ion-icon name="checkmark-circle-outline"></ion-icon> Get more done</h3>
                    <p>Console users can get 200% increase in productivity with Flagright</p>

                </div>
                <a href="/" className='learnMore'>Learn More {'>'} </a>
            </div>
            <div className="rightContainer">
                <div className="navigatioNtabs">


                    <NavLink to={"CaseManagement"}> <button > <ion-icon name="server-outline"></ion-icon> Case Management</button></NavLink>
                    <NavLink to={"Rules"}> <button > <ion-icon name="hammer-outline"></ion-icon> Rules</button></NavLink>
                    <NavLink to={"Risk"}> <button > <ion-icon name="stats-chart-outline"></ion-icon> Risk</button></NavLink>
                    <NavLink to={"Sanction"}> <button > <ion-icon name="person-add-outline"></ion-icon> Sanction</button></NavLink>

                </div>
                <div className="imgContainer">

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default HeroArea