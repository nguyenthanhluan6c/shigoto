class Api::V1::ArticlesController < Api::V1::Base::AuthorizeController
  def index
    articles = Article.all.page(params[:page]).per Settings.per_page.default
    render_success data: Api::V1::ListArticleSerializer.new(articles).generate
  end

  def show
    article = Article.find params[:id]
    render_success data: Api::V1::ArticleSerializer.new(article)
  end
end
