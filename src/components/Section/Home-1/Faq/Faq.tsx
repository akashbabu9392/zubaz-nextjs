  

"use client";

import Accordion from "react-bootstrap/Accordion";
import { Link } from "../../../common/link";

const Faq = () => {
  return (
    <div className="scetion zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 order-lg-2">
            <div className="zubuz-default-content">
              <h2>Suitable app for all levels of users</h2>
              <p>
                Finance apps are for everyone, from beginners to experts. They
                help manage money, track expenses, and make financial tasks
                easier.
              </p>
              <p>
                Like budgeting and investment management. These apps are
                convenient and offer financial insights to help people save and
                plan for the future.
              </p>
              <div className="zubuz-extara-mt">
                <Link className="zubuz-default-btn" to="/contact-us">
                  <span>Start Your Free Trial</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5"> 
            <div className="zubuz-accordion-wrap">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Sign up for free</Accordion.Header> 
                  <Accordion.Body>
                    Start your journey with a 34-day trial. It’s easy no credit
                    card or commitment.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Make a money plan</Accordion.Header>
                  <Accordion.Body>
                    Start your journey with a 34-day trial. It’s easy no credit
                    card or commitment.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Enjoy less stress</Accordion.Header>
                  <Accordion.Body>
                    Start your journey with a 34-day trial. It’s easy no credit
                    card or commitment.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
