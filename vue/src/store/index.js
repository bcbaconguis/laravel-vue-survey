import {createStore} from "vuex";
import axiosClient from '../axios'

const store = createStore({
    state: {

    user:{
        data: {},
        token: sessionStorage.getItem('TOKEN'),
        },
    currentSurvey: {
      loading: false,
      data: {}
    },

    currentHEI: {
      loading: false,
      data: {}
    },
    surveys: {
      loading: false,
      data: []
    },

    heis: {
      loading: false,
      data: []
    },

    questionTypes: ["text", "select", "radio", "checkbox", "textarea"],

    },
    getters: {},
    actions: {

        getSurvey({commit}, id){
          commit("setCurrentSurveyLoading", true);
          return axiosClient
          .get(`/survey/${id}`)
          .then((res) => {
            commit("setCurrentSurvey", res.data);
            commit("setCurrentSurveyLoading", false);
            return res;
          })
          .catch((err) => {
            commit("setCurrentSurveyLoading", false);
            throw err;
          })
        },

        // Save Survey

        saveSurvey({ commit }, survey) {
            delete survey.image_url;
            let response;
            if(survey.id){
                response = axiosClient
                .put(`/survey/${survey.id}`, survey)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    return res;
                });

            }else{
                response = axiosClient.post("/survey", survey).then((res) => {
                    commit("setCurrentSurvey", res.data);
                    return res;
                });
            }

            return response;

        },
        // Ends here


        deleteSurvey({}, id){
          return axiosClient.delete(`/survey/${id}`);
        },


        // For Survey Page

        getSurveys({commit}) {
          commit('setSurveysLoading', true)
          return axiosClient.get("/survey").then((res) => {
            commit('setSurveysLoading', false)
            commit('setSurveys', res.data);
            return res;
          });
        },

        // HEIs Profile

        saveHEI({ commit }, hei) {
          let response;
          if(hei.id){
              response = axiosClient
              .put(`/heis_profile/${hei.id}`, hei)
              .then((res) => {
                  commit("setCurrentHEI", res.data);
                  return res;
              });

          }else{
              response = axiosClient.post("/heis_profile", hei).then((res) => {
                  commit("setCurrentHEI", res.data);
                  return res;
              });
          }

          return response;

      },

      getHEIs({commit}) {
        commit('setHEIsLoading', true)
        return axiosClient.get("/heis_profile").then((res) => {
          commit('setHEIsLoading', false)
          commit('setHEIs', res.data);
          return res;
        });
      },



      // Ends Here




    /* Login/Logout Actions */

        register({ commit }, user){
            return axiosClient.post('/register', user)
            .then(({data}) => {
                commit('setUser', data)
                return data;
            })
        },

        login({ commit }, user){
            return axiosClient.post('/login', user)
            .then(({data}) => {
                commit('setUser', data)
                return data;
            })
        },

        logout({ commit }) {
            return axiosClient.post('/logout')
            .then(response => {
                commit('logout')
                return response;
            })
        }

    },
    // Ends Here


    mutations: {

        // Survey Section

        setCurrentSurveyLoading: (state, loading) => {
          state.currentSurvey.loading = loading;
        },
        setCurrentSurvey: (state, survey) => {
          state.currentSurvey.data = survey.data;
        },

        setSurveysLoading: (state, loading) => {
          state.surveys.loading = loading
        },

        setSurveys: (state, surveys) => {
          state.surveys.data = surveys.data;
        },

        // Ends Here

        //Create HEI Profile

        setCurrentHEI: (state, hei) => {
          state.currentHEI.data = hei.data;
        },

        setHEIsLoading: (state, loading) => {
          state.heis.loading = loading
        },

        setHEIs: (state, heis) => {
          state.heis.data = heis.data;
        },


        // Ends Here

        logout: (state)=>{
            state.user.data = {},
            state.user.token = null;
            sessionStorage.removeItem('TOKEN');
        },

        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);

        }

    },
    modules: {}
});

export default store;
