module Types
  class QueryType < Types::BaseObject

    field :books, [Types::BookType], null: true
    def books()
      Book.all
    end

  end
end
