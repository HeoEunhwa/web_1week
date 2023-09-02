var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '홈페이지' }); // indes.ejs 파일을 렌더링 해주라 
  // render : 무엇을 출력해주겠다.
  // res = 응답
  // 출력해주는 파일은 view 넣ㅇ
});

module.exports = router;
