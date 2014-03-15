Vagrant::Config.run do |config|
  config.vm.box = "heroku"
  config.vm.box_url = "https://dl.dropboxusercontent.com/s/rnc0p8zl91borei/heroku.box"

  config.vm.provision :chef_solo do |chef|
    chef.add_recipe("libyaml")
  end
end
