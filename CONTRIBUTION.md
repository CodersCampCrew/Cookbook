# Installation

To start you need to clone https://github.com/CodersCampCrew/Cookbook.git git repository.

## Requirements

Application requires few tools installed on your system

* nodejs
* yarn

# Git workflow

Each change in this repository should be made by pull request. At least two approvals are required to merge. After merge process every temporary branch should be deleted (except dev branch).

Branch types:
 - main - last stable version of app
 - dev - incoming changes to the next release, should be merged to main
 - feature - any new code, should be merged into dev, eg. `feature/integration-with-api`
 - bugfix - necessary fixes for non-production code, should be merged into feature or dev branch, eg. `bugfix/login-form-validation`
 - hotfix - necessary fixes for production code, should be merged into main branch, eg. `hotfix/missing-unauthorized-user-redirect`

## Commit messages

Commit messages should contain useful informations about what was done. Ideally it should be one sentence. First word of commit should be capitalized verb. The whole commit should end without a dot.  
Commits should introduce small chunks of changes so that developer can easily check and compare what was changed. Large commits should be splited into smaller, eg. if you work over file introducing button component and then place the button on the page, those should be two separate commits - `Create button component`, `Integrate button with the page`.

# List of things to avoid doing in project's code

- Using class components (with an exception for Error Boundary).
- Using syntax other than `const ComponentName = ({ optionalProp, ... }) => ...` for function components.
- Using ES5 syntax.
- Not using `.test.js` extension for files with automated tests.
- Not using `.module.scss` extension for style files.
- Using `.jsx` extension for React component files.
- Anything other than `PascalCase` for React component names and React component files.
- Anything other than `camelCase` for normal javascript files, style files, images and javascript variables (const, let).
- Anything other than `kebab-case` for naming in style files.
- Not using `PropTypes` when component have props.
