const { generateGroupId } = require('../helpers/apiHelper');
const { faker } = require('@faker-js/faker')

const mockGroupId = generateGroupId();


// You need to change this constants on your own data for stable work of tests
// ------------------------------------------------------------------------
const mockPersonalTelegramData = {"query_id":"AAEM3tIZAAAAAAze0hl4IGqz","user":"{\"id\":433249804,\"first_name\":\"Ilya\",\"last_name\":\"Sapronov\",\"username\":\"Iliandrik\",\"language_code\":\"en\"}","auth_date":"1658996809","hash":"29205e38fa80f7f69b38141806c07a126c240543466e72df5c75c6e48faf16cc"};                                          
const mockAssistantTelegramData = {"query_id":"AAE3SfY-AAAAADdJ9j4QITp1","user":"{\"id\":1056327991,\"first_name\":\"Vladislav\",\"last_name\":\"Yusupov\",\"username\":\"iamvladislav\",\"language_code\":\"en\"}","auth_date":"1658988403","hash":"6f19e07c5fa68c540d55403bc475df4358ad04a8d532e1913260e9228241d5b3"};

const mockOwnerId = 433249804; 

const mockOwnerAddress = "0x2D0805dB0736690c3f86A8CC40470ABED54AFC3E";
const mockSomeAddress = "0x497F3cC562D500371dc093B5086c73Fa7ae57C9c";
const mockParticipantsList = [
  "0x02cC2c7Fec33591ac1C0b605d34bE504Db632280",
  // OPTIONAL: You can add here some new addressess if you want
]
// ------------------------------------------------------------------------


const mockData = {
  "telegramPersonalData": mockPersonalTelegramData,
  "telegramAssistantData": mockAssistantTelegramData,
  "groupId": mockGroupId,
  "ownerId": mockOwnerId,
  "ownerAddress": mockOwnerAddress,
  "participantsList": [
    ...mockParticipantsList
  ],
}

const proposalData = {
  "addressForAdd": mockSomeAddress,
  "addressForRemove": mockParticipantsList[faker.datatype.number({ min: 0, max: (mockParticipantsList.length - 1) })],
  "addressForTransferEth":mockSomeAddress,
  "addressForContract":mockSomeAddress,
}

const assistantData = {
  "id": 1056327992,
  "firstName": "Vladislav",
  "lastName": "Yusupov",
  "username": "@iamvladislove"
}

const personalData = {
  "id": mockOwnerId,
  "firstName": "Ilya",
  "lastName": "Sapronov",
  "username": "@Iliandrik"
}

const TransactionType = {
  "ADD": "add participant",
  "REMOVE": "remove participant",
  "TRANSFER_ETH": "transfer ethers",
  "CONTRACT": "contract interaction",
}

module.exports = { mockData, proposalData, personalData, assistantData, TransactionType}