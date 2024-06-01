import { MicroCMSRelation } from './microcms-schema';

export type Article = {
  /**
   * 項目名
   */
  category?: MicroCMSRelation<unknown | null>
  /**
   * サブ項目名
   */
  subCategory?: MicroCMSRelation<unknown | null>
  /**
   * 項目内の表示順
   */
  order?: number
  /**
   * 内容
   */
  content?: string
}

export type ArticleCustomFieldSubContent = {
  /**
   * fieldId
   */
  fieldId: 'subContent'
  /**
   * サブコンテンツに設定
   */
  isSubContent: boolean
  /**
   * サブコンテンツタイトル
   */
  title?: string
  /**
   * サブ階層名（半角英数）
   */
  subName?: string
  /**
   * 表示順
   */
  order?: number
}

