// ncmbモジュールの読み込み
const NCMB = require('ncmb')

const apiKey = 'dee51657f9ee6f0b90fff0b1a9fa69dd557a23475814d9b9eadc7154226e41a8'
const clientKey = '8b9cbea8e8391c33cb9bd74f4177a177df679ed4d3483ccb64ac6f0ac52e1319'

const ncmb = new NCMB(apiKey, clientKey)

// クラスのTestClassを作成
const TestClass = ncmb.DataStore('TestClass')

// データストアへの登録
const testClass = new TestClass()
testClass.set('message', 'Hello, NCMB! 1/12 1:45')
testClass.save()
  .then(function () {
    // 保存に成功した場合の処理
  })
  .catch(function (err) {
    // 保存に失敗した場合の処理
    throw new Error(err.message)
  })
