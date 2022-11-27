class Mutations::CreateBook < Mutations::Base
  argument :title, String, required: true
  argument :descriptions, String, required: true
  argument :image, ApolloUploadServer::Upload, required: false

  field :book, Types::BookType, null: true
  # field :errors, [Types::UserErrorType], null: false

  def resolve(title:, descriptions:, image:)

    @xx = Book.new(title: title,
                   descriptions: descriptions,
                   image: image)
    if @xx.save
      { book: @xx }
    else
      Book.new
    end

    # current_user = ensure_current_user
    # article = current_user.articles.find(id)
    #
    # article.update(
    #   title: title,
    #   description: description,
    #   body: body,
    #   tag_list: tag_list
    # )
    #
    # {
    #   errors: user_errors(article.errors),
    #   article: article.reload
    # }
  end
end
