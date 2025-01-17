import { createSlice } from "@reduxjs/toolkit";
import instance from "./instance";
import moment from "moment";

//loading
import { isLoaded } from "./record";

// sentry
import * as Sentry from "@sentry/react";

const initialState = {
  list: [],
};

export const getNoticeSV = () => {
  return function (dispatch, getState, { history }) {
    dispatch(isLoaded(false));
    instance
      .get("/api/notice")
      .then((res) => {
        dispatch(SetList(res.data.notice));
        dispatch(isLoaded(true));
      })
      .catch((err) => {
        Sentry.captureException(`Catched Error : ${err}`);
      });
  };
};

export const postNoticeSV = (noticelist) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/api/notice", noticelist)
      .then((res) => {
        history.push("/notice");
      })
      .catch((err) => {
        Sentry.captureException(`Catched Error : ${err}`);
      });
  };
};

export const putNotiSV = (updatelist, noticeId) => {
  return function (dispatch, getState, { history }) {
    instance
      .put(`/api/notice/${noticeId}`, updatelist)
      .then((res) => {})
      .catch((err) => {
        Sentry.captureException(`Catched Error : ${err}`);
      });
  };
};

export const deleteNotiSV = (noticeId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/api/notice/${noticeId}`, { data: { password: "zkffhfltm1@" } })
      .then((res) => {
        history.push("/notice");
      })
      .catch((err) => {
        Sentry.captureException(`Catched Error : ${err}`);
      });
  };
};

export const getNotiDetailSV = (noticeId) => {
  return function (dispatch, getState, { history }) {
    dispatch(isLoaded(false));
    instance
      .get(`/api/notice/${noticeId}`)
      .then((res) => {
        dispatch(SetListOne(res.data.notice));
        dispatch(isLoaded(true));
      })
      .catch((err) => {
        Sentry.captureException(`Catched Error : ${err}`);
      });
  };
};

export const foodFeedBack = (contents) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/api/notice/feedbackFood", {
        contents: contents,
        date: moment().format("YYYY-MM-DD"),
      })
      .then((res) => {})
      .catch((err) => {
        Sentry.captureException(`Catched Error : ${err}`);
      });
  };
};

//리덕스
const notice = createSlice({
  name: "notice",
  initialState,
  reducers: {
    SetList: (state, action) => {
      state.list = action.payload;
    },

    SetListOne: (state, action) => {
      state.listone = action.payload;
    },

    DeleteNoti: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { SetList, SetListOne, DeleteNoti } = notice.actions;
export default notice;
