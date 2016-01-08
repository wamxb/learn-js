```js
router.beforeEach(function (transition) {
  window.scrollTo(0, 0)
  if (transition.to.auth) {
    // 对用户身份进行验证...
  }
})
```