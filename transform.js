function transform(file, api) {
  const j = api.jscodeshift;
  let s = j(file.source);

  s.find(j.TSTypeReference)
    .filter(p => {
      return p.value.typeName.name === "Array";
    })
    .replaceWith(p => {
      let originalParams = p.value.typeParameters.params;
      if (originalParams.length == 1) {
        return j.tsArrayType(originalParams[0]);
      }

      return p;
    });
  return s.toSource();
}

module.exports = transform;
module.exports.parser = "ts";
