import React, { useState } from "react";
const reviwtitle = "Add a Review";
import Ratting from "../components/Ratting";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2024 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2024 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2024 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2024 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li onClick={() => setReviewShow(!reviewShow)} className="desc">
          Description
        </li>
        <li onClick={() => setReviewShow(!reviewShow)} className="rev">
          Review 4
        </li>
      </ul>
      {/** des and review content */}
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/** add review feild */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>
              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name*"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="mail"
                    id="mail"
                    placeholder="Your Email*"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating</span>
                    <Ratting />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="10"
                    placeholder="Type Your Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/** description showing */}
        <div className="description">
          <p>
            When you incorporate your brand's tone in your product description,
            you are making sure that all your marketing materials, including
            product descriptions, are consistent. In other words, every element
            of your website is aligned with your brand’s identity. This helps in
            building a recognizable brand that your target audience will easily
            associate with your products. Also, a unique tone will make your
            product stand out from the competition. Lastly, when you reflect
            your brand’s tone in the product description, you end up appealing
            to specific customer segments who can relate to it better. For
            instance, if your brand’s tone is playful, it will particularly
            appeal to the younger generation of people. They will prefer buying
            it from you as they can relate better to your brand. Here is a
            product description that has employed the brand’s tone throughout
            the content.
          </p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>
                  Lorem , ipsumdolor sit amet consectetur adipisicing elit.
                  Pariatur , soluta
                </li>
                <li>
                  {" "}
                  ipsumdolor sit amet consectetur adipisicing elit. Pariatur ,
                  soluta
                </li>
                <li>
                  {" "}
                  sit amet consectetur adipisicing elit. Pariatur , soluta
                </li>
                <li>
                  Lorem , ipsumdolor sit amet consectetur adipisicing elit.
                  Pariatur , soluta
                </li>
                <li>
                  Lorem , ipsumdolor sit amet consectetur adipisicing elit.
                  Pariatur , soluta
                </li>
              </ul>
            </div>
          </div>
          <p>
            A product description is the marketing copy that explains what a
            product is and why it’s worth purchasing. The purpose of a product
            description is to supply customers with important information about
            the features and benefits of the product so they’re compelled to
            buy. However, entrepreneurs and marketers, even professional
            copywriters, alike are susceptible to a common mistake that comes up
            when writing product descriptions: writing product descriptions that
            simply describe your products, as a supplement to product
            photography.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
