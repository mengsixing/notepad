import { ItodoItem } from '../interfaces/index';

export function createDateString(date: Date): string {
    return date.toLocaleDateString().replace(/\//g, '-');
}

export function removeItems(allArray: ItodoItem[], partArray: string[]): ItodoItem[] {
    return allArray.filter((item: ItodoItem) => {
        return partArray.indexOf(item.title) < 0;
    });
}

export function isInArray(array: ItodoItem[], text: string): boolean {
    return array.some((item: ItodoItem) => item.title === text);
}
