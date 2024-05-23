import React, { useRef, useState } from "react";
import { logo } from "../../assets/img/js/img";
import { message } from "antd";

const Footer = () => {
  let keyInput = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  let handleSubmitSend = (e) => {
    e.preventDefault();
    let email = keyInput.current.value;
    if (!validateEmail(email)) {
      setErrorMessage("Email không hợp lệ");
    } else {
      message.success("Đăng ký thành công");
      keyInput.current.value = "";
    }
  };
  let handleChange = (e) => {
    const email = e.target.value;
    !validateEmail(email)
      ? setErrorMessage("Email không hợp lệ")
      : setErrorMessage("");
  };

  return (
    <div>
      <footer className="Footer">
        <div className="container mx-auto lg:px-12 px-3  text-white">
          <div className="Subscribe">
            <div className="flex flex-col space-y-3 items-center">
              <h4 className="uppercase">Đăng ký tư vấn</h4>
              <form className="lg:w-3/4 md:w-4/5 w-full" onSubmit={handleSubmitSend}>
                <div className="flex">
                  <input
                    ref={keyInput}
                    type="email"
                    name="Email"
                    placeholder="Nhập email"
                    onChange={handleChange}
                    className="focus:outline-none"
                  />
                  <button type="submit" className="BtnGlobal">
                    <i className="fa-regular fa-paper-plane"></i>
                  </button>
                </div>
                <p>{errorMessage ? errorMessage : ""}</p>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 mt-28">
            <div className="grid grid-cols-1 space-y-5">
              <img className="Logo" src={logo[1]} alt="" />

              <p className="max-w-md leading-relaxed">
                Khám phá các khóa học lập trình độc đáo trên nền tảng Elearning.
                Học tập mọi lúc, mọi nơi, một cách linh hoạt và hiệu quả từ các
                chuyên gia hàng đầu trong ngành.
              </p>

              <div className="Brands">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-stack-overflow"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 lg:col-span-2 grid-cols-4 sm:gap-0 gap-3">
              <div className="sm:col-span-1 col-span-2">
                <div className="grid grid-cols-1">
                  <h3>Liên kết</h3>
                  <ul>
                    <li>
                      <span> Trang chủ</span>
                    </li>
                    <li>
                      <span> Dịch vụ </span>
                    </li>
                    <li>
                      {" "}
                      <span>Nhóm</span>
                    </li>
                    <li>
                      <span>Blog</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sm:col-span-1 col-span-2">
                <div className="grid grid-cols-1">
                  <h3>Khóa học</h3>

                  <ul>
                    <li>
                      <span> Front End</span>
                    </li>
                    <li>
                      <span> Back End </span>
                    </li>
                    <li>
                      <span> Full stack</span>
                    </li>
                    <li>
                      <span> Node Js</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Contact sm:col-span-1 col-span-4">
                <h3>Liên hệ với chúng tôi</h3>
                <ul>
                  <li>
                    {" "}
                    <i className="fa-solid fa-phone"></i>
                    <span>1800-123-4567</span>
                  </li>
                  <li>
                    {" "}
                    <i className="fa-regular fa-envelope"></i>
                    <span>elearning@gmail.com</span>
                  </li>
                  <li>
                    {" "}
                    <i className="fa-solid fa-location-dot"></i>
                    <span>CyberSoft, Hồ Chí Minh, Việt Nam</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t pt-8 Copyright text-white">
            <p className="text-center text-sm leading-relaxed">
              © Project 2024. All rights reserved.
              <br />
              Created by <span>Elearning</span>.
            </p>
          </div>
        </div>
      </footer>
      <div className="Map">
        <iframe
          title="Bản đồ Google"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.389453222693!2d106.75401021458872!3d10.857954360653137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270cb59e61b5%3A0x2921e07100a71953!2zQ3liZXJTb2Z0IEFjYWRlbXkgVGjhu6cgxJDhu6lj!5e0!3m2!1sen!2s!4v1668089727693!5m2!1sen!2s"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
