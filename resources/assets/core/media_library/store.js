const types = {
  SET_FILTER: 'SET_FILTER',
  SET_FOLDER_LIST: 'SET_FOLDER_LIST',
  SET_MEDIA_LIST: 'SET_MEDIA_LIST',
  SET_PATH: 'SET_PATH',
  SET_PAGINATE: 'SET_PAGINATE',
  DELETE_FOLDER: 'DELETE_FOLDER',
  ADD_FOLDER: 'ADD_FOLDER',
  ADD_MEDIA: 'ADD_MEDIA',
  SET_MEDIA: 'SET_MEDIA'
}

/**
 * 필터 초기 값
 */
const initialFilter = {
  folder_id: null,
  page: 1
}

const state = {
  path: [],
  folder: [],
  media: [],
  paginate: {},
  filter: initialFilter
}

const getters = {
  media: state => (id = null) => {
    if (id !== null) {
      return state.media.find(v => v.id === id)
    }

    return state.media
  },
  prevMedia: state => (id) => {
    let idx = 0

    idx = state.media.findIndex((v) => {
      if (v.id === id) {
        return true
      }
    })

    idx = idx - 1

    if (idx < 0) {
      idx = 0
    }

    return state.media[idx]
  },
  nextMedia: state => (id) => {
    let idx = 0

    idx = state.media.findIndex((v) => {
      if (v.id === id) {
        return true
      }
    })

    idx = idx + 1

    if (idx > state.media.length - 1) {
      idx = state.media.length - 1
    }

    return state.media[idx]
  },
  folder (state) {
    return state.folder
  },
  path (state) {
    return state.path
  },
  currentFolder (state) {
    return state.path[state.path.length - 1]
  },
  parentFolder (state) {
    if (state.path.length <= 1) {
      return {}
    }

    return state.path[state.path.length - 2]
  },
  paginate (state) {
    const paginate = state.paginate
    return {
      current: paginate.current_page,
      last: paginate.last_page,
      perpage: paginate.per_page,
      path: paginate.path,
      totalCount: paginate.total,
      from: paginate.from,
      to: paginate.to,
      firstUrl: paginate.first_page_url,
      lastUrl: paginate.last_page_url,
      prevUrl: paginate.prev_page_url,
      nextUrl: paginate.next_page_url
    }
  }
}

const actions = {
  setFilter ({ commit, dispatch, state }, filter = {}, reset = false) {
    commit(types.SET_FILTER, filter, reset)
    return dispatch('loadData', state.filter)
  },
  loadData ({ commit }, filter = {}) {
    return new Promise((resolve, reject) => {
      window.XE.get('media_library.index', filter)
        .then((response) => {
          commit(types.SET_FOLDER_LIST, response.data.folder)
          commit(types.SET_MEDIA_LIST, response.data.file.data)
          commit(types.SET_PAGINATE, response.data.file)
          commit(types.SET_PATH, response.data.path)
          resolve()
        })
    })
  },
  addMedia ({ commit }, payload) {
    commit(types.ADD_MEDIA, payload)
  },
  replaceMedia ({ commit }, payload) {
    commit(types.SET_MEDIA, payload)
  },
  viewFolder ({ dispatch, getters }, payload) {
    dispatch('setFilter', { folder_id: payload }).then(function () {
      return getters['parentFolder']
    })
  },
  addFolder ({ commit }, payload) {
    commit(types.ADD_FOLDER, payload)
  },
  deleteFolder ({ commit }, folderId) {
    window.XE.delete('media_library.drop', {
      target_ids: [folderId]
    })
      .then(() => {
        commit(types.DELETE_FOLDER, folderId)
      })
  }
}

const mutations = {
  [types.SET_FILTER] (state, filter, reset = false) {
    if (reset) {
      state.filter = { ...initialFilter, ...filter }
    } else {
      state.filter = { ...state.filter, ...filter }
    }
  },
  [types.SET_FOLDER_LIST] (state, payload) {
    state.folder = payload
  },
  [types.SET_MEDIA_LIST] (state, payload) {
    state.media = payload
  },
  [types.SET_PAGINATE] (state, payload) {
    state.paginate = payload
  },
  [types.SET_PATH] (state, payload) {
    state.path = payload
  },
  [types.DELETE_FOLDER] (state, payload) {
    state.folder.splice(state.folder.findIndex(item => item.id === payload), 1)
  },
  [types.ADD_FOLDER] (state, payload) {
    state.folder.push(payload)
  },
  [types.ADD_MEDIA] (state, payload) {
    state.media = [...payload, state.media]
  },
  [types.SET_MEDIA] (state, payload) {
    const mediaIndex = state.media.findIndex(item => item.id === payload.id)
    state.media[mediaIndex] = Object.assign(state.media[mediaIndex], payload.data)
  }
}

export const module = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
