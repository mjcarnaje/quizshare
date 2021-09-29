export { createAuthorLoader } from "./createAuthorLoader";
export { createBookmarkLoader } from "./createBookmarkLoader";
export { createLikeLoader } from "./createLikeLoader";
export { createFollowLoader } from "./createFollowLoader";
export { getRole } from "./getRole";

export const __PROD__ = process.env.NODE_ENV === "production";
