import * as actionTypes from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  console.log("authorActions loadAuthorsSuccess 2");
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  console.log("authorActions loadAuthors 1");
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}
