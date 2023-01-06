import store from '../store'

// マッチしたルートにおいて、メタフィールドに`requiresAuth`が付与されている場合は
// ログインした際に付与される認証トークンがあるかどうかチェックする
// 本来なら認証トークンの検証まですべき

export const authorizeToken = (to, from, next) => {
  // メタフィールドのチェック
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 認証トークンの有無をチェック
    if (!store.state.auth || !store.state.auth.token) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else if (to.path === '/login' && store.state.auth.token) {
    next({ path: '/' })
  } else {
    next()
  }
}
