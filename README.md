## Getting Started

### create AWS Resources
1.install terraform.<br>
https://learn.hashicorp.com/tutorials/terraform/install-cli

2.set environment value.
terraform_setup/terraform.tfvars

```bash
aws_access_key = "XXXXXX"
aws_secret_key = "XXXXXX"
aws_account_id = "XXXXXX"
aws_region     = "XXXXXX"
aws_resource_prefix = "XXXXXX"
```

3.move terraform_setup
```bash
cd terraform_setup
```

4.set terraform
```bash
terraform init
terraform plan
terraform apply
```

### CircleCI
1.create circleci account.

2.set environment value.

```bash
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_DEFAULT_REGION
AWS_ACCOUNT_ID
AWS_RESOURCE_NAME_PREFIX
AWS_ECR_ACCOUNT_URL
```

### Start the server
1.run the development server:

```bash
docker-compose up --build
```

## Reference
### フォルダ構成
- https://qiita.com/kentt/items/c86782b481ec175a57e2

### Typescript
- https://qiita.com/Gma_Gama/items/9df765e00d7fda733222

### 状態管理
- https://qiita.com/hiraike32/items/71b14755f56208a8a133

### storybook
- https://qiita.com/keitakn/items/982d7e6cdfc294c82a95
