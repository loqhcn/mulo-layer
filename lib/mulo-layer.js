import { openBlock as l, createElementBlock as d, Fragment as _, createCommentVNode as p, createElementVNode as c, pushScopeId as m, popScopeId as u, h as v, render as g } from "vue";
const f = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, y = {
  setup() {
    return {};
  },
  data() {
    return {
      visible: !0
    };
  },
  methods: {
    close() {
      console.log("close");
    }
  }
}, h = (e) => (m("data-v-58d2ec13"), e = e(), u(), e), x = { key: 0 }, $ = { class: "layer-content" }, k = /* @__PURE__ */ h(() => /* @__PURE__ */ c("div", { class: "msg" }, "消息内容", -1));
function I(e, t, o, s, n, i) {
  return l(), d(_, null, [
    n.visible ? (l(), d("div", x, " 弹出层插件 ")) : p("", !0),
    c("div", $, [
      c("div", {
        class: "close",
        onClick: t[0] || (t[0] = (E) => i.close())
      }, "关闭"),
      k
    ])
  ], 64);
}
const b = /* @__PURE__ */ f(y, [["render", I], ["__scopeId", "data-v-58d2ec13"]]);
let r = {
  $message(e, t) {
    let o = v(b);
    console.log(o);
    let s = document.createElement("div");
    g(o, s), document.body.append(s);
  }
}, a = {};
a.install = (e) => {
  console.log("MuloAlert", r), e.config.globalProperties.$alert = r.$message;
};
const B = (e) => {
  console.log("install", e), e.use(a);
}, C = { install: B };
export {
  a as Layer,
  C as default
};
