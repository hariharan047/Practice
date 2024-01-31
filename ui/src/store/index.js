import { createStore } from "vuex";

export default createStore({
  state: {
    registration: [],
    users: [
      { id: 1, name: "Hari", registered: false },
      { id: 2, name: "Haran", registered: false },
      { id: 3, name: "Raj", registered: false },
      { id: 4, name: "Kumar", registered: false },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
