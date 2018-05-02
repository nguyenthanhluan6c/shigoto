export interface IResponse {
  data: IArticleList;
  success: boolean;
}

export interface IArticleList {
  articles: IArticle[];
  current_page: number;
  count: number;
  total_pages: number;
  total_count: number;
  loading: boolean;
  error: any;
}

export interface IArticle {
  id: string;
  title: string;
  content: string;
}

export const fromServer = (record: any): IArticle => ({
  id: record.id,
  title: record.title,
  content: record.content
});
