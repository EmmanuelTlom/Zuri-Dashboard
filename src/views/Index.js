
import { useState } from "react";
// node.js library that concatenates classes (strings)
import Chart from "chart.js";
// react plugin used to create charts
import Echarts from "../components/Echarts";
import Tables from "../components/Tables";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <div className="top_section">
        <div className="top_section_wrap">
          <div className="left">
            <img src={require("../assets/img/theme/team-2-800x800.jpg")}/>
            <div>
              <p>Hey, Seyi Onifade! 👋</p>
              <small>Hope you are having a great day?</small>
            </div>
          </div>

          <div className="right">
              <button className="carlender">
                Jan 7 - Feb 6 <i className="fa-solid fa-calendar-days"></i>
              </button>
              <button className="filter">
                <i className="fa-solid fa-filter"></i>
              </button>
              <button className="actions">
                Actions <i className="fa-solid fa-arrow-down"></i>
              </button>
          </div>
        </div>

      </div>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Tables/>
        <Row className="mt-5 section_foot">
          <Col xl="4">
            <Echarts/>
          </Col>
          <Col xl="4">
            <Card className="shadow pb-2">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                </Row>
              </CardHeader>

              <div className="top_number">
                5
              </div>

              <div className="footerside_wrap">
                <div className="footer_side">
                  <div className="left">
                    Nigeria
                  </div>
                  <div className="right">
                    1,43,382
                  </div>
                </div>
                <Progress max="100" value="60" barClassName="bg-gradient-danger"/>
              </div>
              <div className="footerside_wrap">
                <div className="footer_side">
                  <div className="left">
                    South Africa
                  </div>
                  <div className="right">
                    1,43,382
                  </div>
                </div>
                <Progress max="100" value="50" barClassName="bg-gradient-danger"/>
              </div>
              <div className="footerside_wrap">
                <div className="footer_side">
                  <div className="left">
                    United Kingdom
                  </div>
                  <div className="right">
                    1,43,382
                  </div>
                </div>
                <Progress max="100" value="40" barClassName="bg-gradient-danger"/>
              </div>
              <div className="footerside_wrap">
                <div className="footer_side">
                  <div className="left">
                    India
                  </div>
                  <div className="right">
                    1,43,382
                  </div>
                </div>
                <Progress max="100" value="30" barClassName="bg-gradient-danger"/>
              </div>
            </Card>
          </Col>
          <Col xl="4">
            <div className="pb-2 botm">
              <CardHeader className="head border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Others</h3>
                  </div>
                </Row>
              </CardHeader>
              <div className="footerside_wrap_right">
                <div className="footer_side">
                  <div className="left">
                    <p className="complete">
                      Completed all tasks
                    </p>
                    <p className="stats">
                      <strong>
                        3,874
                      </strong>

                      <span className="green">
                        <i className="fa-solid fa-arrow-up"></i>  5%
                      </span>
                    </p>
                  </div>
                  <div className="right">
                    <img src={require("../assets/img/footg1.png")}/>
                  </div>
                </div>
              </div>
              <div className="footerside_wrap_right">
                <div className="footer_side">
                  <div className="left">
                    <p className="complete">
                      Completed at least one task
                    </p>
                    <p className="stats">
                      <strong>
                        3,874
                      </strong>

                      <span className="green">
                        <i className="fa-solid fa-arrow-up"></i>  5%
                      </span>
                    </p>
                  </div>
                  <div className="right">
                    <img src={require("../assets/img/footg2.png")}/>
                  </div>
                </div>
              </div>
              <div className="footerside_wrap_right">
                <div className="footer_side">
                  <div className="left">
                    <p className="complete">
                      Completed no task
                    </p>
                    <p className="stats">
                      <strong>
                        3,874
                      </strong>

                      <span className="red">
                       <i className="fa-solid fa-arrow-down"></i>  5%
                      </span>
                    </p>
                  </div>
                  <div className="right">
                    <img src={require("../assets/img/footg3.png")}/>
                  </div>
                </div>
              </div>


              <div className="button">
                <button>
                  View Full Statistics  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
