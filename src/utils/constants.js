export const LOGO =
  "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAQ4TXm1OaapkwYRGseWYrT2HFpAFV7IX9bgV76BxLOD_049HTkgqZ6zq3enQ0gxU1b-868yGZj1I99Ak9oRykNILYsbpT_0d-be9QKbwkD8OfaEdWL-FHZBiORJ9ppzVCM1-mVn63afS.svg";

export const BGImg =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f0b42cac-9ced-425f-8677-777eadbdbe2f/web/IN-en-20261005-TRIFECTA-perspective_14c6dcd8-c058-4841-a0e5-1d0d70b35836_large.jpg";

export const AVATARLOGO =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1Th5gae2Q5TMYAq3IehJ43kLHoGBI_7f3DcM5D5bBg&s=10";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENROUTER_KEY = process.env.REACT_APP_OPENROUTER_KEY;
