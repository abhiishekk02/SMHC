import React from "react";
import "./ReviewSection.css";

const reviews = [
  {
    name: "A. Johnson",
    image:
      "https://media.istockphoto.com/id/1369509530/photo/portrait-of-natural-beauty-woman-at-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=rD9aWSk2m72taQYAi59YrIzy-unYvDst4g5XyxUXigc=",
    stars: 5,
    comment:
      "Synergy Mental Health Consulting has truly changed my life. The team’s compassion and expertise helped me navigate challenges and find my inner strength.",
  },
  {
    name: "B. Williams",
    image:
      "https://media.istockphoto.com/id/1368122645/photo/portrait-of-smiling-young-woman-with-curly-hair.webp?s=612x612&w=0&k=20&c=f5oy-LBfXtkhLuzZjAcD1MtFluEPc5TKhnkEsZlkA7o=",
    stars: 4,
    comment:
      "The holistic approach helped me achieve balance in every aspect of my life. I felt heard for the first time.",
  },
  {
    name: "C. Miller",
    image:
      "https://media.istockphoto.com/id/1364790491/photo/portrait-of-confident-young-black-woman-smiling.webp?s=612x612&w=0&k=20&c=ZW6RmCECbVmpNNyY18VLS-jNFsVt9G9Ck5-G-vHFHXo=",
    stars: 5,
    comment:
      "The professionals here go above and beyond. They supported me in rediscovering my strength and unlocking my potential.",
  },
];

const ReviewsSection = () => {
  return (
    <div className="reviewsSection container my-5">
      <p className="headingText-RS text-center">What Our Clients Say</p>
      <div className="review-carousel row flex-nowrap overflow-auto px-3 gy-4">
        {reviews.map((review, index) => (
          <div className="col-md-4 col-10 reviewBox p-4 mx-2" key={index}>
            <div className="row">
              <div className="col-3">
                <div className="RS-Img-Section">
                  <img
                    src={review.image}
                    alt={`Client ${index + 1}`}
                    className="RS-Img img-fluid rounded-circle"
                  />
                </div>
              </div>
              <div className="col-9">
                <p className="reviewerName">{review.name}</p>
                <p className="reviewerStar text-warning">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </p>
              </div>
            </div>
            <p className="reviewerComment my-3">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
