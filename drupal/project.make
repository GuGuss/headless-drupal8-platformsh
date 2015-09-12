api = 2
core = 8.x

; Drupal core.
projects[drupal][type] = core
projects[drupal][version] = 8.0.0-beta15

; Composer Manager.
projects[composer_manager][type] = "module"
projects[composer_manager][download][type] = "git"
projects[composer_manager][download][branch] = "8.x-1.x"

; CORS.
projects[cors][type] = "module"
projects[cors][download][type] = "get"
projects[cors][download][url] = "https://github.com/dmouse/cors-drupal8/archive/master.tar.gz"
