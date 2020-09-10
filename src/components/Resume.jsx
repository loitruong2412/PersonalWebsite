import React from "react";

// reactstrap components
import {
  Container,
  Col,
  Progress,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import ResumeHeader from './ResumeHeader';
import Experience from './Experience';
import Education from './Education';
import Footer from "./Footer";


export default function Resume() {
  const [pills, setPills] = React.useState("1");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
    <div className="wrapper">
      <ResumeHeader />
      <div className="section">
        <Container>
          <Col className="ml-auto mr-auto" md="6">
            <div className="nav-align-center">
              <Nav
                className="nav-pills-info nav-pills-just-icons"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    className={pills === "1" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setPills("1");
                    }}
                  >
                    <i className="now-ui-icons business_badge" id="info"></i>
                    <UncontrolledTooltip placement="top" target="info" delay={0}>
                      INFO
                    </UncontrolledTooltip>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={pills === "2" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setPills("2");
                    }}
                  >
                    <i className="now-ui-icons design-2_ruler-pencil" id="skills"></i>
                    <UncontrolledTooltip placement="top" target="skills" delay={0}>
                      SKILLS
                    </UncontrolledTooltip>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={pills === "3" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setPills("3");
                    }}
                  >
                    <i className="now-ui-icons business_briefcase-24" id="experience"></i>
                    <UncontrolledTooltip placement="top" target="experience" delay={0}>
                      EXPERIENCE
                    </UncontrolledTooltip>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={pills === "4" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setPills("4");
                    }}
                  >
                    <i className="now-ui-icons education_hat" id="education"></i>
                    <UncontrolledTooltip placement="top" target="education" delay={0}>
                      EDUCATION
                    </UncontrolledTooltip>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <TabContent className="gallery" activeTab={"pills" + pills}>
            <TabPane tabId="pills1">
              <Col className="ml-auto mr-auto" md="10">
                <div className="resume-profile" >
                  <img alt="profile-pic" src={require("../assets/img/avatar.jpg")} className="rounded-circle img-raised"></img>
                </div>
                <div className="resume-item resume-info">
                  <div className="title">
                    <h3>LOI TRUONG</h3>
                    <h5>Software Engineer</h5>
                  </div>
                  <div className="description">
                    <h5>
                      <i className="fas fa-home"></i>
                      {' '}
                      Malden, MA 02148
                    </h5>
                    <h5>
                      <i className="fas fa-phone-square"></i>
                      {' '}
                      617-784-4430
                    </h5>
                    <h5>
                      <i className="fas fa-envelope"></i>
                      {' '}
                      loitruong2412@gmail.com
                    </h5>
                  </div>
                </div>
              </Col>
            </TabPane>
            <TabPane tabId="pills2">
              <Col className="ml-auto mr-auto" md="10">
                <Container>          
                  <div className="resume-item resume-skills">
                    <div className="title">
                      <h3>TECHNICAL SKILLS</h3>
                    </div>
                    <h6>Languages</h6>
                    <div className="description">
                      <div>
                        <span className="progress-badge">Python</span>
                        <Progress max="100" value="80">
                          <span className="progress-value">80%</span>
                        </Progress>
                      </div>
                      <div>
                        <span className="progress-badge">Java</span>
                        <Progress max="100" value="80">
                          <span className="progress-value">80%</span>
                        </Progress>
                      </div>
                      <div>
                        <span className="progress-badge">C, C++</span>
                        <Progress max="100" value="70">
                          <span className="progress-value">70%</span>
                        </Progress>
                      </div>
                      <div>
                        <span className="progress-badge">Database (MySQL, NoSQL, MongoDB, PostgreSQL)</span>
                        <Progress max="100" value="70">
                          <span className="progress-value">70%</span>
                        </Progress>
                      </div>
                      <div>
                        <span className="progress-badge">JavaScript, HTML, CSS</span>
                        <Progress max="100" value="60">
                          <span className="progress-value">60%</span>
                        </Progress>
                      </div>
                    </div>
                    <h6>Software: </h6>
                    <p>IntelliJ IDEA, PyCharm, Xcode, Android Studio, Visual Studio Code</p>
                    <h6>Frameworks/Libraries: </h6>
                    <p>React, Bootstrap, Express.js, Node.js, jQuery</p>
                    <h6>Schema: </h6>
                    <p>Mongoose, GraphQL</p>
                    <h6>Others: </h6>
                    <p>Git, Jira, Jenkins, Docker, MS Project, SPSS, Adobe Photoshop</p>
                  </div>
                </Container>
              </Col>
            </TabPane>
            <TabPane tabId="pills3">
              <Col className="ml-auto mr-auto" md="10">
                <Container>
                  <div className="title">
                    <h3>WORK EXPERIENCE</h3>
                  </div>
                  <Experience
                    startYear="May 2020"
                    endYear="Present"
                    jobTitle="Software Engineer Co-op"
                    company="Vecna Technologies"
                    location="Burlington, MA"
                    jobDescription={["Assist with the mobile API project by documenting, creating Mock DTOs, and performing REST API Testing using Karate framework", <br/>, <br/>, "Implement static content in mobile API project so the static content server could utilize mobile API’s endpoints", <br/>, <br/>, "Persist patient’s surveys via XML files and stamp answers from surveys onto PDF for client Yavapai Regional Medical Center, and use PostgreSQL to verify the Spring beans"]}
                  />
                  <Experience
                    startYear="Jan 2019"
                    endYear="Apr 2020"
                    jobTitle="Head Teaching Assistant for Computer Science & Its Applications (Excel, Access)"
                    company="Northeastern University - Khoury College of Computer Sciences"
                    location="Boston, MA"
                    jobDescription={["Revamped course’s structure and curriculum, and revised grading rubrics", <br/>, <br/>, "Improved students’ performance by holding one-on-one office hours for those struggling with class materials"]}
                  />
                  <Experience
                    startYear="May 2014"
                    endYear="Apr 2017"
                    jobTitle="Office Services Specialist II"
                    company="Northeastern University - Office of Global Services"
                    location="Boston, MA"
                    jobDescription={["Administered the internal Sunapsis system that stored international students' data and appointed daily tasks to a team of international student advisors", <br/>, <br/>, "Managed the front desk and performed a multitude of duties such as responding to incoming phone calls from international students, handling confidential student information with integrity, and scheduling appointments"]}
                  />
                  <Experience
                    startYear="Jan 2016"
                    endYear="June 2016"
                    jobTitle="Business Analyst Co-op"
                    company="MFS Investment Management"
                    location="Boston, MA"
                    jobDescription={["Assisted with an on-going Data Solvency project that involved data analysis and validation using SQL queries", <br/>, <br/>, "Utilized SharePoint and Changepoint site to keep track of user requests’ statuses and collaborated with QA team in Boston and Mexico to ensure the timely delivery of a positive end product for clients"]}
                  />
                  <Experience
                    startYear="Jan 2015"
                    endYear="June 2015"
                    jobTitle="Research Analyst Co-op"
                    company="John Hancock Financial"
                    location="Boston, MA"
                    jobDescription={["Collaborated with Application Portfolio Management, Information Service, Investment, and Insurance team to identify technologies capable of delivering expected business capabilities", <br/>, <br/>, "Expedited the ETL and data migration process by matching approximately 500 applications with their corresponding software, hardware and servers"]}
                  />
                </Container>
              </Col>
            </TabPane>
            <TabPane tabId="pills4">
              <Col className="ml-auto mr-auto" md="10">
                <Container>
                  <div className="title">
                    <h3>EDUCATION</h3>
                  </div>
                  <Education
                    startYear="Sep 2018"
                    endYear="Present"
                    school="Northeastern University - Khoury College of Computer Sciences (Boston, MA)"
                    degree="Candidate for Master of Science Degree in Computer Science"
                    location="Boston, MA"
                    gpa="GPA: 3.87/4.0"
                    concentration="Concentration: Software Engineering"
                    courses="Related Coursework: Web Development, Foundations of Software Engineering, Mobile Application Development, Database Management Systems, Object-Oriented Design, Foundations of Artificial Intelligence"
                  />
                  <Education
                    startYear="Sep 2013"
                    endYear="May 2017"
                    school="Northeastern University (Boston, MA)"
                    degree="Bachelor of Science in Business Administration"
                    location="Boston, MA"
                    concentration="Concentration: Management, Management Information Systems, Marketing"
                  />
                </Container>
              </Col>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <Footer />
    </div>
    </>
  )
}