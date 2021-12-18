import axios from "axios"

const state = {
  isLoggedIn: localStorage.getItem('isLoggedIn') ? localStorage.getItem('') : '',
  accessToken: localStorage.getItem('accessToken') ? 'Bearer '+localStorage.getItem('') : '',
  user: {avatar: null}
}

const mutations = {
  LOG_IN (state, token) {
    localStorage.setItem('accessToken', 'Bearer '+token),
    localStorage.setItem('isLoggedIn', true),
    state.accessToken = token,
    state.isLoggedIn = true
},
  GET_USER(state, payload) {
    state.user = payload; 
  }
}

const actions = {
 async logIn ({commit}, payload) {
   try{
    let response = await axios.post('https://onconnect-backend-api.herokuapp.com/api/v1/auth/signin', payload);
    if(response.data.success){
        commit('LOG_IN', response.data.data.accessToken);
        return true
    }
    return false
  }catch(err) {
    return false
  }
},
async signUp ({commit}, payload) {
  let response = await axios.post('https://onconnect-backend-api.herokuapp.com/api/v1/auth/signup', payload);
  if(response.data.success){
    return true
  }else{
    return false
  }
},

async editProfile({commit}, payload) {
   let response = await axios.post('https://onconnect-backend-api.herokuapp.com/api/v1/auth/editProfile', payload, {headers: {Authorization: localStorage.getItem('accessToken')}});
    if(response.data.success){
      return true
    }else{
      return false
    }
  },

async getUser({commit}) {
  let res = await axios.get('https://onconnect-backend-api.herokuapp.com/api/v1/auth/me', {headers: {Authorization: localStorage.getItem('accessToken')}});
   commit('GET_USER',res.data);
}
};

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
