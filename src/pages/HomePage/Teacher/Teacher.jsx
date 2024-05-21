import React from "react";
import { teachers } from "../../../assets/img/js/img";

const Teacher = () => {
  let renderTeacher = () => {
    return teachers.map((teacher, index) => {
      return (
        <div key={index}>
          <div className="relative AvatarTeacher">
            <img alt="Avatar" src={teacher.image} height={480} width={480} />
            <span className="Course">
              Khóa học giảng dạy: {<b>{teacher.course}</b>}
            </span>
          </div>
          <h5 className="text-center text-xl mt-4">{teacher.name}</h5>
        </div>
      );
    });
  };

  return (
    <div className="Teacher">
      <div className="container mx-auto lg:p-12 py-12 px-3">
        <h3 className="font-bold text-xl mb-5">Giảng viên hàng đầu</h3>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-11">{renderTeacher()}</div>
      </div>
    </div>
  );
};

export default Teacher;
