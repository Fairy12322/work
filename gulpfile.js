var gulp = require("gulp");
var sass = require("gulp-sass"); //编译sass
var auto = require("gulp-autoprefixer"); //自动添加后缀
var clean = require("gulp-clean-css"); //压缩css
var server = require("gulp-webserver"); //起服务拦截前端请求