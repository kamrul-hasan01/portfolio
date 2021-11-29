import React from 'react';
import { Image } from 'react-bootstrap';
import page from '../../Images/page.jpg'
const PageNotFound = () => {
    return (
        <div>
            <Image src={page} fluid style={{ height: "600px", width: "100%" }}></Image>
        </div>
    );
};

export default PageNotFound;