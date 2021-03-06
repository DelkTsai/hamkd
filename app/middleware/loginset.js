module.exports =  (opt, app) => {
  return function *( next ){
    // 判断session中的loginUser是否为空，为空，则需要登录。
    this.locals.userId = this.session.loginUser ? this.session.loginUser._id : null;

    yield next;
    // 处理后续事情
  }
};
