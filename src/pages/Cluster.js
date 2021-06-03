import React from 'react';
import AddClass from '../components/AddClass';
import AddRoom from '../components/AddRoom';
import ScheduleModel from '../components/ScheduleModel';

const Cluster = () => {
    return (
        <>
        <AddRoom />
        <AddClass />
        <ScheduleModel />
        </>
    );
};

export default Cluster;