# Changelog

## 0.8.0

### Minor Changes

- [#335](https://github.com/liujiayii/uni-toolkit/pull/335) [`fc97bc1`](https://github.com/liujiayii/uni-toolkit/commit/fc97bc1a8897323a05e4114625d80cb38fbb4184) Thanks [@liujiayii](https://github.com/liujiayii)! - `uni-toolkit/types` 不再窄化声明全局 `wx`：完整微信小程序类型交给 miniprogram-api-typings（新增 dependencies，经 `src/typings/index.d.ts` 的 reference 引入）。
  
  此前在此处 `declare const wx` 只声明了 `openCustomerServiceChat` 一个成员，存在两个问题：
  
  1. 消费端若同时引入 miniprogram-api-typings，两处全局 `wx` 声明类型不同，直接撞 TS2403 重复声明；
  2. 窄化声明缺少 `getFileSystemManager` 等成员，导致消费端（如 @wot-ui/ui 组件源码）引用这些 API 时类型报错。
  
  `openCustomerServiceChat` 在 miniprogram-api-typings 中已有更完整的声明（含 OpenCustomerServiceChatOption 选项类型），本包不再重复。

## 0.7.0

### Minor Changes

- [`4f0333e`](https://github.com/liujiayii/uni-toolkit/commit/4f0333e0444b35bff96ca0faffb05fbaecaadba5) Thanks [@liujiayii](https://github.com/liujiayii)! - 新增 `./types` 导出入口，将全局类型声明拆分为 uni/platform/window/umtrack 多文件；消费端可在 tsconfig 的 `"types"` 数组加 `"uni-toolkit/types"` 引入 uni 平台 / 各端 JS-SDK / H5 window 的全部全局补充声明。构建脚本同步复制 `src/typings` 到 `dist/types`。
