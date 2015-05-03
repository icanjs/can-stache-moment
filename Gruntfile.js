module.exports = function (grunt) {

  grunt.loadNpmTasks("steal-tools");

  grunt.initConfig({
    "steal-export": {
      dist: {
        system: {
          config: "package.json!npm"
        },
        outputs: {
          "+cjs": {},
          "+amd": {},
          "+global-js": {}
        }
      }
    }
  });
  grunt.registerTask("build",["steal-export"]);
};