resource "google_cloudbuild_trigger" "filename-trigger" {
  trigger_template {
    branch_name = "master"
    repo_name   = "https://github.com/rzeAkbari/tutorial-cloud-buil-run"
  }
  project = "terraform-tutorial-324710"

  filename = "cloudbuild.yaml"
}