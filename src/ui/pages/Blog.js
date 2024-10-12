import React from "react";
import  { useState, useEffect,useMemo } from 'react';
import "../pages/styles/Blog.css";
const Blog = ()=>{
  const [mainImage, setMainImage] = useState("/images/backgrounds/EC_Startup_Cyborg_Hands_750.jpg");
  const [activeIndex, setActiveIndex] = useState(0);

  
  const images = useMemo(
    () => [
      "/images/backgrounds/EC_Startup_Cyborg_Hands_750.jpg",
      "/images/backgrounds/EC_Startup_Cyborg_Hands_750.jpg",
      "/images/backgrounds/EC_Startup_Cyborg_Hands_750.jpg",
      "/images/backgrounds/EC_Startup_Cyborg_Hands_750.jpg",
      
      
    ],
    []
  ); 

  

  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length; 
        setMainImage(images[nextIndex]); 
        return nextIndex;
      });
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images]); 

    
    const cardsData = [
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        { title: 'Smart India Hackathon 2024', date: '1 Oct 2024', imageUrl: '/images/startup-poster.jpg' },
        
      ];
    return(
      <>
      <div className="Image">
        <img src={mainImage} alt="Main Image" />
      </div>
      
      
      
      
        
            <div className="grid-container">
      {cardsData.map((card, index) => 
        (<div key={index} className="card-container">
            <img src={card.imageUrl} alt={card.title} className="card-image" />
            <h3 className="card-title">{card.title}</h3>
            <p className="card-date">Publish Date: {card.date}</p>
          </div>))}
    </div>
    </>
        
    );
};
export default Blog;