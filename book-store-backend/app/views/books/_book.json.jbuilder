json.extract! book, :id, :title, :descriptions, :created_at, :updated_at
json.url book_url(book, format: :json)
