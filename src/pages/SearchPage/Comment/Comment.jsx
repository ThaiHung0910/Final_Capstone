import { Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { avatar, imageNotFound } from "../../../assets/img/js/img";
import {
  submitCommentAction,
  updateCommentAction,
} from "../../../redux/commentReducer/commentSlice";
import CommentItem from "./CommentItem/CommentItem";

export default function Comment() {
  const [open, setOpen] = useState(false);
  let [contentComment, setContentComment] = useState("");
  let dispatch = useDispatch();
  let dataComment = useSelector((state) => state.commentReducer.dataComment);
  let infoUser = useSelector((state) => state.userReducer.infoUser);

  let { commentEdit } = useSelector((state) => state.commentReducer);

  let renderComment = () => {
    return (
      <CommentItem
        dataComment={dataComment}
        dispatch={dispatch}
        infoUser={infoUser}
      />
    );
  };

  let handleChangeValueComment = (e) => {
    let { value } = e.target;
    setContentComment(value);
  };

  let handleSubmitComment = (e) => {
    e.preventDefault();
    let id = new Date().getTime();
    let name = infoUser?.hoTen;
    let content = contentComment;
    let hinhAnh = avatar[0];
    let statusLike = false;
    let numberLike = 0;

    const newComment = {
      id,
      name,
      content,
      hinhAnh,
      statusLike,
      numberLike,
    };

    dispatch(submitCommentAction(newComment));
    setContentComment("");
  };

  let handleEditComment = (e) => {
    e.preventDefault();
    dispatch(
      updateCommentAction({ content: contentComment, id: commentEdit.id })
    );
    setContentComment("");
  };

  useEffect(() => {
    if (commentEdit.content) {
      setContentComment(commentEdit.content);
    }
  }, [commentEdit.content]);

  return (
    <div>
      <button
        className="xl:px-2 md:px-2 px-2 xl:py-2 md:py-2 py-2 BtnGlobal"
        onClick={() => {
          if (infoUser) {
            setOpen(true);
          } else {
            message.error("Vui lòng đăng nhập để bình luận");
          }
        }}
      >
        Đến bình luận
      </button>
      <Modal
        title="Bình luận"
        footer={null}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={600}
        className="CommentModal"
      >
        <form className="xl:space-y-7 md:space-y-5 space-y-4" action="">
          <div className="xl:h-96 md:h-96 h-80 xl:space-y-7 md:space-y-7 space-y-5 overflow-auto">
            {renderComment()}
          </div>
          <div className="grid grid-cols-9 gap-1 items-center w-full px-3 xl:pt-5 md:pt-5 pt-3 border-t-2">
            <img
              className="xl:w-16 md:w-3/5 w-3/4 rounded-full"
              src={avatar[0]}
              onError={(e) => {
                e.target.src = imageNotFound;
              }}
              alt=""
            />
            <div className="col-span-8 ml-1 flex">
              <input
                className="w-3/4 xl:py-3 md:p-3 py-2 border focus:outline-none rounded-l-lg"
                placeholder="Write a comment..."
                onChange={handleChangeValueComment}
                type="text"
                value={contentComment}
                name="comment"
              />
              <button
                onClick={
                  commentEdit.action ? handleEditComment : handleSubmitComment
                }
                type="submit"
                className="flex items-center BtnGlobal"
                style={{ borderRadius: "0 30px 30px 0" }}
              >
                {commentEdit.action ? (
                  <i className="fa-regular fa-pen-to-square"></i>
                ) : (
                  <i className="fa-regular fa-paper-plane"></i>
                )}
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
