var gulp = require("gulp");
var server = require("gulp-webserver"); //起服务拦截前端请求

gulp.task("devServer", function() {
    return gulp.src("src")
        .pipe(server({
            port: 9090,
            open: true
        }))
})