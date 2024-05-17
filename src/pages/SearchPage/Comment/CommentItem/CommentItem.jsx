import React, { useState } from "react";
import { LikeOutlined } from "@ant-design/icons";
import { imageNotFound } from "../../../../assets/img/js/img";
import {
  deleteCommentAction,
  editCommentAction,
  likeCommentAction,
} from "../../../../redux/commentReducer/commentSlice";
import { useSelector } from "react-redux";

const CommentItem = ({ dataComment, dispatch, infoUser }) => {
  const [showActions, setShowActions] = useState(null);
  const commentEdit = useSelector((state) => state.commentReducer.commentEdit);

  return dataComment.map((itemComment) => {
    let { id, name, hinhAnh, statusLike, numberLike, content } = itemComment;
    const isCommentOwner = infoUser?.hoTen === name;

    return (
      <div
        key={id}
        className="grid grid-cols-9 gap-1 w-full xl:pr-24 md:px-6 px-3"
      >
        <div className="relative w-9 h-9">
          <img
            className="xl:w-full md:w-3/5 w-3/4 absolute top-0 xl:right-1 md:right-1 right-1 rounded-full"
            src={hinhAnh}
            onError={(e) => {
              e.target.src = imageNotFound;
            }}
            alt=""
          />
        </div>
        <div className="col-span-8">
          <div className="flex items-center">
            <div className="inline-block relative xl:px-2 md:px-2 px-2 xl:pt-3 md:pt-3 pt-3 xl:pb-4 md:pb-3 pb-3 mr-2 bg-gray-300 rounded-2xl">
              <div className="font-semibold ">{name}</div>
              <div>{content}</div>
              <span className="flex items-center absolute xl:px-1 md:px-1 px-1 rounded-lg xl:-bottom-3 md:-bottom-3 -bottom-2 xl:right-3 md:right-3 right-2 bg-white shadow ">
                {numberLike > 0 ? (
                  <>
                    <LikeOutlined className="text-blue-300" />
                    <span>{numberLike}</span>
                  </>
                ) : (
                  ""
                )}
              </span>
            </div>
            {isCommentOwner ? (
              <div className="relative">
                <span
                  onClick={() => {
                    setShowActions(showActions === id ? null : id);
                  }}
                  className="BtnAction cursor-pointer"
                >
                  <i className="fa-solid fa-ellipsis"></i>
                </span>
                {showActions === id && (
                  <ul className="absolute mt-2 py-1 w-32 border border-[#f3f4f6] rounded-md shadow-lg z-10 bg-[#f6f9fa] ">
                    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      <button
                        onClick={() => {
                          dispatch(editCommentAction(id));
                          setShowActions(null);
                        }}
                      >
                        Chỉnh sửa
                      </button>
                    </li>
                    {!commentEdit.action && (
                      <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <button
                          onClick={() => {
                            dispatch(deleteCommentAction(itemComment.id));
                            setShowActions(null);
                          }}
                        >
                          Xóa
                        </button>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="text-[#acafb4] font-medium xl:px-2 md:px-2 px-2">
            <span
              onClick={() => {
                dispatch(likeCommentAction(id));
              }}
              className="cursor-pointer"
            >
              {statusLike ? "Dislike" : "Like"}
            </span>
          </div>
        </div>
      </div>
    );
  });
};

export default CommentItem;
