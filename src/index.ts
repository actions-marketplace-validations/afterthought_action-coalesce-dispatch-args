import * as core from '@actions/core';


const defaultArgs = JSON.parse(core.getInput('default_args', { required: true }));
const inputArgs = JSON.parse(core.getInput('input_args', { required: true }));
const slashArgs = JSON.parse(core.getInput('slash_args', { required: true }));

const result = {
  ...defaultArgs,
  ...inputArgs,
  ...slashArgs,
};

core.setOutput('result', JSON.stringify(result));

for (const [key, value] of Object.entries(result)) {
  core.setOutput(key, value);
}


