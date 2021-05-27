import axios from 'axios';

const localhost = 'http://localhost:55192';

interface IAuth {
  login: string;
  password: string;
}

export interface IRegister extends IAuth {
  profile: {
    name: string;
    surname: string;
    age: string;
    sex: string;
    temperament: string;
    cook: string;
    activity: string;
    rest: string;
    status: string;
    conflict: string;
    pet: string;
    review: string;
  };
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

export interface ICommonAnnouncement {
  compability: number;
  name: string;
  surname: string;
  phone: string;
  age: string;
  review: string;
  sex: string;
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
  register(payload: IRegister) {
    return axios.post(`${localhost}/api/account/Registration`, payload);
  },
  login(payload: IAuth) {
    return axios.post(`${localhost}/api/account/Login`, payload);
  },
  getAllAnnouncements(
    token: string,
    payload: IAllAnnouncements = defaultAllAnnouncementsPayload
  ) {
    return axios.post(`${localhost}/api/announcement`, payload, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  },
  getAnnouncementById(id: string, token: string) {
    return axios.get(`${localhost}/api/announcement/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  },
  getRent(token: string) {
    return axios.get(`${localhost}/api/rent`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  },
  postRent(token: string, payload: IPostRent) {
    return axios.post(`${localhost}/api/rent`, payload, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  },
  postCommonRent(token: string, announcementId: number) {
    return axios.post(
      `${localhost}/api/compatibility/${announcementId}`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    );
  },
  getCommonRent(token: string, announcementId: number) {
    return axios.get(`${localhost}/api/compatibility/${announcementId}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  }
};
