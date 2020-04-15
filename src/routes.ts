import { postRoutes } from "./services/postsService/PostRoutes";
import { registerService } from "./services/registerService";
/**
 * import all routes from a service, give them a baseRoute. All base routes should be unique
 */

export const AppRoutes = [
  // registerService returns an object thats simply
  // {
  //   serviceName: "posts",
  //   routes: postRoutes,
  // },
  registerService("posts", postRoutes),
];
