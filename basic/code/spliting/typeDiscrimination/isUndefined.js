export default function isUndefined(val) {
  // void 0确切返回全局环境下只读属性undefined。不受局部环境影响。
  return val === void 0
}