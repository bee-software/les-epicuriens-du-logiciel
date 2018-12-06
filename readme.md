## Setup

1. Run `npm rebuild` to build executables for your platform

## Run, test, serve

1. `npm run build`
2. `npm run test`
3. `npm run serve:dev|test|prod`

## Deploy

1. Create version and tag commit `npm version patch|minor|major -m "tag message"`
2. Commit to origin `git push --follow-tags`
3. Deploy and run smoke tests `npm run deploy:test|prod`
4. When needed, rollback `npm run rollback:test|prod -- tag-name`

## Setup host

1. Create droplet with `node build/digital-ocean-run.js`
2. Add remote repos
    - `git remote add test ssh://root@bee.software/root/bee-software-test-repo`
    - `git remote add prod ssh://root@bee.software/root/bee-software-prod-repo`
3. Prepare host `ssh root@bee.software 'bash -s' < prepare-host.sh`