import React from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const SingleProjectHome = () => {
    const { id } = useParams();
    // console.log(id)
    return (
        <div>
            <Header />
            <ProjectDetails id={id} />
            <Footer />
        </div>
    );
};

export default SingleProjectHome;