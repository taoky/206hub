source "https://rubygems.org"

gem "jekyll", "~> 4.0", ">= 4.0.1"

group :jekyll_plugins do
  # gem "jekyll-feed", "~> 0.12"
  gem "jekyll-archives"
  gem "jekyll-mentions"
  gem "jekyll-tidy" if ENV["GITHUB_ACTIONS"]
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

