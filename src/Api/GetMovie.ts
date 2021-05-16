import axios from "axios";

const Movie_URL =
  "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888";

export const GetMovieData = (date: object) => {
  const dateReceived = Object.values(date);
  for (let i = 0; i < dateReceived.length; i++) {
    if (dateReceived[i] < 10) {
      dateReceived[i] = "0" + dateReceived[i];
    } else {
      dateReceived[i] = dateReceived[i];
    }
  }
  const newDate = dateReceived.join("");
  const request = async () => {
    const data = await axios
      .get(Movie_URL + "&targetDt=" + newDate)
      .then((res) => res.data.boxOfficeResult.dailyBoxOfficeList);
    return data;
  };

  console.log(`request`, request());
};
