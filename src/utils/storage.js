const storage = {
  ls: {
    get: function (key) {
      let data = window.localStorage.getItem(key)

      try {
        return JSON.parse(data)
      } catch (err) {
        return data
      }
    },

    set: function (key, data, bool) {
      if (typeof data === 'object') {
        data = JSON.stringify(data)
      }
      window.localStorage.setItem(key, data)
    },

    remove: function (key, bool) {
      window.localStorage.removeItem(key)
    },

    clear: function (bool) {
      window.localStorage.clear()
    }
  },
  ss: {
    get: function (key, bool) {
      var data = window.sessionStorage.getItem(key)

      try {
        return JSON.parse(data)
      } catch (err) {
        return data
      }
    },

    set: function (key, data, bool) {
      if (typeof data === 'object') {
        data = JSON.stringify(data)
      }
      window.sessionStorage.setItem(key, data)
    },

    remove: function (key, bool) {
      window.sessionStorage.removeItem(key)
    },

    clear: function (bool) {
      window.sessionStorage.clear()
    }
  }
}

export default storage
