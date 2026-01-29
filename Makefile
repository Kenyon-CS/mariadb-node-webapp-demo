.DEFAULT_GOAL := help

help:
	@echo "make install"
	@echo "make run PORT=xxxx"

install:
	npm install

checkport:
	@if [ -z "$(PORT)" ]; then \
		echo "ERROR: PORT required (e.g. PORT=4101)"; \
		exit 1; \
	fi

run: checkport
	PORT=$(PORT) node server.js
