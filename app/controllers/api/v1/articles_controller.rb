class Api::V1::ArticlesController < Api::V1::Base::AuthorizeController
  def index
    articles = Article.all.page(params[:page]).per Settings.per_page.default
    render_success data: Api::V1::ListArticleSerializer.new(articles).generate
  end

  def show
    article = Article.find params[:id]
    render_success data: Api::V1::ArticleSerializer.new(article)
  end

  def edit
    article = current_user.articles.find params[:id]
    render_success data: Api::V1::ArticleSerializer.new(article)
  end

  def update
    article = current_user.articles.find params[:id]
    article.update! article_params
    render_success data: Api::V1::ArticleSerializer.new(article)
  end

  def create
    article = current_user.articles.create! article_params
    render_success data: Api::V1::ArticleSerializer.new(article)
  end

  def destroy
    article = current_user.articles.find params[:id]
    article.destroy!
    render_success
  end

  private

  def article_params
    params.permit(:id, :title, :content)
  end
end
