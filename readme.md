## Setup dev

1. install node version as per package.json
2. run `npm rebuild` to build executables for your platform

## Setup host

1. Create droplet with `node build/digital-ocean-run.js`
2. Add remote repos
    - `git remote add test ssh://root@les-epicuriens-du-logiciel.ca/root/les-epicuriens-du-logiciel-test-repo`
    - `git remote add prod ssh://root@les-epicuriens-du-logiciel.ca/root/les-epicuriens-du-logiciel-prod-repo`
3. Prepare host `ssh root@les-epicuriens-du-logiciel.ca 'bash -s' < prepare-host.sh`

## Run, test, serve

1. `npm run build`
2. `npm run test`
3. `npm run serve:dev|test|prod`

## Deploy

1. Create version and tag commit `npm version patch|minor|major -m "tag message"`
2. Deploy and run smoke tests `npm run deploy:test|prod`
3. When needed, rollback `npm run rollback:test|prod -- tag-name`
