import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import * as types from './mutations_types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Vuex.Store({
  state: {
    count: 0{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  mutations: {
    [types.INCREMENT_COUNT] (state) {
      state.count ++{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    [types.DECREMENT_COUNT] (state) {
      state.count --{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  actions: {
    increment ({commit, state}) {
      setTimeout(function () {
        commit(types.INCREMENT_COUNT){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }, 1000){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
