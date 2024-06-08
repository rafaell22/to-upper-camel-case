function p(r) {
  let e = r;
  return e = n(e), e = t(e), e = c(e), e = e.toUpperCase(), e = o(e), e = a(e), e;
}
function n(r) {
  return r.replace(/ /g, "_");
}
function t(r) {
  return r.replace(new RegExp("(?<=[a-z])[A-Z]", "g"), (e) => `_${e}`);
}
function c(r) {
  return r.replace(/_+/, "_");
}
function o(r) {
  return r.replace(/^_*/, "");
}
function a(r) {
  return r.replace(/_*$/, "");
}
export {
  p as default
};
