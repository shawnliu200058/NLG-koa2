// 导入 Joi 来定义验证规则
const Joi = require('joi')

// alphanum 必须为 0-9 a-z A-Z 组成的字符串
const name = Joi.string().alphanum().min(1).max(10).required()
// 6-15 位且不能为空格
const password = Joi.string()
  .pattern(/^[\S]{6,15}$/)
  .required()

// 定义验证注册和登录表单数据的规则对象
exports.reg_login_schema = Joi.object({
  name,
  password
})
