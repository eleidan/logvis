# Entry point for the JS application
class HomeController < ApplicationController
  rescue_from ActionView::MissingTemplate do
    head status: 500
  end

  def index
  end
end
