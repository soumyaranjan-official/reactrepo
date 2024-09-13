import './App.css';
import {Col, Row} from 'reactstrap';
import './my-profile.css';
import {useState} from "react";


function MyProfile() {

    const [isHovered, setIsHovered] = useState(false);
    const cardStyle = {
        backgroundColor: isHovered ? "#f3f3f3" : "white",
        boxShadow: isHovered ? "0 0 11px rgba(33,33,33,.2)" : "none",
        transition: "all 0.3s ease",
    };
    return (
        <div className="container ">
            <div className="mt-5 ms-5 me-5 ">
                <Row>
                    <Col md={10}>
                        <div id="card"
                             className="card custom-card "
                             style={cardStyle}
                             onMouseEnter={() => setIsHovered(true)}
                             onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="card-body">
                                <div className="d-flex">
            <span
                style={{
                    fontWeight: 700,
                    paddingBottom: "10px",
                    paddingRight: "10px",
                    width: "50%",
                    height: "50%",
                }}
            >
              <i className="fa-solid fa-user me-2"></i>Soumya Ranjan Ranjan
            </span>
                                </div>
                                <div className="d-flex">
            <span
                style={{
                    fontWeight: 700,
                    paddingBottom: "10px",
                    width: "50%",
                    height: "50%",
                }}
            >
              <i className="fa-solid fa-envelope me-2"></i>
              <span className="mb-4">
               psoumyaranjan39@gmail.com
              </span>
            </span>
                                </div>
                                <div className="d-flex">
            <span
                style={{
                    fontWeight: 700,
                    paddingBottom: "10px",
                    width: "50%",
                    height: "50%",
                }}
            >
              <i className="fa-solid fa-calendar-days me-2"></i>25/03/2002
            </span>
                                </div>
                                <div className="d-flex">
            <span
                style={{
                    fontWeight: 700,
                    paddingBottom: "10px",
                    width: "50%",
                    height: "50%",
                }}
            >
              <i className="fa-solid fa-location-dot me-2"></i>Bhubaneswar
            </span>
                                </div>
                                <div className="d-flex">
            <span
                style={{
                    fontWeight: 700,
                    width: "50%",
                    height: "50%",
                }}
            >
              <i className="fa-solid fa-phone me-2"></i>+91 7978 7978 7978
            </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div id="circle_img" className="text-center"> {/* Centering the image */}
                            <img
                                style={{
                                    height: '200px',  /* Increased height */
                                    width: '200px',   /* Increased width to keep it circular */
                                    borderRadius: '50%', /* Keeps the circular shape */
                                    objectFit: 'cover', /* Ensures the image covers the area without distortion */
                                    overflow: 'hidden' /* Hides any overflow */
                                }}
                                src="data:image/jpeg;base64,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"
                                className="card-img-top"
                                alt="error"
                            />
                        </div>
                    </Col>

                </Row>

                <Row className="mt-3">
                    <Col md={'12'}>

                        <div id="card" className="card custom-card">
                            {/*<img src="..." className="card-img-top" alt="..."/>*/}
                            <div className="card-body">
                                <div>
                                    <h5>Professional Summary</h5>
                                    "Seasoned marketing professional with over 5 years of experience in digital
                                    marketing,
                                    seeking a senior marketing manager role to leverage my expertise in SEO and content
                                    strategy to drive company growth and brand visibility."

                                    Certified public accountant with a strong background in financial analysis and
                                    auditing,
                                    aiming to secure a position as a senior auditor at [Company Name] to ensure
                                    financial
                                    compliance and optimize business operations."
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>

                <Row className="mt-3">

                    <Col md={'6'}>

                        <div className="card custom-card">

                            <div className="card-body">
                                <div>
                                    <p style={{fontWeight: 700, letterSpacing: '8px'}}>SKILLS</p>
                                    <hr/>
                                </div>

                                <div>
                                    <ul>
                                        <li style={{marginTop: 0}}><span style={{
                                            fontWeight: "400",
                                            fontStyle: "normal",
                                            color: "rgb(112,111,111)",
                                            textDecoration: "none"
                                        }}>Web Design</span></li>
                                        <li style={{marginTop: '0.25rem'}}><span style={{
                                            fontWeight: "400",
                                            fontStyle: "normal",
                                            color: "rgb(112,111,111)",
                                            textDecoration: "none"
                                        }}>Designing Thinking</span></li>
                                        <li style={{marginTop: '0.25rem'}}><span style={{
                                            fontWeight: "400",
                                            fontStyle: "normal",
                                            color: "rgb(112,111,111)",
                                            textDecoration: "none"
                                        }}>Wireframe Creation</span></li>
                                        <li style={{marginTop: '0.25rem'}}><span style={{
                                            fontWeight: "400",
                                            fontStyle: "normal",
                                            color: "rgb(112,111,111)",
                                            textDecoration: "none"
                                        }}>Front End Coding</span></li>
                                        <li style={{marginTop: '0.25rem'}}><span style={{
                                            fontWeight: "400",
                                            fontStyle: "normal",
                                            color: "rgb(112,111,111)",
                                            textDecoration: "none"
                                        }}>Problem-Solving</span></li>
                                        <li style={{marginTop: '0.25rem'}}><span style={{
                                            fontWeight: "400",
                                            fontStyle: "normal",
                                            color: "rgb(112,111,111)",
                                            textDecoration: "none"
                                        }}>Project Management Tools</span></li>
                                        <li style={{marginTop: '0.25rem'}}><span style={{
                                            fontWeight: "400",
                                            fontStyle: "normal",
                                            color: "rgb(112,111,111)",
                                            textDecoration: "none"
                                        }}>Strong Communication</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col md={'6'}>

                        <div className="card custom-card">
                            {/*<img src="..." className="card-img-top" alt="..."/>*/}
                            <div className="card-body">
                                <div className="text-left">
                                    {/*<h2 style={{letterSpacing: '8px'}}>EXPERIENCE</h2>*/}
                                    <span style={{fontWeight: "700", letterSpacing: '8px'}}>EXPERIENCE</span>
                                    <hr/>
                                </div>
                                <div>
                                <span style={{fontWeight: "bolder"}}><h6
                                >APPLICATION DEVELOPER</h6></span>
                                </div>
                                <div className="mt-2">
                        <span style={{
                            fontWeight: "400", fontStyle: "normal", color: "rgb(70,74,78)", textDecoration: "none"
                        }}>Really Great Company</span>
                                </div>
                                <div>
                        <span style={{
                            fontWeight: "400", fontStyle: "normal", color: "rgb(70,74,78)", textDecoration: "none"
                        }}>2024-present</span>

                                </div>
                                <div>
                                    <ul>

                                        <li>Database administration and website design</li>
                                        <li>Built the logic for a streamlined ad-serving platform that scaled</li>
                                        <li> Educational institutions and online classroom management</li>
                                    </ul>
                                </div>
                                <div>
                                <span style={{fontWeight: "bolder"}}><h6
                                >WEB CONTENT MANAGER</h6></span>
                                </div>
                                <div className="mt-2">
                        <span style={{
                            fontWeight: "400", fontStyle: "normal", color: "rgb(70,74,78)", textDecoration: "none"
                        }}>Really Great Company</span>
                                </div>
                                <div>
                        <span style={{
                            fontWeight: "400", fontStyle: "normal", color: "rgb(70,74,78)", textDecoration: "none"
                        }}>2014-2016</span>

                                </div>
                                <div>
                                    <ul>

                                        <li>Database administration and website design</li>
                                        <li>Built the logic for a streamlined ad-serving platform that scaled</li>
                                        <li> Educational institutions and online classroom management</li>
                                    </ul>
                                </div>


                                <div>
                                <span style={{fontWeight: "bolder"}}><h6
                                >ANALYSIS CONTENT</h6></span>
                                </div>
                                <div>
                        <span style={{
                            fontWeight: "400", fontStyle: "normal", color: "rgb(70,74,78)", textDecoration: "none"
                        }}>Really Great Company</span>
                                </div>
                                <div>
                        <span style={{
                            fontWeight: "400", fontStyle: "normal", color: "rgb(70,74,78)", textDecoration: "none"
                        }}>2010-2014</span>

                                </div>
                                <div>
                                    <ul>

                                        <li>Database administration and website design</li>
                                        <li>Built the logic for a streamlined ad-serving platform that scaled</li>
                                        <li> Educational institutions and online classroom management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div id="card_education" className="card custom-card">
                            <div className="card-body">
                                <div className="text-left">

                                    <span style={{fontWeight: "700", letterSpacing: '8px'}}>EDUCATION</span>
                                    <hr/>
                                </div>
                                <div className="mt-3">
                                    <span style={{fontWeight: "bolder"}}><h>SECONDARY SCHOOL</h></span>
                                </div>
                                <div className="mt-1">
                        <span style={{
                            fontWeight: "400", fontStyle: "normal", color: "rgb(70,74,78)", textDecoration: "none"
                        }}>Really Great High School</span>
                                </div>
                                <div>
                        <span style={{
                            fontWeight: "400", fontStyle: "normal", color: "rgb(70,74,78)", textDecoration: "none"
                        }}>2017-2019</span>
                                </div>
                                <div>
                                <span style={{fontWeight: "bolder"}}><h6
                                    className="mt-3">BACHELOR OF TECHNOLOGY</h6></span>
                                </div>
                                <div>
                        <span style={{
                            fontWeight: "400", fontStyle: "normal", color: "rgb(70,74,78)", textDecoration: "none"
                        }}>Really Great UNIVERSITY</span>
                                </div>
                                <div>
                        <span style={{
                            fontWeight: "400", fontStyle: "normal", color: "rgb(70,74,78)", textDecoration: "none"
                        }}>2019-2024</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <div>
                            fhdgsfh
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default MyProfile;
