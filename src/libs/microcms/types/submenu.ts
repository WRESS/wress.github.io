import { MicroCMSRelation } from './microcms-schema';

export type Submenu = {
  /**
   * 親メニュー
   */
  parent: MicroCMSRelation<unknown | null>
  /**
   * 表示名
   */
  name: string
  /**
   * 階層名（半角英数）
   */
  tier: string
  /**
   * 表示順
   */
  order: number
}

