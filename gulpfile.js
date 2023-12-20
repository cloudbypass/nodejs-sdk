import gulp from 'gulp';
import fs from 'fs-extra';
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2));

gulp.task('default', async function () {
    console.log('hello!');
});

const clear = gulp.task('clear', async function () {
    await fs.emptyDir('./dist/')
});

const bower = gulp.task('bower', async function () {
    const npm = JSON.parse(await fs.readFile('package.json'));
    const bower = JSON.parse(await fs.readFile('bower.json'));

    const fields = ['name', 'description', 'version', 'homepage', 'license', 'keywords'];

    for (let i = 0, l = fields.length; i < l; i++) {
        const field = fields[i];
        bower[field] = npm[field];
    }

    await fs.writeFile('bower.json', JSON.stringify(bower, null, 2));
});

const packageJSON = gulp.task('package', async function () {
    const CONTRIBUTION_THRESHOLD = 3;

    const npm = JSON.parse(await fs.readFile('package.json'));
    await fs.writeFile('package.json', JSON.stringify(npm, null, 2));
});

const env = gulp.task('env', async function () {
    var npm = JSON.parse(await fs.readFile('package.json'));

    const envFilePath = './lib/env/data.js';

    await fs.writeFile(envFilePath, Object.entries({
        VERSION: (argv.bump || npm.version).replace(/^v/, '')
    }).map(([key, value]) => {
        return `export const ${key} = ${JSON.stringify(value)};`
    }).join('\n'));
});

const version = gulp.series('bower', 'env', 'package');

export {
    bower, env, clear, version, packageJSON
}
