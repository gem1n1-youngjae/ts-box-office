import axios from "axios";

const Movie_URL =
  "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=91241eddbc52fd0dcb782e71b74a0f52";

export const GetMovieData = (date: object) => {
  const dateReceived = Object.values(date).join("");
  const request = axios.get(Movie_URL + "&targetDt=" + dateReceived);
  console.log(`request`, request);
};
