build:
	cd core && yarn build:prod
	cd compiler && yarn build:prod
	cd platform && yarn build:prod

dev:
	make build
	npx concurrently \
		"cd compiler && yarn start" \
		"cd core && yarn start" \
		"cd platform && yarn start" \
		"cd sandbox && yarn start"

stats:
	make build
	cd sandbox && yarn build:stats