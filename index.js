const path = require('path')
const {integrator, parser, encoder} = require('@antklim/api-to-cloud')

const apiDefinitionPath = path.join(__dirname, 'test-api.yaml')
const integrationDefinitionPath = path.join(__dirname, 'test-integration.yaml')
const awsApiDefinitionPath = path.join(__dirname, 'test-api-aws.yaml')

const main = async (_apiDefinitionPath, _integrationDefinitionPath, _awsApiDefinitionPath) => {
  const apiDefinition = await parser.parse(_apiDefinitionPath)
  const integrationDefinition = await parser.parse(_integrationDefinitionPath)
  const awsApiDefinition = await integrator.extend(apiDefinition, integrationDefinition)
  await encoder.save(awsApiDefinition, _awsApiDefinitionPath, 'yml')
}

main(apiDefinitionPath, integrationDefinitionPath, awsApiDefinitionPath)