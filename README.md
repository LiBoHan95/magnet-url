# Magnet Url

一个用于自动检测和复制磁力链接的 Tampermonkey 脚本。

![Magnet Icon](https://raw.githubusercontent.com/Xcec/magnet-url/main/icon.png)

## 功能特点

- 🔍 自动检测页面中的磁力链接
- 📋 一键复制单个磁力链接
- 📋 一键复制所有磁力链接
- 🔄 自动更新检测（每5秒一次，最多3次）
- 🎯 点击提示可继续更新
- 🎨 美观的界面设计
- 🚀 轻量级，不影响页面性能

## 安装方法

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击 [这里](https://raw.githubusercontent.com/Xcec/magnet-url/main/magnet-url.user.js) 安装脚本
3. 刷新页面即可使用

## 使用方法

1. 打开包含磁力链接的网页
2. 脚本会自动检测页面中的磁力链接
3. 点击磁力链接旁边的"复制"按钮复制单个链接
4. 点击右下角的"Copy All"按钮复制所有链接
5. 脚本会自动更新检测，最多3次
6. 达到3次后，点击提示可继续更新

## 许可证

本项目采用 [MIT License](LICENSE) 许可证。

## 贡献

欢迎提交 Issue 和 Pull Request！

## 作者

- [Xcec](https://github.com/Xcec)

## 更新日志

### v1.0.3
- 优化复制按钮样式
- 修复点击复制导致页面刷新的问题
- 添加复制成功反馈

### v1.0.2
- 添加点击更新提示继续更新功能
- 优化更新提示样式

### v1.0.1
- 添加最多更新3次的功能
- 添加更新次数提示

### v1.0.0
- 初始版本发布
- 基本功能实现 