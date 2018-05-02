class Api::V1::ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
end
