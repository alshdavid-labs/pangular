build:
	cd core && yarn build
	cd compiler && yarn build

dev:
	make build
	npx concurrently \
		"cd compiler && yarn start" \
		"cd core && yarn start" \
		"cd sandbox && yarn start"