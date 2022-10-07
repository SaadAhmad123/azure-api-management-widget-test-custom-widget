const {deployNodeJS} = require("@azure/api-management-custom-widgets-tools")

const serviceInformation = {
	"resourceId": "subscriptions/2affe7f5-a6d7-4ac5-812c-64e297d41b95/resourceGroups/DefaultResourceGroup-EAU/providers/Microsoft.ApiManagement/service/saad-ahmad-kwi12-test-apim",
	"managementApiEndpoint": "https://management.azure.com"
}
const name = "test-custom-widget"
const fallbackConfigPath = "./static/config.msapim.json"

deployNodeJS(serviceInformation, name, fallbackConfigPath)
