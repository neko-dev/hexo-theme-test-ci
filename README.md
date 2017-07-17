# hexo-theme-test-ci

使用 Travis CI 持续集成来测试 [Material 主题](https://github.com/viosey/hexo-theme-material)

- [主题官网](https://material.viosey.com)
- [主题 GitHub](https://github.com/viosey/hexo-theme-material)
- [主题 Demo(Viosey's Blog)](https://blog.viosey.com)


[![Version](https://img.shields.io/badge/version-1.4.0-green.svg?style=flat-square)]()

[![Hexo](https://img.shields.io/badge/hexo-3.0+-green.svg?style=flat-square)](https://hexo.io)
[![node.js](https://img.shields.io/badge/node.js-6.0%2B-green.svg?style=flat-square)](https://nodejs.org/)

[![Build Status](https://img.shields.io/travis/neko-dev/hexo-theme-test-ci.svg?style=flat-square)](https://travis-ci.org/neko-dev/hexo-theme-test-ci)

## Travis ENV

- GitHubEmail : The E-mail for GitHub.
- GitHubUser : The username of GitHub.
- GitHubKEY : The `Personal Access Token` for GitHub.
- GitHubRepo : The repo for the deployment. Format example `nekodev/nekodev.github.io` .
- DeployBranch : Specify the branch for deployment at `${GitHubRepo}` .