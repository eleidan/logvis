require 'rails_helper'

RSpec.describe HomeController do
  before { send_request }

  describe 'GET #index, format: :html' do
    let(:send_request) { get :index, format: :html }

    it { expect(response).to have_http_status(:ok) }
  end

  describe 'GET #index, format: :json' do
    let(:send_request) { get :index, format: :json }

    it { expect(response).to have_http_status(:internal_server_error) }
  end
end
