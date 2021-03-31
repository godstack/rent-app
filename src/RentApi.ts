import axios from 'axios';

const localhost = 'http://localhost:55192';

interface IAuth {
  login: string;
  password: string;
}

interface IImage {
  imageInfoId: number;
  name: string;
  path: string;
  realtyInformation: string | null;
  realtyInformationId: number;
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
    images: IImage[];
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

export interface IReserved {
  announcement: {
    announcementId: number;
    city: string;
    createdAt: string;
    description: string;
    price: number;
    realtyInformation: {
      address: string;
      heatingType: string;
      images: IImage[];
      realtyInformationId: number;
      roomCount: number;
      square: number;
      year: number;
    };
    realtyInformationId: number;
    rentUserId: number;
    title: string;
  };
  announcementId: number;
  fromDate: string;
  rentInformationId: number;
  toDate: string;
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

interface IPostRent {
  announcementId: number;
  fromDate: string;
  toDate: string;
}

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
  },
  getAnnouncementById(id: string, token: string) {
    return axios.get(`${localhost}/api/Announcement/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  },
  getRent(token: string) {
    return axios.get(`${localhost}/api/Rent`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  },
  postRent(token: string, payload: IPostRent) {
    return axios.post(`${localhost}/api/Rent`, payload, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  }
};
