clean:
	rm -r -f packages/core/build
	rm -r -f packages/compiler/build
	rm -r -f packages/platform/build
	rm -r -f sandbox/public/build

clean-hard:
	make clean
	rm -r -f node_modules
	rm -r -f packages/core/node_modules
	rm -r -f packages/compiler/node_modules
	rm -r -f packages/platform/node_modules
	rm -r -f sandbox/public/node_modules

build:
	cd packages/core && yarn build:prod
	cd packages/compiler && yarn build:prod
	cd packages/platform && yarn build:prod

dev:
	make build
	npx concurrently \
		"cd packages/compiler && yarn start" \
		"cd packages/core && yarn start" \
		"cd packages/platform && yarn start" \
		"cd sandbox && yarn start"

stats:
	make build
	cd sandbox && yarn build:stats