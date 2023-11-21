import {faker} from "@faker-js/faker";

export const generator = {
    password: (): string => {
        return faker.internet.password({length: 6});
    }
}