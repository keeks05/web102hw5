import React from 'react';
import Card from '../components/Card';
import List from '../components/List';


const Dashboard = ({data}) => {

    return (
        <div className="App-page">
            <div className="App-row">
                <Card number={'College Station'} metric="TX, USA"/>
                <Card number={"12:24:36"} metric="Moon Rizz"/> 
                <Card number={"🌒"} metric="Moon Phase"/>  
            </div>
            <div className="App-row">
                <List data={data}/>
            </div>
        </div>  
    )
}

export default Dashboard;