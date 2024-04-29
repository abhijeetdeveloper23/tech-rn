# Setup
- Single step setup (requires your Vault credentials):
  - `make init`


# Uploading Apps to Browserstack
- [Web interface](https://app-automate.browserstack.com/dashboard/v2/get-started#upload-app)
- CLI:
  - Provide the absolute file path of the app bundle in the appropriate `.env` field, `ANDROID_APP_PATH` or `IOS_APP_PATH`.
  - Run `make upload-bstack-automate` followed by the platform.
    - _`make upload-bstack-automate android`_
    - _`make upload-bstack-automate ios`_
  - The upload will return an ID which you will use to specify which build to run tests against, e.g. _`bs://3d35e67ddefec33cd21851e42ea97edd5ee148de`_

# Running tests in BrowserStack Automate
You will need the ID returned from the `make upload-bstack` to specify the exact build you'd like to run tests against. __This ID can also be found in the BrowserStack web interface__.
- Provide the ID you'd like to test in the appropriate `.env` field, `BROWSERSTACK_APP_ID_ANDROID`
or `BROWSERSTACK_APP_ID_IOS`.
- `make test-bstack` followed by the platform (`ios` or `android`).
  - _`make test-bstack android`_
  - _`make test-bstack ios`_