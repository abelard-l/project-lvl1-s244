install:
	yarn install

start:
	yarn run babel-node src/bin/brain-games.js

start-brain-even:
	yarn run babel-node src/bin/brain-even.js

start-brain-calc:
	yarn run babel-node src/bin/brain-calc.js

start-brain-gcd:
	yarn run babel-node src/bin/brain-gcd.js

start-brain-balance:
	yarn run babel-node src/bin/brain-balance.js

publish: 
	yarn publish

lint:
	npm run eslint