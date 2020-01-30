expect.extend({
    toContainNoFailedChecks(failedChecks) {
        const errorText = 'The following checks have failed:\n\n';
        return {
            pass: failedChecks.length === 0,
            message: () => `${errorText}${failedChecks.map(c => `${c.name}\n\t${c.message}`).join('\n\n')}`,
        };
    },
});

export default class Checker {
    constructor() {
        this.checks = [];
    }

    add(check) {
        this.checks.push(check);

        return this;
    }

    disable(name) {
        const index = this.checks.findIndex(c => c.name === name);
        if (index >= 0) {
            this.checks.splice(index, 1);
        }
    }

    async runAll() {
        const failedChecks = [];

        await Promise.all(
            this.checks.map(
                async (check) => {
                    if (!(await check.check())) {
                        failedChecks.push(check);
                    }
                }),
        );

        expect(failedChecks).toContainNoFailedChecks();
    }
}
