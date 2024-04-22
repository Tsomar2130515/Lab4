"use client"


import React, { useEffect } from 'react';
import { openDatabase ,initialisationIndexBDPub} from './LesScriptsJs/BlogIndexDB'; 

import Header from './LesComposants/Header';
import Footer from './LesComposants/Footer';
import Recherche from './LesComposants/Recherche';
import BlogList from './LesComposants/BlogList';

export default function Home() {
    useEffect(() => {
        
        openDatabase();
        
    }, []); 

    return (
        <main>
            <Header />
            <Recherche />
            <BlogList />
            <Footer />
        </main>
    );
}
