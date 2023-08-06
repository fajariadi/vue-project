import axios from "axios"


const state = () => ({
  list: [],
  series: [],
  favorite:[]
});

const mutations = {
  setList(state, param) {
    state.list = param;
  },
  setSeries(state, param) {
    state.series = param;
  },
  setFavorite(state, param) {
    state.favorite = param;
  },
};

const actions = {
  fetchSeries(store) {
    axios.get("https://api.themoviedb.org/3/discover/tv", {
      params: {
        api_key : 'afbadf7a66916fc38e97aee1716a304d',
      }
    })
    .then((response) => {
      // console.log(response.data.results)
      store.commit("setSeries", response.data.results)
    })
  },
  fetchMovies(store) {
    axios.get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key : 'afbadf7a66916fc38e97aee1716a304d',
      }
    })
      .then((response) => {
        // console.log(response.data.results)
        store.commit("setList", response.data.results)
      })
  },
  fetchFavorites(store) {
    axios.get("https://api.themoviedb.org/3/account/8dabf2751829b7190344769bfedc1c9df1c0aa86/favorite/movies", {
      params: {
        api_key : 'afbadf7a66916fc38e97aee1716a304d',
      }
    })
      .then((response) => {
        console.log(response.data.results)
        store.commit("setFavorite", response.data.results)
      })
  },
};

export default{
  state,
  mutations, 
  actions
}
