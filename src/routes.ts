import { postRoutes } from "./services/postsService/PostRoutes";
/**
 * import all routes from a service, give them a baseRoute. All base routes should be unique
 */
export const AppRoutes = [
  {
    serviceName: "posts",
    routes: postRoutes,
  },
];
