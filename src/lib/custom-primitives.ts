const faker = require('faker');


interface InterfaceProps {
    [key: string]: () => string;
}

const fake = (prop: string) => faker.fake(`{{${prop}}}`);

const generateId = () => fake('random.uuid');
const generateNumber = () => fake('random.number');
const generatePastDate = () => fake('date.past');
const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export const customPrimitives: {[index: string]: InterfaceProps} = {
    IFileDTO: {
        // fileType: () => fake('system.fileType'),
        // fileName: () => fake('system.fileName'),
    },
    IPermissionActionResponse: {
        entityId: generateId,
    },
    IJobRequisitionGroupListDtoRequisitions: {
        id: generateId,
        gradeFrom: generateNumber,
        gradeTo: generateNumber,
        updated: generatePastDate,
        title: () => getRandomItem([
            'Менеджер',
            'Инженер',
            'Кассир',
        ]),
    },
    IJobRequisitionGroupListDtoRequisitionsMembersDelegate: {
        id: generateId,
    },
    IJobRequisitionGroupListDtoRequisitionsMembersOwner: {
        id: generateId,
    },
    IJobRequisitionGroupListDTO: {
        groupId: generateId,
        groupName: () => getRandomItem([
            'Закрытые',
            'Открытые',
            'Новые'
        ]),
    },
    IJobRequisitionPostingResponseWithStateDTO: {
        activeFrom: generatePastDate,
        activeTo: generatePastDate,
    },
    IDeputyItemDTO: {
        personId: generateId,
    },
};
