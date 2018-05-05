class Api::V1::ListArticleSerializer
  attr_reader :articles

  def initialize articles
    @articles = articles
  end

  def generate
    {
      current_page: articles.current_page,
      count: articles.size,
      total_pages: articles.total_pages,
      total_count: articles.total_count,
      articles: ActiveModelSerializers::SerializableResource.new(articles,
        each_serializer: Api::V1::ArticleSerializer)
    }
  end
end
