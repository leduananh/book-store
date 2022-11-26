class ReactController < ApplicationController

  def index
  end

  def redirect
    respond_to do |format|
      format.html { render template: 'react/index', layout: 'application', status: 404, locals: { path: request.path } }
      format.all { render nothing: true, status: 404 }
    end
  end

end
