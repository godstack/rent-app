import axios from 'axios';

const localhost = 'http://localhost:55192';

interface IAuth {
  login: string;
  password: string;
}

export interface IAnnouncement {
  announcementId: number;
  city: string;
  createdAt: string;
  description: string;
  price: number;
  realtyInformation: {
    address: string;
    heatingType: string;
    images: {
      imageInfoId: number;
      name: string;
      path: string;
      realtyInformation: string | null;
      realtyInformationId: number;
    }[];
    realtyInformationId: number;
    roomCount: number;
    square: number;
    year: number;
  };
  realtyInformationId: number;
  rentUser: string | null;
  rentUserId: number;
  title: string;
}

export interface IAllAnnouncements {
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

export const defaultAllAnnouncementsPayload: IAllAnnouncements = {
  fromPrice: 0,
  toPrice: 0,
  city: '',
  heatingType: '',
  fromSquare: 0,
  toSquare: 0,
  fromYear: 0,
  toYear: 0,
  fromRoomCount: 0,
  toRoomCount: 0,
  fromDate: new Date().toISOString(),
  toDate: new Date().toISOString(),
  page: 0,
  items: 0
};

export const RentApi = {
  register(payload: IAuth) {
    return axios.post(`${localhost}/api/Account/Registration`, payload);
  },
  login(payload: IAuth) {
    return axios.post(`${localhost}/api/Account/Login`, payload);
  },
  getAllAnnouncements(
    token: string,
    payload: IAllAnnouncements = defaultAllAnnouncementsPayload
  ) {
    return axios.post(`${localhost}/api/Announcement`, payload, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  }
};
