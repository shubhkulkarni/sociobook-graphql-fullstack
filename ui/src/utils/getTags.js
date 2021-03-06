export const getTags = (str) => {
  //   const list = str.split(" ").filter((i) => i.startsWith("#"));
  //   if (!list.length) return str;

  //   const list2 = str.split(" ").map((i) => {
  //     if (i.startsWith("#")) {
  //       return <span className="hashTag">{i}</span>;
  //     }
  //     return i;
  //   });
  //   console.log(list2.join(" "));
  //   return list2.join(" ");

  const regex = /(^|\s)([#@][a-z\d-]+)/gi;
  console.log(
    str.replace(regex, (value) => <span className="hashTag">{value}</span>)
  );
  return str.replace(regex, (value) => (
    <span className="hashTag">{value}</span>
  ));
};
