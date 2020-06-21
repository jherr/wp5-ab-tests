import variants from "ab-manager/variants";

export default (test) =>
  variants[test][Math.floor(Math.random() * variants[test].length)];
