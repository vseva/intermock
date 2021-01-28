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
const generateSfId = () => generateNumberInRange(1000000, 9999999).toString();
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
        sfId: generateSfId,
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
        sfId: generateSfId,
    },
    IJobRequisitionWithApplicationStatusesDTO: {
        sfId: generateSfId,
    },
    IOffersToApproveViewDto: {
        sfId: generateSfId,
    },
    IRequisitionPlainDTO: {
        sfId: generateSfId,
    },
    IRequisitionShortInfoDTO: {
        sfId: generateSfId,
    },
    IRequisitionUpdatePlainDTO: {
        sfId: generateSfId,
    },
    IRequisitionWithOrgStructureInfoDTO: {
        sfId: generateSfId,
    },
    IViewJobRequisitionFreeFromCandidatesDto: {
        sfId: generateSfId,
    },
    IApplicationGroupInfoApplications: {
        sfId: generateSfId,
    },
    ICandidateApplicationDTO: {
        sfId: generateSfId,
    },
    ICandidateDTO: {
        sfId: generateSfId,
    },
    ICandidateRequisitionDTO: {
        sfId: generateSfId,
    },
    IJobApplicationTaskDto: {
        sfId: generateSfId,
    },
    IJsonRpcMethodJobApplicationMtwId: {
        sfId: generateSfId,
    },
    IRequisitionShortInfoWithDepartmentsDto: {
        sfId: generateSfId,
    },
    IJobRequisitionListItemDTO: {
        sfId: generateSfId,
    },
};
