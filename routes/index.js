
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log('in a route: ', require('../app').set('mailTemplatesDir'));
  res.render('index', { title: 'Express' })
};
