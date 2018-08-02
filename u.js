function merge(content, values) {
  console.log(values);
  a = content.replace("\%first_name\%", values["first_name"]);
  console.log(a);
  return content;
}


module.exports.merge = merge;