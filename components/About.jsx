import "../contact.css";
import myimg from "../assets/myimg.png";
const About = () => {
  return (
    <div className="about-container">
      <div className="heading">
        <h1 className="aboutname">About Me</h1>
        <div className="line"></div>
      </div>
      <div className="personal-info">
        <div className="myimg">
          <img src={myimg} alt="myimg" />
        </div>

        <div className="myname">
          <h2>Himanshu Kamboj</h2>
          <p>UI Designer/Front-End Developer</p>
        </div>
      </div>
      <div className="about-info">
        <p>
          I am a recent BCA graduate with a passion for web development,
          specializing in front-end technologies. With a strong foundation in
          HTML, CSS, and JavaScript, I have developed the ability to create
          dynamic, responsive, and user-friendly web pages. My experience with
          React allows me to build interactive UIs, manage state effectively,
          and optimize performance for modern web applications. I enjoy solving
          complex problems and continuously enhancing my skills to keep up with
          the latest trends in front-end development.
        </p>
        <p>
          As a fresher, I am eager to apply my knowledge in a professional
          setting where I can contribute to real-world projects. I am looking
          for an opportunity to work as a front-end developer, where I can
          collaborate with a team, grow my expertise, and contribute to building
          innovative digital experiences. My goal is to work in a dynamic
          environment where creativity and technology meet to deliver
          cutting-edge solutions.
        </p>
        <p>
          In addition to my academic background, I have worked on several
          personal projects to hone my skills. Notably, I have developed a
          Spotify clone that showcases my ability to integrate APIs and create
          dynamic, responsive interfaces. I have also built a countries API
          project that demonstrates my capability to work with RESTful services
          and manipulate data efficiently. These projects have given me hands-on
          experience in solving real-world challenges, improving my technical
          proficiency, and ensuring I can deliver high-quality web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
