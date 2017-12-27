// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [{ name: 'aa', age: 100 }],
    name: "movie",
    age: 2017

  },
  //点击添加英雄按钮，执行此函数
  addhero: function () {
    // console.log(this.data.name)
    var user = { name: this.data.name, age: this.data.age }
    var tfboys = this.data.tfboys;
    tfboys.push(user);
    this.setData({
      tfboys: tfboys
    })
    console.log(this.data.tfboys);
    this.setData({
      name: '',
      age: ''
    })

  },
  bindKeyInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindKeyInputAge: function (e) {
    this.setData({
      age: e.detail.value
    })
  },
  deletehero: function (e) {
    var index = e.currentTarget.dataset.index;
    var movies = this.data.movies;
    movies.splice(index, 1);
    this.setData({
      movies: movies
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var url = 'https://movie.douban.com/j/search_subjects'

    var that = this;
    //application/json   {type=movie}
    //application/application/x-www-form-urlencoded   k1=v1&k2=v2
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      method: 'GET',
      dataType: 'json',
      data: {
        type: 'movie',
        tag: '热门',
        page_limit: '10',
        page_start: '0'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res)
        that.setData({
          movies: res.data.subjects
        })
      }
    })
  }
})