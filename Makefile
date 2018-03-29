install:
	yarn install

start:
	yarn run babel-node src/bin/brain-games.js

start-brain-even:
	yarn run babel-node src/bin/brain-even.js

publish: 
	yarn publish

lint:
	npm run eslint