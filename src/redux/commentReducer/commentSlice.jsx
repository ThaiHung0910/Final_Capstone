import { createSlice } from "@reduxjs/toolkit";
import { avatarComment } from "../../assets/img/js/img";

const initialState = {
  dataComment: [
    {
      id: 1,
      name: "Nguyễn",
      content:
        "Elearning thật tuyệt vời, khóa học online có thể học mọi lúc mọi nơi",
      hinhAnh: avatarComment[0],
      statusLike: false,
      numberLike: 77,
    },
    {
      id: 2,
      name: "Trần",
      content: "Thầy Harry dạy rất hay, 100 điểm không có nhưng",
      hinhAnh: avatarComment[1],
      statusLike: false,
      numberLike: 17,
    },
    {
      id: 3,
      name: "Huỳnh",
      content: "Sau khi học xong khóa học ở đây, mình đã tự tin đi làm",
      hinhAnh: avatarComment[2],
      statusLike: false,
      numberLike: 7,
    },
  ],
  commentEdit: {
    id: 0,
    action: false,
    content: "",
  },
};


const findCommentIndex = (state, id) => {
  return state.dataComment.findIndex(
    (dataComment) => Number(dataComment.id) === Number(id)
  );
};

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    likeCommentAction: (state, action) => {
      let index = findCommentIndex(state, action.payload);
      if (index !== -1) {
        let comment = state.dataComment[index];
        comment.statusLike = !comment.statusLike;
        comment.statusLike ? comment.numberLike++ : comment.numberLike--;
      }
    },

    submitCommentAction: (state, action) => {
      state.dataComment.unshift(action.payload);
    },
    deleteCommentAction: (state, action) => {
      state.dataComment = state.dataComment.filter(
        (dataComment) => Number(dataComment.id) !== Number(action.payload)
      );
    },
    editCommentAction: (state, action) => {
      let index = findCommentIndex(state, action.payload);
      if (index !== -1) {
        state.commentEdit = {
          ...state.dataComment[index],
          action: true,
        };
      }
    },
    updateCommentAction: (state, action) => {
      let { content, id } = action.payload;
      let index = findCommentIndex(state, id);
      if (index !== -1) {
        state.dataComment[index].content = content;
        state.commentEdit = { id: 0, action: false, content: "" };
      }
    },
  },
});

export const {
  likeCommentAction,
  submitCommentAction,
  deleteCommentAction,
  editCommentAction,
  updateCommentAction,
} = commentSlice.actions;

export default commentSlice.reducer;
