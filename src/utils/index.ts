import { ItodoItem } from '../interfaces/index';

export function createNowDateString(): string {
    return new Date().toLocaleDateString().replace(/\//g, '-');
}

export function removeItems(allArray: ItodoItem[], partArray: string[]): ItodoItem[] {
    const partArrayString = partArray.join();
    return allArray.filter((item) => {
        return partArrayString.indexOf(item.text) < 0;
    });
}

export function isInArray(array: ItodoItem[], text: string): boolean {
    let result = false;
    array.forEach((item) => {
        if (item.title === text) {
            result = true;
        }
    });
    return result;
}
