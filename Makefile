_packDepsLayer:
	rm -rf nodejs
	rm -f water-district-gateway-api-deps.zip
	mkdir nodejs
	cp package.json package-lock.json nodejs
	cd nodejs && npm install --omit=dev
	zip -vr water-district-gateway-api-deps.zip nodejs/

_publishDepsLayer:
	aws lambda publish-layer-version --layer-name water-district-gateway-api-deps \
    --description "water billing deps Layer" \
    --zip-file fileb://water-district-gateway-api-deps.zip \
    --compatible-runtimes nodejs \
    --compatible-architectures "arm64"

_build:
	npm run build

_deploy:
	npm run deploy

_start:
	npm run start

_deps:
	npm run install