import React from 'react';

import {formFieldTags} from './config';
import {EFormFieldTag, IKeydownOptions} from './types';






export type TEmpty = undefined|null;
export type TArrayOrEmpty<T> = T[]|TEmpty;
/**
 * 刪除陣列中的一筆資料
 *
 * removeByIndex([1,2,3], 1)
 * > [1,3]
 *
 * @param arrayData
 * @param index
 */
export function removeByIndex<T, A extends TArrayOrEmpty<T>>(arrayData: T[]|A, index: number): A {
    if(!arrayData) return arrayData;

    if(index === -1 || index > arrayData.length - 1) return arrayData as A;
    return [...arrayData.slice(0, index), ...arrayData.slice(index + 1)] as A;
}
