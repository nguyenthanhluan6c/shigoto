class Api::V1::ArticlesController < Api::V1::AuthorizeController
  def index
    articles = Article.all.page(params[:page]).per Settings.per_page.default
    render_success data: Api::V1::ListArticleSerializer.new(articles).generate
  end
end
