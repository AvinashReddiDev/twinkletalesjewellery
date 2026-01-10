# GitHub Branch Protection Rules for main branch

## How to Set Up:
1. Go to your repository on GitHub
2. Navigate to Settings → Branches
3. Under "Branch protection rules", click "Add rule"
4. Apply the following settings:

## Branch Protection Rule Configuration

**Pattern:** `main`

### Require approvals
- ✅ Require pull request reviews before merging
  - Required number of reviewers: **1**
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require code owner reviews
  - ✅ Require approval of the most recent reviewable push

### Require status checks
- ✅ Require branches to be up to date before merging
- ✅ Require status checks to pass before merging
  - Add status checks:
    - `build`
    - `lint`
    - `test`

### Restrict who can push to matching branches
- ✅ Restrict who can push to matching branches
  - Allow admins to bypass these settings

### Other protections
- ✅ Require conversation resolution before merging
- ✅ Require linear history
- ✅ Require merge queue (optional for smaller teams)
- ✅ Require branches to be up to date before merging
- ✅ Allow force pushes: **Disabled**
- ✅ Allow deletions: **Disabled**

## Command Line Setup (using GitHub CLI)

```bash
# Install GitHub CLI if not already installed
# https://cli.github.com/

# Authenticate
gh auth login

# Create the ruleset
gh api repos/avinashReddiDev/twinkletalesjewellery/rulesets \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -f name="Protect main" \
  -f description="Protection rules for main branch" \
  -f target="branch" \
  -F conditions='{"ref_name":{"include":["main"]}}' \
  -f bypass_actors='[{"actor_type":"OrganizationAdmin","bypass_mode":"always"}]' \
  -F rules='[
    {"type":"pull_request","parameters":{"dismiss_stale_reviews_on_push":true,"require_code_owner_review":true,"require_last_push_approval":true,"required_approving_review_count":1}},
    {"type":"required_status_checks","parameters":{"required_status_checks":[{"context":"build"},{"context":"lint"},{"context":"test"}],"strict_required_status_checks_policy":true}},
    {"type":"required_linear_history"},
    {"type":"restrict_creations"},
    {"type":"dismiss_stale_reviews_on_push"}
  ]'
```

## Next Steps:
1. Set up CI/CD workflows (GitHub Actions) for build, lint, and test checks
2. Configure code owners if needed (create `.github/CODEOWNERS` file)
3. Test the rules with a feature branch before merging to main
