import axios from 'axios';

const localhost = 'http://localhost:55192';

interface IAuth {
  login: string;
  password: string;
}

interface IAllAnnouncements {
  fromPrice: number;
  toPrice: number;
  city: string;
  heatingType: string;
  fromSquare: number;
  toSquare: number;
  fromYear: number;
  toYear: number;
  fromRoomCount: number;
  toRoomCount: number;
  fromDate: string;
  toDate: string;
  page: number;
  items: number;
}

export const RentApi = {
  register(payload: IAuth) {
    return axios.post(`${localhost}/api/Account/Registration`, payload);
  },
  login(payload: IAuth) {
    return axios.post(`${localhost}/api/Account/Login`, payload);
  },
  getAllAnnouncements(payload: IAllAnnouncements) {
    return axios.post(`${localhost}/api/Announcement`, payload);
  }
};
