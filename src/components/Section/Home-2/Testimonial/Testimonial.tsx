 
"use client";

import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
    <div
      className="zubuz-testimonial-slider-section zubuz-section-padding2"
      style={{ backgroundImage: "url(/assets/images/v2/t-bg.png)" }}
    >
      <div className="container">
        <Slider {...settings} className="zubuz-testimonial-slider">
          <div className="zubuz-testimonial-slider-item">
            <div className="zubuz-testimonial-slider-data">
              <div className="zubuz-testimonial-slider-rating">
                <ul>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                </ul>
              </div>
              <h3> "A Game Changer for Our Business"</h3>
              <p>
                We've been using this CRM platform for over a year now, and I
                can't stress enough how transformative it has been for our
                business. The impact this has had on our customer relations,
                sales and overall efficiency is tremendous.
              </p>
            </div>
            <div className="zubuz-testimonial-slider-author">
              <div className="zubuz-testimonial-slider-author-thumb">
                <img src="/assets/images/v2/t-user.png" alt="" />
              </div>
              <div className="zubuz-testimonial-slider-author-data">
                <span>Jonas Aly</span>
                <p>Founder @ Company</p>
              </div>
            </div>
          </div>
          <div className="zubuz-testimonial-slider-item">
            <div className="zubuz-testimonial-slider-data">
              <div className="zubuz-testimonial-slider-rating">
                <ul>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                </ul>
              </div>
              <h3> "A Game Changer for Our Business"</h3>
              <p>
                We've been using this CRM platform for over a year now, and I
                can't stress enough how transformative it has been for our
                business. The impact this has had on our customer relations,
                sales and overall efficiency is tremendous.
              </p>
            </div>
            <div className="zubuz-testimonial-slider-author">
              <div className="zubuz-testimonial-slider-author-thumb">
                <img src="/assets/images/v2/t-user.png" alt="" />
              </div>
              <div className="zubuz-testimonial-slider-author-data">
                <span>Jonas Aly</span>
                <p>Founder @ Company</p>
              </div>
            </div>
          </div>
          <div className="zubuz-testimonial-slider-item">
            <div className="zubuz-testimonial-slider-data">
              <div className="zubuz-testimonial-slider-rating">
                <ul>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                  <li>
                    <img src="/assets/images/v2/rating2.png" alt="" />
                  </li>
                </ul>
              </div>
              <h3> "A Game Changer for Our Business"</h3>
              <p>
                We've been using this CRM platform for over a year now, and I
                can't stress enough how transformative it has been for our
                business. The impact this has had on our customer relations,
                sales and overall efficiency is tremendous.
              </p>
            </div>
            <div className="zubuz-testimonial-slider-author">
              <div className="zubuz-testimonial-slider-author-thumb">
                <img src="/assets/images/v2/t-user.png" alt="" />
              </div>
              <div className="zubuz-testimonial-slider-author-data">
                <span>Jonas Aly</span>
                <p>Founder @ Company</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
