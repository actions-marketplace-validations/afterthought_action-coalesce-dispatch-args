We use [peter-evans](https://github.com/peter-evans/repository-dispatch) actions for dispatch. This action is compatible.

## usage
github.event.inputs.tag_name = undefined
github.event.client_payload.slash_command.args.named.tag_name = v1

```yaml
on:
  workflow_dispatch:
    inputs:
      tag_name:
        description: 'Tag name used to deploy. Use format v1.0.0-pre+build'     
        required: false
  repository_dispatch:
    types: [deploy-infra-production-command]

- uses: afterthought/action-coalesce-dispatch-args@v1
  id: args
  with:
    input_args: ${{ toJSON(github.event.inputs) }}
    slash_args: ${{ toJSON(github.event.client_payload.slash_command.args.named) }}
    default_args: |
      {
        "tag_name": "foobar"
      }


- run: echo "${{ steps.args.outputs.tag_name }}"
```



---
### License
MIT
