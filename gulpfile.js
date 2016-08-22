var gulp = require('gulp');

const imagemin = require('gulp-imagemin');
var jpegoptim = require('imagemin-jpegoptim');

var imageResize = require('gulp-image-resize-ar');

gulp.task('imageMin', () =>
	gulp.src('images/*.jpg')
		.pipe(
              imagemin([
                jpegoptim({
                    max:70
                })
        ]))
		.pipe(gulp.dest('imageMin'))
);


gulp.task('lossLess', () =>
	gulp.src('images/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('lossLess'))
);



gulp.task('imageResize', () =>{
          var array = [1920, 1280,360,414,768];
          array.forEach(a =>{
              gulp.src('images/*.jpg')
                .pipe(imageResize({
                  width:a,
                  quality: 1,
                  imageMagick:true
                }))
                .pipe(gulp.dest('imageResize/scale_'+a));
          });
    }
);