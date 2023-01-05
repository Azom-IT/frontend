#!/usr/bin/env node

import { execSync, exec } from 'child_process';

const APP = process.argv.slice(2)[0];
const FORCE_BUILD_BRANCH = 'dev';
const GIT_BRANCH = execSync('git branch --show-current')
  .toString('utf-8')
  .replace('\n', '');

console.log(`check build need for ${APP}`);
if (FORCE_BUILD_BRANCH === GIT_BRANCH) {
  console.log('current branch is dev, force build');
  process.exit(1);
} else {
  console.log(`current branch is not dev, check build need for ${APP}`);
  const IGNORE_CMD = `yarn dlx nx-ignore ${APP}`;

  exec(IGNORE_CMD).on('close', (code) => {
    console.log(
      code === 0 ? `ignore build for ${APP}` : `need to build ${APP}`,
    );
    process.exit(code);
  });
}
