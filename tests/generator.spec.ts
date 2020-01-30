const path = require('path');
const cli = require('../src/cli');

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const buildDirectory = path.join(__dirname, 'build');

jest.setTimeout(1000 * 60 * 15);

function createProjectFromTemplate(targetKind, done) {
    const projectName = `test-${targetKind}`;
    const projectDirectory = `${buildDirectory}/${projectName}`;

    const create = cli.commands.create.fn;

    console.log(buildDirectory);

    create([projectName], {
            config: {
                targetKind,
                sentryDsn: 'test-token',
                gridonicApiToken: 'any'
            },
        }, {
            cwd: buildDirectory,
        },
        async (error) => {
            expect(error).toBeFalsy();

            try {
                const result = await exec(`cd ${projectDirectory} && npm run build`);

                // no warnings
                expect(result.stdout).not.toContain('Warning');
            } catch (error) {
                // no errors
                expect(error).toBeFalsy();
            }

            done();
        }
    )
    ;
}

describe('Generator integration tests', () => {
    beforeAll(async () => {
        await exec('rm -rf tests/build/*');
    });

    test('create pwa project', async (done) => {
        createProjectFromTemplate('vue', done);
    });

    test('create vue relay project', async (done) => {
        createProjectFromTemplate('vue-relay', done);
    });

    test('create library project', async (done) => {
        createProjectFromTemplate('library', done);
    });
});
