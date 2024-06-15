import axios from "axios";

const fetchRegister = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/user/register",
      {
        name,
        password,
        email,
        phoneNumber,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to register");
  }
};

export const fetchDataBookingById = (id) => {
  return axios.get(`http://localhost:8000/api/v1/bookings/${id}`);
};

export const postDataBooking = async (data, headers) => {
  try {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    const response = await axios.post(
      "http://localhost:8000/api/v1/bookings",
      data,
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to post booking"); // Handle the error or customize the error message as needed
  }
};

export { fetchRegister };
