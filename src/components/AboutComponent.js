import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

function About(props) {
  const RenderLeader = ({ leaders }) => {
    return (
      <Media list>
        {leaders.map((leader) => {
          return (
            <Media className="mt-4">
              <Media>
                <Media
                  object
                  src={leader.image}
                  alt="alberto"
                  className="h-64 w-64"
                />
                <Media body className="ml-5">
                  <Media heading>{leader.name}</Media>
                  <Media className="mb-2">{leader.designation}</Media>
                  {leader.description}
                </Media>
              </Media>
            </Media>
          );
        })}
      </Media>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Architecture Design</h2>
          <p>
            We specialize in designing spaces and buildings that offer a
            multiple functionalities in terms of aesthetics, practicality and
            suitability, while seamlessly connecting the users with a
            superlative environment, productive for work and living. We partner
            with our consultants and engineers to fabricate metamorphic
            environments that delight and amaze.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">3 Feb. 2013</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">Sekoia Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$1,250,375</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  Your Home should tell the story of who you are, and be a
                  Collection of what you Love.
                </p>
                <footer className="blockquote-footer">
                  Nate Berkus,
                  <cite title="Source Title">The Things That Matter</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Corporate Leadership</h2>
        </div>
        <div className="col-12">
          <RenderLeader leaders={props.leaders} />
        </div>
      </div>
    </div>
  );
}

export default About;
