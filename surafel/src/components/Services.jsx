import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Web design and Development",
      desc: "I have been working as a web designer for the past 1 years. I have a strong understanding of the principles of web design, and I am proficient in a variety of web design software. I am able to create visually appealing and user-friendly websites that meet the needs of my clients.",
      icon: "fas fa-palette",
    },
    {
      name: "Photoshop",
      desc: "I have been using Photoshop for over 3 years and have a strong understanding of the software. I am proficient in all aspects of Photoshop, including image editing, retouching, compositing, and creating graphics. I am also familiar with a variety of plugins and scripts that can be used to automate tasks and improve productivity.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "App Design & Develop",
      desc: "I have been working as an app designer and developer for the past 5 years. I have a strong understanding of the principles of user experience design, and I am proficient in a variety of app development tools and technologies. I am able to create visually appealing and user-friendly apps that meet the needs of my clients.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Backend",
      desc: "I have strong backend skills in Java, JavaScript, React, and API. I am proficient in using frameworks such as Spring Boot and React. I have experience in developing and deploying backend services, and  familiar with the principles of software engineering",
      icon: "fas fa-chart-area",
    },
    
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
