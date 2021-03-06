const git = require("git-last-commit");
const { promisify } = require("util");
const envs = require("./envs.js");

// Holds cached commit info, so we don't need to
// re-read it every time.
let commitInfo = null;

async function getCommitInfo() {
  if (commitInfo === null) {
    try {
      commitInfo = await promisify(git.getLastCommit)();
    } catch (e) {
      // no previous commit
      commitInfo = {};
    }
  }
  return commitInfo;
}

module.exports = async function() {
  const bldInfo = {};

  const travisBuildNumber = process.env.TRAVIS_BUILD_NUMBER;
  if (travisBuildNumber === undefined) {
    bldInfo.isTravisBuild = false;
    bldInfo.description = `Locally built ${envs.currentEnv} build`;
  } else {
    const travisBuildId = process.env.TRAVIS_BUILD_ID;

    bldInfo.isTravisBuild = true;
    bldInfo.description = `Travis CI built ${
      envs.currentEnv
    } #${travisBuildNumber}`;

    // Add some useful Travis build meta data
    bldInfo.travisBuildNumber = travisBuildNumber;
    bldInfo.travisBuildId = travisBuildId;
    bldInfo.travisBuildUrl = `https://travis-ci.org/buildit/gravity-metalsmith-seed/builds/${travisBuildId}`;
  }

  const commitInfo = await getCommitInfo();
  bldInfo.commitHash = commitInfo.hash || "n/a";
  bldInfo.commitShortHash = commitInfo.shortHash || "n/a";
  if (commitInfo.hash) {
    bldInfo.commitGithubUrl = `https://github.com/buildit/gravity-metalsmith-seed/commit/${
      commitInfo.hash
    }`;
  } else {
    bldInfo.commitGithubUrl = "n/a";
  }

  return bldInfo;
};
