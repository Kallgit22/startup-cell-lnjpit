import React, { useState } from "react";
import AboutContainers from "../../containers/AboutContainers";
import MemberProfile from "../components/MemberProfile";
import Testimonial from "../components/Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import "./styles/About.css";
import CustomDialog from "../components/CustomDialog";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export default function About() {
  const { section } = useParams();
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const { sortedmemberData, testimonials } = AboutContainers({
    section,
  });

  console.log(testimonials);
  const handleCircleClick = (content) => {
    setDialogContent(content);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="about-us-page">
      <section className="about-us-main-poster-section">
        <div className="poster-heading">
          <div className="verticle-line"></div>
          <h1>Our Essence</h1>
        </div>
        <div className="poster-message-content">
          <p>
            At the <strong>Startup Cell of LNJPIT Chapra</strong>, we believe in
            the power of ideas. Our mission is to create a supportive
            environment where students and young entrepreneurs can turn their
            visions into reality.
            <br />
            <br />
            With access to mentorship and industry networks, we guide our
            members through every step of their entrepreneurial journey.
          </p>
        </div>
      </section>

      <section className="about-us-startup-cell-section">
        <h1 style={{ fontWeight: "bolder" }}>Our Vision</h1>
        <div style={{ width: "75%", fontSize: "16px" }}>
          <p>
            Our vision is to create a vibrant startup ecosystem that helps
            students and young entrepreneurs turn their ideas into successful
            businesses. We aim to provide the right support, including guidance,
            mentorship, and connections to industry experts and investors.
          </p>
          <p>
            Through our startup cell, we want to build a community where
            innovation is encouraged, and every idea has a chance to grow. We
            will offer workshops, programs, and access to resources that help
            entrepreneurs develop their skills and bring their ideas to life.
          </p>
        </div>
        <div className="about-us-details">
          <div className="details-card elevation-2">
            <p style={{ color: "orangered" }}>
              <strong>1. A Hub of Innovation:</strong>
            </p>
            <p>
              We envision LNJPIT Chapra becoming a center of creativity and
              entrepreneurship, where innovative ideas are developed and
              nurtured into solutions that address real-world challenges.
            </p>
          </div>
          <div className="details-card elevation-2">
            <p style={{ color: "orangered" }}>
              <strong>2. Empowerment Through Support:</strong>
            </p>
            <p>
              Our goal is to create a supportive and encouraging environment
              where students feel empowered to explore their entrepreneurial
              ideas with confidence and without the fear of failure.
            </p>
          </div>
          <div className="details-card elevation-2">
            <p style={{ color: "orangered" }}>
              <strong>3. Hands-on Learning:</strong>
            </p>
            <p>
              We aim to provide practical, real-world opportunities that allow
              students to test their ideas, learn from experience, and gain the
              skills they need to succeed in the business world.
            </p>
          </div>
          <div className="details-card elevation-2">
            <p style={{ color: "orangered" }}>
              <strong>4. Collaborative Ecosystem:</strong>
            </p>
            <p>
              We see our Startup Cell as a vibrant, collaborative community
              where students, mentors, and industry leaders come together to
              share knowledge, resources, and ideas, creating a network that
              supports innovation and growth.
            </p>
          </div>
        </div>
      </section>
      <section className="about-us-mission-section mission">
        <h1>Our Mission</h1>
        <div style={{ width: "75%", fontSize: "16px" }}>
          <p>
            Our mission is to empower young innovators by providing them with
            the tools, resources, and support they need to succeed. We aim to
            foster entrepreneurship by offering practical guidance, hands-on
            learning opportunities, and a platform to showcase ideas. We are
            dedicated to bridging the gap between innovation and real-world
            impact. By creating a collaborative environment, we help aspiring
            entrepreneurs refine their ideas, build business strategies, and
            connect with mentors, investors, and industry professionals.
          </p>
          <p>
            At <strong>LNJPIT’s Startup Cell</strong>, we aim to transform
            aspirations into action by focusing on three key pillars:{" "}
            <strong>inspiration</strong> , <strong>education</strong> , and{" "}
            <strong>execution</strong> .
          </p>
        </div>
        <div className="mission-details">
          <div
            className="mission-details-circle elevation-2"
            onClick={() =>
              handleCircleClick([
                {
                  title: "1. Workshops & Events :",
                  content:
                    "We regularly organize interactive workshops, guest lectures, and idea-sharing sessions that expose students to the entrepreneurial world. These events are designed to inspire creativity, open up new perspectives, and encourage out-of-the-box thinking.",
                },
                {
                  title: "2. Entrepreneurial Talks (E-Talks):",
                  content:
                    "By bringing successful entrepreneurs and industry experts to share their experiences, challenges, and insights, we aim to inspire students with real-life stories of perseverance and success.",
                },
                {
                  title: "3. Startup Showcases & Competitions:",
                  content:
                    "Our initiatives, like the PitchMasters: Innovation Challenge, and Startup Spotlight events, provide platforms for students to pitch their ideas, receive feedback, and learn from their peers. These competitions not only help students refine their ideas but also spark excitement and motivation to pursue entrepreneurship.",
                },
              ])
            }
          >
            <p>
              <strong>1. Inspiration</strong>
            </p>
          </div>
          <div
            className="mission-details-circle elevation-2"
            onClick={() =>
              handleCircleClick([
                {
                  title: "1. Skill-Building Workshops :",
                  content:
                    "We offer hands-on workshops that focus on critical entrepreneurial skills like design thinking, financial planning, marketing strategies, and pitching ideas. These workshops are designed to bridge the gap between theory and practice.",
                },
                {
                  title: "2. Mentorship Programs :",
                  content:
                    "One of our core commitments is to provide students with direct access to mentors who can guide them through every stage of their entrepreneurial journey—from conceptualizing ideas to developing business plans and securing funding. Our mentors include experienced faculty members, alumni, and industry professionals.",
                },
                {
                  title: "3. Real-World Experience :",
                  content:
                    "We believe the best way to learn is by doing. Our Startup Cell connects students with internship opportunities and live projects, allowing them to gain practical experience in the startup ecosystem and understand the challenges and intricacies of building a business from the ground up.",
                },
              ])
            }
          >
            <p>
              <strong>2. Education</strong>
            </p>
          </div>
          <div
            className="mission-details-circle elevation-2"
            onClick={() =>
              handleCircleClick([
                {
                  title: "1. Startup Incubation Support :",
                  content:
                    "For students who are ready to take their ideas to the next level, we provide incubation support. This includes assistance with business model development, market research, and access to funding opportunities through our network of investors and partners.",
                },
                {
                  title: "2. Resource Access :",
                  content:
                    "We offer access to cutting-edge lab facilities and collaborative workspaces that allow students to prototype and develop their products. From tech support to legal advice, we ensure students have the resources they need to overcome hurdles in their entrepreneurial journey.",
                },
                {
                  title: "3. Networking Opportunities :",
                  content:
                    "We actively organize events that allow students to connect with investors, entrepreneurs, and industry leaders. Our goal is to help students build a strong professional network that can support their startups long after they leave campus.",
                },
              ])
            }
          >
            <p>
              <strong>3. Execution</strong>
            </p>
          </div>
        </div>

        {/* Dialog */}
        <CustomDialog
          open={openDialog}
          onClose={handleClose}
          content={dialogContent}
        />
      </section>
      <section className="about-us-team-section team">
        <div className="team-section-heading">
          <span style={{ color: "#004699" }}>Faces</span>
          <span>Behind The Cell</span>
        </div>
        <div className="team-list-container">
          {sortedmemberData &&
            sortedmemberData.map((member, index) => (
              <MemberProfile data={member} key={index} />
            ))}
        </div>
      </section>
      <section className="about-us-testimonial-section">
        <h1>Testimonial</h1>
        <div className="testimonial-slider">
          {testimonials && (
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} data={testimonial} />
              ))}
            </Slider>
          )}
        </div>
      </section>
      {/* <section className="about-us-help-section faqs">
        <div className="help-section-details">
          <h1 style={{ color: "white" }}>FAQs</h1>
        </div>
        <div className="faq-menu">
          <ExpandableDialog />
        </div>
      </section> */}
    </div>
  );
}
