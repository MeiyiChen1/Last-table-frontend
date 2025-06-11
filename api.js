import axios from "axios";

const lastTableApi = axios.create({
  baseURL: "https://last-table.onrender.com",
});

export const postUsers = (username, icon_url, email, name) => {
  return lastTableApi
    .post("/users", {
      username: username,
      icon_url: icon_url,
      email: email,
      name: name,
    })
    .then((res) => {
      return res.data;
    });
};

export const getReservations = () => {
  return lastTableApi.get("/reservations").then((res) => {
    return res.data;
  });
};

export const getReservationById = (id) => {
  return lastTableApi.get(`/reservations/${id}`).then((res) => {
    return res.data;
  });
};

export const postVendor = (
  username,
  icon_url,
  telephone_number,
  location_data,
  restaurant_type
) => {
  return lastTableApi
    .post("/vendors", {
      username: username,
      icon_url: icon_url,
      telephone_number: telephone_number,
      location_data: location_data,
      restaurant_type: restaurant_type,
    })
    .then((res) => {
      return res.data;
    });
};

export const getVendors = () => {
  return lastTableApi.get("/vendors").then((res) => {
    return res.data;
  });
};

export const getVendorById = (id) => {
  return lastTableApi.get(`/vendors/${id}`).then((res) => {
    return res.data;
  });
};

export const postReservations = (
  time,
  available_seats,
  restaurant_name,
  restaurant_type
) => {
  return lastTableApi
    .post("/reservations", {
      time: time,
      available_seats: available_seats,
      restaurant_name: restaurant_name,
      restaurant_type: restaurant_type,
    })
    .then((res) => {
      return res.data;
    });
};

export const postFavouritesByUserId = (id, restaurantObj) => {
  return lastTableApi
    .post(`/users/${id}/favourites`, {
      username: restaurantObj.username,
      icon_url: restaurantObj.icon_url,
      telephone_number: restaurantObj.telephone_number,
      location_data: restaurantObj.location_data,
      restaurant_type: restaurantObj.restaurant_type,
    })
    .then((res) => {
      return res.data;
    });
};

export const deleteReservations = (id) => {
  return lastTableApi.delete(`/reservations/${id}`).then((res) => {
    return res;
  });
};

export const getFavouritesByUserId = (id) => {
  return lastTableApi.get(`/users/${id}/favourites`).then((res) => {
    return res.data;
  });
};

export const deleteFavouritesByUserId = (id) => {
  return lastTableApi.delete(`/users/${id}/favourites`).then((res) => {
    return res;
  });
};

export const getUsers = () => {
  return lastTableApi.get("/Users").then((res) => {
    return res.data;
  });
};

export const getUser = (user_id) => {
  return lastTableApi.get(`/users/${user_id}`).then((res) => res.data);
};

export const getReservationsByCategory = (category) => {
  return lastTableApi
    .get(`/reservations?category=${category}`)
    .then((res) => res.data);
};
