import _Symbol$hasInstance from "../../core-js/symbol/has-instance";
import _Symbol from "../../core-js/symbol";

function _instanceof2(left, right) { if (right != null && typeof _Symbol !== "undefined" && right[_Symbol$hasInstance]) { return right[_Symbol$hasInstance](left); } else { return left instanceof right; } }

export default function _instanceof(left, right) {
  if (right != null && typeof _Symbol !== "undefined" && right[_Symbol$hasInstance]) {
    return right[_Symbol$hasInstance](left);
  } else {
    return _instanceof2(left, right);
  }
}