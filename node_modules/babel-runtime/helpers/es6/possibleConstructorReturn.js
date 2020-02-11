import _typeof from "../../helpers/es6/typeof";
export default function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}