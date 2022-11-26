# frozen_string_literal: true

module Types
  class BookType < Types::BaseObject
    field :id, ID, null: false
    field :title, String
    field :descriptions, String
    field :image, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def image
      object.image_url
    end
    # field :title, Types::StringType
    # field :description, Types::StringType
  end
end
