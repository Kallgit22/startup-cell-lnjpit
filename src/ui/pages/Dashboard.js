import Slider from '../components/dashboard/Sliders';
import ContactForm from "../components/dashboard/ContactForm";
import Mentors from "../components/dashboard/Mentor";
import AboutStartup from "../components/dashboard/AboutStartup";
import Initiative from "../components/dashboard/Initiative";
export default function Dashboard() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Slider/>
      <Initiative />
      <AboutStartup />
      <Mentors />
      <ContactForm />
    </div>
  )
}
