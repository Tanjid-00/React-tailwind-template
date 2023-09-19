import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={''} />
                <Route path="/blogs" element={''} />
            </Routes>
        </BrowserRouter>
    );
}

export default Root;
