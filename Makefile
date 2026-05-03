deploy:
	ng build --base-href "/reset-fest/"
	npx angular-cli-ghpages --dir=dist/reset-fest/browser