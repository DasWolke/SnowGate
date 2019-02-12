#!/bin/bash
VERSION=$( node -p "require('./package.json').version")
DOCKER_REPO=snowgate
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker tag $DOCKER_USERNAME/$DOCKER_REPO $DOCKER_USERNAME/$DOCKER_REPO:$VERSION
docker push $DOCKER_USERNAME/$DOCKER_REPO:$VERSION