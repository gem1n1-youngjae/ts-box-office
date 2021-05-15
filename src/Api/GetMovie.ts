import axios from "axios";

const Movie_URL =
  "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=91241eddbc52fd0dcb782e71b74a0f52";

export const GetMovieData = (date: string) => {
  const request = axios.get(Movie_URL + "&targetDt=" + date);
  return request.then((response) => response.data);
};
