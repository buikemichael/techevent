import axios from 'axios';

const fetchAllEvents = async (query) => {
  const { search, category, isVirtual } = query;
  let queryString = '';
  if (search) {
    queryString += `&search=${search}`;
  }
  if (category) {
    queryString += `&category=${category}`;
  }
  if (isVirtual) {
    queryString += `&isVirtual=${isVirtual}`;
  }
  const result = await axios.get(`${process.env.REACT_APP_API_URL}/events?query=true${queryString}`);
  return result.data;
};

const eventQueries = { fetchAllEvents };

export default eventQueries;
