class Api::V1::ExamplesController < Api::V1::Base::AuthorizeController
  def index
    render_success
  end
end
