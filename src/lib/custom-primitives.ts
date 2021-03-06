import faker from 'faker';
const jobTitles = require('./jobs');


interface InterfaceProps {
    [key: string]: () => string;
}

const fake = (prop: string) => faker.fake(`{{${prop}}}`);

const generateNumberInRange = (minimum: number, maximum: number) => {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);

    return Math.floor(Math.random() * (max - min) + min);
};
const generateGrade = () => generateNumberInRange(1, 15).toString();
const generateSfId = () => generateNumberInRange(1000000, 9999999).toString();
const generateNumberUnderHundred = () => generateNumberInRange(1, 100).toString();
const generatePastDate = () => fake('date.past');
const generateFutureDate = () => fake('date.future');
const generateJobTitle = () => getRandomItem(jobTitles);
const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
const generateSingleWord = () => fake('lorem.word');

export const customPrimitives: {[index: string]: InterfaceProps} = {
    IJobRequisitionGroupListDtoRequisitions: {
        sfId: generateSfId,
        gradeFrom: generateGrade,
        gradeTo: generateGrade,
        title: generateJobTitle,
    },
    IJobRequisitionGroupListDTO: {
        groupName: () => getRandomItem([
            'Закрытые',
            'Открытые',
            'Новые'
        ]),
    },
    IJobRequisitionPostingResponseWithStateDTO: {
        activeFrom: generatePastDate,
        activeTo: generateFutureDate,
    },
    IJobRequisitionPlainWithDepartmentsDto: {
        title: generateJobTitle,
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
        positionNumber: generateSfId,
        grade: generateGrade,
        title: generateJobTitle,
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
    IJobPositionWithPersonsDTO: {
        grade: generateGrade,
        number: generateSfId,
    },
    IViewMyTeamSummaryDtoEmptyPreviews: {
        grade: generateGrade,
        number: generateSfId,
        percentAllocated: generateNumberUnderHundred,
        percentFree: generateNumberUnderHundred,
        percentOccupancy: generateNumberUnderHundred,
    },
    IViewMyTeamSummaryDtoPartialPreviews: {
        grade: generateGrade,
        number: generateSfId,
        percentAllocated: generateNumberUnderHundred,
        percentFree: generateNumberUnderHundred,
        percentOccupancy: generateNumberUnderHundred,
    },
    IViewMyTeamSummaryDtoTakenPreviews: {
        grade: generateGrade,
        number: generateSfId,
        percentAllocated: generateNumberUnderHundred,
        percentFree: generateNumberUnderHundred,
        percentOccupancy: generateNumberUnderHundred,
    },
    IPositionDto: {
        gradeLevel: generateGrade,
        positionName: generateJobTitle,
    },
    ICandidateConsentDtoConsents: {
        purpose: () => 'CANDIDATE_POOL',
    },
    ICandidateApplicationViewDtoPostingInfo: {
        jobRequisitionDescriptionTitle: generateJobTitle,
    },
    ICandidateContactsDtoSocialNetworks: {
        id: () => generateNumberInRange(0, 8).toString(),
        url: () => fake('internet.url'),
    },
    ICandidateTagsTags: {
        key: generateSingleWord,
        value: generateSingleWord,
    },
};
