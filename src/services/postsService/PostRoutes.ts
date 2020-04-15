import {
  postGetAllAction,
  postGetByIdAction,
  postSaveAction,
} from "./PostActions";
/**
 * All application routes.
 */
export const postRoutes = [
  {
    path: "/all",
    method: "get",
    action: postGetAllAction,
  },
  {
    path: "/:id",
    method: "get",
    action: postGetByIdAction,
  },
  {
    path: "",
    method: "post",
    action: postSaveAction,
  },
];
