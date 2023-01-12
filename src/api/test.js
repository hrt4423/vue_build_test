// import client from './client'

const client = require('./client.js')

const ncmb = client.connect()

// クラスのTestClassを作成
const TestClass = ncmb.DataStore('TestClass')

// データストアへの登録
const testClass = new TestClass()
testClass.set('message', 'Hello, NCMB! 1/12 1:47')
testClass.save()
  .then(function () {
    // 保存に成功した場合の処理
  })
  .catch(function (err) {
    // 保存に失敗した場合の処理
    throw new Error(err.message)
  })
