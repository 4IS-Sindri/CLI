# While this is a Makefile for using Docker, it's a Node.js app underneath so it
# has a package.json file we can pull properties from.

# In order to read the package.json file, you can use this function For nested
# properties, use dot notation (e.g. "dependencies.express").
define GetFromPkg
	$(shell node -p "require('./package.json').$(1)")
endef

# Parses the .env file and sets the environment variables:
# API_PREFIX & API_PORT
include .env

# Variables to pull from the package.json file.
PKG_NAME := $(call GetFromPkg,name)
PKG_VERSION := $(call GetFromPkg,version)
PROJECT_URL := $(call GetFromPkg,homepage)
AUTHOR := $(call GetFromPkg,author.name)

# A test command to verify the environment variables are being set.
display-variables:
	@echo "PKG_NAME = $(PKG_NAME)"
	@echo "PKG_VERSION = $(PKG_VERSION)"
	@echo "PROJECT_URL = $(PROJECT_URL)"
	@echo "AUTHOR = $(AUTHOR)"

# Run the following cammands in the following order:
# 1. Stop the container.
# 2. Delete the container and image.
# 3. Build a new version of the image.
# 4. Run the container.
# 5. Tail/follow the container logs.
rebuild: build stop clean start logs

# Delete the Docker container and image.
clean:
	@rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml

# Build a new version of the image with the current package.json version and
# latest as a tag.
build:
	@pnpm build

# Add a new tag to the git repository and push it to GitHub.
add-tag:
	@echo "Adding v$(version) tag..."
	@git tag v$(version) -m "Release v$(version)"

# Push all changes and tags to the remote repository.
push:
	@echo "Pushing to GitHub..."
	@git push
	@git push --tags

# Executes the Prettier CLI command to format/clean up the codebase.
pretty:
	@prettier --write .
