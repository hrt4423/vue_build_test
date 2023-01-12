import ncmb from './client'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      ncmb.User.login(authInfo.userName, authInfo.password)
        .then(ncmb => resolve({ token: ncmb.User.getCurrentUser() }))
        .catch(err => {
          reject(new Error(err.message))
        })
    })
  }
}
