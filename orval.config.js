module.exports = {
  petstore: {
    input: "./swagger.json",
    output: {
      target: "./petstore.ts",
      client: "react-query",
    },
  },
};
