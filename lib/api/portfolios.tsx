import axios from 'axios';

const apiUrl = process.env.PORTFOLIO_API_URL +'/portfolios';

class PortfoliosApi {

  getAll() {
    return axios.get(apiUrl);
  }

  getById(id: string|string[]) {
    return axios.get(`${apiUrl}/${id}`);
  }
}

export default PortfoliosApi;