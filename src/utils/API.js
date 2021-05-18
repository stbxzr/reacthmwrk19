import axios from "axios";
// Set the BASEURL to point at the randomuser API to return 100 records
const BASEURL = "https://randomuser.me/api/?inc=name,email,picture,cell&nat=us&results=100";
// Set API to search the randomuser API
const API = {
  search: function() {
    return axios.get(BASEURL);
  }
};
// export API
export default API;