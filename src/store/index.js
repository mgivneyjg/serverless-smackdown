import {reactive,readonly} from 'vue'

const state = reactive({
  username: 'mgivney',
  leaders: [],
  game: {},
  playedGames: [
    { id: "1", username: 'mgivney', date: '20220706', complete: true, score: 300, correct: [1,3,5]},
    { id: "2", username: 'mgivney', date: '20220707', complete: true, score: 100, correct: [1,3,5]},
    { id: "3", username: 'mgivney', date: '20220708', complete: true, score: 500, correct: [1,3,5]},
    { id: "4", username: 'mgivney', date: '20220709', complete: true, score: 200, correct: [1,3,5]},
    { id: "5", username: 'mgivney', date: '20220710', complete: true, score: 300, correct: [1,3,5]},
    { id: "6", username: 'mgivney', date: '20220711', complete: true, score: 400, correct: [1,3,5]},
  ]
})

const methods = {
  /** Game Actions */
  getGameByDate(gameDate){

  },

  getGamesByUser(){
    

  },

  saveGame(game){
  },

  /** Questions */
  getQuestionById(id){
    return {}
  },

  /** leaders */
  getAllTimeLeaders(){
  },

  getMonthlyLeaders(month){
  }

}

export default {
  state: readonly(state),
  methods

}