const isCallExpressionWithNamespace = (node, source) => {
  const namespaces = source.split(".");
  const namespaceSize = namespaces.length;
  let name;
  let current = node.callee;

  let loopCount = 1;
  while ((name = namespaces.pop())) {
    if (!current || !current.property) {
      continue;
    }
    if (current.property.name !== name) {
      return false;
    }
    ++loopCount;
    current = current.object;
  }
  return namespaceSize === loopCount;
};

module.exports = {
  isCallExpressionWithNamespace
};
