import { useEffect, useState } from 'react'
import { getNotifications } from '../apis/AppContentAPI';

export default function DashboardContainer() {
  const [posters, setPosters] = useState(null);
  const [notice, setNotice] = useState(null);
  const [mentors, setMentors] = useState(null);

  useEffect(()=>{
    setPosters([
      "/images/startup-poster.jpg",
      "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
      "/images/backgrounds/Startup_Mahakumbh_PM_Narendra_Modi_ecosystem_1710915148775_1710915148910.webp",
      "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
      "/images/backgrounds/hashstudioz-at-startup-mahakumbh-expo.webp",
    ]);

    try {
      Promise.all([getNotifications()]).then(function (results) {
        const Notifications = results[0].data;
        setNotice(Notifications);
        console.log(Notifications)
      });
    } catch (error) {
      console.log(error);
    }

  },[]);

  return (
    {
      posters,
      notice,
      mentors
    }
  )
}

