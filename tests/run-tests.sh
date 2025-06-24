#!/bin/sh
node "$(dirname "$0")/lint_js.js" && node "$(dirname "$0")/test_data.js"
