import faker from 'faker';
const jobTitles = require('./jobs');


interface InterfaceProps {
    [key: string]: () => string;
}

const fake = (prop: string) => faker.fake(`{{${prop}}}`);

const generateId = () => fake('random.uuid');
const generateNumberInRange = (minimum: number, maximum: number) => {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);

    return Math.floor(Math.random() * (max - min) + min);
};
const generateGrade = () => generateNumberInRange(1, 15).toString();
const generateNumber = () => fake('random.number');
const generatePastDate = () => fake('date.past');
const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
const getJobTitle = () => getRandomItem(jobTitles);

export const customPrimitives: {[index: string]: InterfaceProps} = {
    IFileDTO: {
        // fileType: () => fake('system.fileType'),
        // fileName: () => fake('system.fileName'),
    },
    IPermissionActionResponse: {
        entityId: generateId,
    },
    IJobRequisitionGroupListDtoRequisitions: {
        //id: generateId,
        gradeFrom: generateGrade,
        gradeTo: generateGrade,
        updated: generatePastDate,
        title: getJobTitle,
    },
    IJobRequisitionGroupListDtoRequisitionsMembersDelegate: {
        //id: generateId,
    },
    IJobRequisitionGroupListDtoRequisitionsMembersOwner: {
        //id: generateId,
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
        //personId: generateId,
    },
    IConditionsOfEmploymentDTO: {
        firstWorkingDate: generatePastDate,
    },
    IJobRequisitionPlainWithDepartmentsDto: {
        title: getJobTitle,
        jobGrade: generateGrade,
        //ownerPersonId: generateId,
    },
};
