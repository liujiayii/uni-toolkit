---
"uni-toolkit": minor
---

`uni-toolkit/types` 不再窄化声明全局 `wx`：完整微信小程序类型交给 miniprogram-api-typings（新增 dependencies，经 `src/typings/index.d.ts` 的 reference 引入）。

此前在此处 `declare const wx` 只声明了 `openCustomerServiceChat` 一个成员，存在两个问题：

1. 消费端若同时引入 miniprogram-api-typings，两处全局 `wx` 声明类型不同，直接撞 TS2403 重复声明；
2. 窄化声明缺少 `getFileSystemManager` 等成员，导致消费端（如 @wot-ui/ui 组件源码）引用这些 API 时类型报错。

`openCustomerServiceChat` 在 miniprogram-api-typings 中已有更完整的声明（含 OpenCustomerServiceChatOption 选项类型），本包不再重复。
