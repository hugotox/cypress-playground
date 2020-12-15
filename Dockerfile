FROM cypress/browsers:node14.7.0-chrome84
# avoid too many progress messages
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1
ADD . /e2e
WORKDIR /e2e
RUN yarn install --production
ENTRYPOINT [ "yarn", "test" ]
