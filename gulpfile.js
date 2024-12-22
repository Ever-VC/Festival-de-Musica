import { src, dest, watch, series/*, parallel*/ } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export function js(done) {
    return src('src/js/app.js')
        .pipe(dest('build/js'));
    done();
}

export function css(done) {
    return src('src/scss/app.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', { sourcemaps: '.' }));
    done();
}

export function css_watch() {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
}

// -> Ejecuta las tareas js, css y css_watch en serie (una tras otra)
export default series(js, css, css_watch);
// -> Ejecuta las tareas js, css y css_watch en paralelo (al mismo tiempo)
//export default parallel(js, css, css_watch);