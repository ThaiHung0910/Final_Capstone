import React, { useState } from "react";
import { posts, reviews } from "../../../assets/img/js/img";

const About = () => {
  let [currentReview, setCurrentReview] = useState(0);

  let handleChangeReview = (review) => {
    setCurrentReview(review);
  };

  let renderPosts = () => {
    return posts.map((post, index) => {
      return (
        <div key={index} className="flex mb-7">
          <div className="mr-4">
            <img src={post.image} alt="" />
          </div>
          <div className="space-y-3">
            <h6> {post.name}</h6>
            <div className="Info">
              <span>
                <i className="fa-solid fa-user-tie "></i>
                {post.author}
              </span>
              <span>
                <i className="fa-regular fa-clock "></i>
                {post.date}
              </span>
              <span>
                <i className="fa-solid fa-eye "></i>
                {post.view} view
              </span>
            </div>
          </div>
        </div>
      );
    });
  };

  let renderReview = () => {
    let review = reviews[currentReview];
    return (
      <div className="relative ">
        <div>
          <p>
            <i className="fa-solid fa-quote-left"></i>
            {review.review}
          </p>
          <div className="flex items-center">
            <div className="AvatarStudent">
              <img src={review.image} alt="" />
            </div>
            <div>
              <h6>{review.name}</h6>
              <span>Học viên xuất sắc</span>
            </div>
          </div>
        </div>
        <div className="GroupButton">{renderButtonPagination()}</div>
      </div>
    );
  };

  let renderButtonPagination = () => {
    return reviews.map((_, index) => {
      return (
        <div
          key={index}
          onClick={() => {
            handleChangeReview(index);
          }}
          className={`${index === currentReview ? "Active" : ""}`}
        ></div>
      );
    });
  };

  return (
      <div className="container mx-auto lg:p-12 py-12 About">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
          <div className="Post">
            <h3 className="text-xl font-bold mb-3">Bài viết liên quan</h3>

            <div className="grid grid-cols-1">{renderPosts()}</div>
          </div>
          <div className="Review">
            <h3 className="text-xl font-bold mb-3">Đánh giá học viên</h3>

            {renderReview()}
          </div>
        </div>
      </div>
  );
};

export default About;
