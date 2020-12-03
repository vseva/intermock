const faker = require('faker');


interface InterfaceProps {
    [key: string]: () => string;
}

const fake = (prop: string) => faker.fake(`{{${prop}}}`);

export const customPrimitives: {[index: string]: InterfaceProps} = {
    IFileDTO: {
        // fileType: () => fake('system.fileType'),
        // fileName: () => fake('system.fileName'),
    },
};
