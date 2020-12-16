import axios from "axios";

const adminUrl = "https://transport.wohlig.in/";
// const uploadUrl = 'http://localhost:1330/';

export default {
  /* USER LOGIN */
  checkUserLogin(data, callback) {
    // `${adminUrl}user?email=${data.email}&password=${data.password}`
    return axios
      .get(`${adminUrl}user`, {
        params: {
          email: data.email,
          password: data.password
        }
      })
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  /* USER CRUD START */
  showUsersData(data, callback) {
    return axios
      .post(`${adminUrl}user/getAllUsers`, data)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  createUser(data, callback) {
    return axios
      .post(`${adminUrl}user`, data)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  getUserDataById(id, callback) {
    return axios
      .get(`${adminUrl}user/${id}`)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  editUser(data, callback) {
    return axios
      .patch(`${adminUrl}user/${data.id}`, data)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  deleteUser(data, callback) {
    return axios
      .delete(`${adminUrl}user/${data}`)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },
  /* USER CRUD END */

  /* COMPANY CRUD START */
  /* 
    bind company select option.
  */
  getAllCompaniesData(callback) {
    return axios
      .get(`${adminUrl}company/`)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  showCompanyData(data, callback) {
    return axios
      .post(`${adminUrl}company/getAllcompany`, data)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  createCompany(data, callback) {
    return axios
      .post(`${adminUrl}company`, data)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  getCompanyDataById(id, callback) {
    return axios
      .get(`${adminUrl}company/${id}`)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  editCompany(data, callback) {
    return axios
      .patch(`${adminUrl}company/${data.id}`, data)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  deleteCompany(data, callback) {
    return axios
      .delete(`${adminUrl}company/${data}`)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },
  /* COMPANY CRUD END */

  /* INBOUND CRUD START */
  showInboundData(data, callback) {
    return axios
      .post(`${adminUrl}inbound/getAllInBounds`, data)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  createInBound(data, callback) {
    return axios
      .post(`${adminUrl}inbound`, data)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  getInboundById(id, callback) {
    return axios
      .get(`${adminUrl}inbound/${id}`)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  editInbound(data, callback) {
    return axios
      .patch(`${adminUrl}inbound/${data.id}`, data)
      .then((result) => {
        callback(null, result);
      })
      .catch((err) => {
        callback(err.response);
      });
  },
  /* INBOUND CRUD END */

  /* OUTBOUND CRUD START */
  showOutboundData(data, callback) {
    return axios
      .post(`${adminUrl}outbound/getAllOutBounds`, data)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  createOutbound(data, callback) {
    return axios
      .post(`${adminUrl}outbound`, data)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  getOutboundDataById(id, callback) {
    return axios
      .get(`${adminUrl}outbound/${id}`)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  editOutbound(data, callback) {
    return axios
      .patch(`${adminUrl}outbound/${data.id}`, data)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  },

  deleteOutbound(data, callback) {
    return axios
      .delete(`${adminUrl}outbound/${data}`)
      .then(result => {
        callback(null, result);
      })
      .catch(err => {
        callback(err.response);
      });
  }

  /* OUTBOUND CRUD END */
};
