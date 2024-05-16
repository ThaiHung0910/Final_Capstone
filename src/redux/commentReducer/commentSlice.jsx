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
      id: 4,
      name: "Huỳnh",
      content:
        "Sau khi học xong khóa học ở đây, mình đã tự tin đi làm",
      hinhAnh: avatarComment[2],
      statusLike: false,
      numberLike: 7,
    },
  ],
};

const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    likeCommentAction: (state, action) => {
      let cloneDataComment = [...state.dataComment];
      let index = cloneDataComment.findIndex(
        (dataComment) => dataComment.id == action.payload
      );
      if (index != -1) {
        cloneDataComment[index].statusLike =
          !cloneDataComment[index].statusLike;
      }
      if (cloneDataComment[index].statusLike) {
        cloneDataComment[index].numberLike++;
      } else {
        cloneDataComment[index].numberLike--;
      }
      state = { ...state, dataComment: cloneDataComment };
    },

    submitCommentAction: (state, action) => {
      state.dataComment.unshift(action.payload);
      state = { ...state };
    },
  },
});

export const { likeCommentAction, submitCommentAction } = commentSlice.actions;

export default commentSlice.reducer;
