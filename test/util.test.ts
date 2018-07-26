import { ItodoItem } from '../src/interfaces/index';
import * as utils from '../src/utils/index';

const mockItem: ItodoItem = {
    title: '测试title',
    createDate: new Date('2018-07-26'),
    startDate: new Date('2018-07-26'),
    finishDate: new Date('2018-07-26'),
    deleteDate: new Date('2018-07-26'),
    isStore: false,
    };
const mockItemList = [
    mockItem,
];

test('createDateString 方法', () => {
    expect(utils.createDateString(new Date('2010-10-10'))).toBe('2010-10-10');
});

test('isInArray 方法', () => {
    expect(utils.isInArray(mockItemList, 'oooo')).toBe(false);
    expect(utils.isInArray(mockItemList, '测试')).toBe(false);
    expect(utils.isInArray(mockItemList, '测试title')).toBe(true);
});

test('removeItems 方法', () => {
    expect(utils.removeItems(mockItemList, ['测试title'])).toEqual([]);
    expect(utils.removeItems(mockItemList, ['oooo'])).toEqual(mockItemList);
});
