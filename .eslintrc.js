module.exports = {
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', '@vue/standard'],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    // ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    //
    // 可能的错误 > 这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关
    //
    // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
    'for-direction': 'error',
    // getter 必须有返回值，并且禁止返回空，比如 return
    'getter-return': ['error',{allowImplicit: false}],
    // 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
    // @off 要求太严格了，有时需要在循环中写 await
    'no-await-in-loop': 'off',
    // 禁止与负零进行比较
    'no-compare-neg-zero': 'error',
    // 禁止在 if, for, while 里使用赋值语句，除非这个赋值语句被括号包起来了
    'no-cond-assign': ['error', 'except-parens'],
    // 禁止使用 console
    // @off console 的使用很常见
    'no-console': 'off',
    // 禁止将常量作为 if, for, while 里的测试条件，比如 if (true), for (;;)，除非循环内部有 break 语句
    'no-constant-condition': ['error', { checkLoops: false }],
    // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
    // 开启此规则，因为字符串中一般不会出现 Ctrl 键，所以一旦出现了，可能是一个代码错误
    'no-control-regex': 'error',
    // @fixable 禁止使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止在函数参数中出现重复名称的参数
    'no-dupe-args': 'error',
    // 禁止在对象字面量中出现重复名称的键名
    'no-dupe-keys': 'error',
    //使用四个空格表示缩进
    'indent': 'off',
    'vue/script-indent': ['error',4,{'baseIndent': 1}],
    'generator-star-spacing': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-undef': 'off'
  }
}
