import { src, dest, watch } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export function css(done) {
    return src('src/scss/app.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', { sourcemaps: '.' }));
    done();
}

export function css_watch() {
    return watch('src/scss/**/*.scss', css);
}