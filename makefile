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