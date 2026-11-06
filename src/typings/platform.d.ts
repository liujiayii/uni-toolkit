/**
 * 各端 JS-SDK 注入的局部全局对象
 * - tt：抖音小程序 requirePlugin 能力（下单/支付/退款）
 * - jd：京东小程序（支付）
 * - jWeixin：微信 JS-SDK（jWeixin）
 * - wx：不在本文件声明。完整微信小程序类型由 miniprogram-api-typings 提供
 *   （经 index.d.ts 的 reference 引入），此前在此窄化声明 `wx` 会与该包的
 *   `declare let wx` 撞 TS2403 重复声明，且缺少 getFileSystemManager 等成员。
 *
 * ⚠️ 本文件是 script（无 top-level export），`declare const` 顶层即全局。
 * 不可套 `declare global`——它仅对 module 文件生效，script 里是 no-op（会报 Cannot find name）。
 */

/**
 * 抖音小程序 requirePlugin 能力（下单/支付/退款）
 */
declare const tt: {
  requirePlugin: (pluginId: string) => {
    /** 创建订单 */
    createOrder: (options: Record<string, any> & {
      success?: (res: any) => void;
      fail?: (e: any) => void;
    }) => Promise<any>;
    /** 继续支付 */
    continueToPay: (options: Record<string, any> & {
      success?: (res: any) => void;
      fail?: (e: any) => void;
    }) => Promise<any>;
    /** 申请退款 */
    applyRefund: (options: Record<string, any> & {
      success?: (res: any) => void;
      fail?: (e: any) => void;
    }) => Promise<any>;
  };
};

/**
 * 京东小程序全局对象
 */
declare const jd: {
  /** 京东小程序支付能力 */
  miniPay: (options: Record<string, any> & {
    success?: (res: any) => void;
    fail?: (e: any) => void;
  }) => void;
};

/**
 * 微信 JS-SDK（jWeixin）全局对象
 */
declare const jWeixin: {
  /** 微信 JS-SDK 初始化 */
  config: (options: Record<string, any>) => void;
  /** 微信 JS-SDK ready 回调 */
  ready: (callback: () => void) => void;
  /** 微信 JS-SDK error 回调 */
  error: (callback: (error: any) => void) => void;
  [key: string]: any;
};
