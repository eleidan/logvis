require 'rails_helper'

RSpec.feature 'User visits home page' do
  background do
    visit root_path
  end

  scenario 'successfully' do
    expect(page).to have_text('LogVis')
    expect(page).to have_text('Welcome to LogVis!')
    expect(page).to have_text('Continue »')
    expect(page).to have_text('Eleidan')

    expect(page).to have_css('footer')
    expect(page).to have_css('nav')
  end
end
